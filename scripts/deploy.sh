#!/bin/bash
# Unified Deployment Script
# Primary: Production | Optional: Development Mode
# Version: 1.0.0 (base) + dev extensions

set -e

echo "====================================="
echo "DevOps Simulator - Unified Deployment"
echo "====================================="

# Configuration
DEPLOY_ENV=${DEPLOY_ENV:-"production"}   # default to production
DEPLOY_REGION="us-east-1"
APP_PORT=8080
DEPLOY_MODE="kubernetes"                 # default production method
ENABLE_DEBUG=false

# Optional development overrides
if [ "$DEPLOY_ENV" = "development" ]; then
  DEPLOY_MODE="docker-compose"
  APP_PORT=3000
  ENABLE_DEBUG=true
fi

echo "Environment: $DEPLOY_ENV"
echo "Region: $DEPLOY_REGION"
echo "Port: $APP_PORT"
echo "Mode: $DEPLOY_MODE"
echo "Debug: $ENABLE_DEBUG"

# Pre-deployment checks
echo "Running pre-deployment checks..."
if [ ! -f "config/app-config.yaml" ]; then
    echo "Error: Configuration file not found!"
    exit 1
fi

# Optional dependency installation for development
if [ "$DEPLOY_ENV" = "development" ]; then
  echo "Installing dependencies..."
  npm install

  echo "Running tests..."
  npm test
fi

# Deploy application
echo "Starting deployment..."
if [ "$DEPLOY_ENV" = "production" ]; then
  echo "Pulling latest Docker images..."
  # docker pull devops-simulator:latest

  echo "Rolling update strategy initiated..."
  # kubectl rolling-update devops-simulator

  echo "Deployment completed successfully!"
  echo "Application available at: https://app.example.com"
else
  echo "Using Docker Compose for deployment..."
  docker-compose up -d

  echo "Waiting for application to be ready..."
  sleep 5

  echo "Performing health check..."
  curl -f http://localhost:$APP_PORT/health || exit 1

  echo "Development deployment completed!"
  echo "Application available at: http://localhost:$APP_PORT"
  echo "Hot reload enabled - code changes will auto-refresh"
fi
