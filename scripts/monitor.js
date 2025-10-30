/**
 * System Monitoring Script - Unified Version
 * Base: Production | Optional: Development Features
 */

const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {
  interval: ENV === 'development' ? 5000 : 60000, // 5s for dev, 1m for prod
  alertThreshold: ENV === 'development' ? 90 : 80,
  metricsEndpoint: ENV === 'development'
    ? 'http://localhost:3000/metrics'
    : 'http://localhost:8080/metrics',
  debugMode: ENV === 'development',
  verboseLogging: ENV === 'development'
};

console.log('=================================');
console.log(
  `DevOps Simulator - Monitor ${ENV === 'development' ? 'v2.0-beta' : 'v1.0'}`
);
console.log(`Environment: ${ENV.toUpperCase()}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();

  if (monitorConfig.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }

  // Simulated metrics
  const cpuUsage = Math.random() * 100;
  const memUsage = Math.random() * 100;
  const diskUsage = Math.random() * 100;

  console.log(`✓ CPU usage: ${cpuUsage.toFixed(2)}%`);
  console.log(`✓ Memory usage: ${memUsage.toFixed(2)}%`);
  console.log(`✓ Disk space: ${diskUsage.toFixed(2)}% used`);

  // Development-only additional checks
  if (monitorConfig.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
    console.log('✓ Source maps: Enabled');
  }

  // Determine system status
  const maxUsage = Math.max(cpuUsage, memUsage, diskUsage);
  if (maxUsage > monitorConfig.alertThreshold) {
    console.log('⚠️  System Status: WARNING - High resource usage');
  } else {
    console.log('✅ System Status: HEALTHY');
  }

  if (monitorConfig.verboseLogging) {
    console.log(`Next check in ${monitorConfig.interval}ms`);
  }
}

// Start monitoring
console.log(`Monitoring every ${monitorConfig.interval}ms`);
setInterval(checkSystemHealth, monitorConfig.interval);

// Run first check immediately
checkSystemHealth();

// Optional: extra memory diagnostics for dev
if (monitorConfig.debugMode) {
  console.log('Debug features enabled');
  setInterval(() => {
    const memUsage = process.memoryUsage();
    console.log('\n--- Memory Usage ---');
    console.log(`RSS: ${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Heap Used: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }, 30000);
}
