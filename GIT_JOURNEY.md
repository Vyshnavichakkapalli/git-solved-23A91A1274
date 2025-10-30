# My Git Mastery Challenge Journey

## Student Information
- **Name:** Vaishnavi Chakkapalli  
- **Student ID:** 23A91A1274  
- **Repository:** https://github.com/Vyshnavichakkapalli/git-solved-23A91A1274
- **Date Started:** 28/10/25 
- **Date Completed:** 30/10/25

---

## Task Summary
Cloned the instructor’s repository with pre-built conflicts and resolved all  
merge conflicts across multiple branches using proper Git workflows.

---

## Commands Used

| Command | Times Used | Purpose |
|---------|------------|----------|
| git clone | 1 | Clone instructor's repository |
| git checkout | 20+ | Switch between branches |
| git branch | 10+ | View and manage branches |
| git merge | 2 | Merge `dev` and `conflict-simulator` into `main` |
| git add | 30+ | Stage resolved conflicts |
| git commit | 15+ | Commit resolved changes |
| git push | 10+ | Push to my repository |
| git fetch | 2 | Fetch updates from instructor |
| git pull | 1 | Pull updates |
| git stash | 2 | Save temporary work |
| git cherry-pick | 1 | Copy specific commit |
| git rebase | 1 | Rebase feature branch |
| git reset | 3 | Undo commits (soft/mixed/hard) |
| git revert | 1 | Safe undo |
| git tag | 2 | Create release tags |
| git status | 50+ | Check repository state |
| git log | 30+ | View commit history |
| git diff | 20+ | Compare changes |

---

## Conflicts Resolved

### 🧩 Merge 1: `main` + `dev` (6 Files)

#### Conflict 1: `config/app-config.yaml`
- **Issue:** Production used port `8080`, development used `3000`
- **Resolution:** Created unified config with environment-based settings
- **Strategy:** Keep production as default, add dev as optional
- **Difficulty:** Medium
- **Time:** 15 minutes

#### Conflict 2: `config/database-config.json`
- **Issue:** Different database hosts and SSL modes
- **Resolution:** Created separate profiles for production and development
- **Strategy:** Restructured JSON to support both environments
- **Difficulty:** Medium
- **Time:** 10 minutes

#### Conflict 3: `scripts/deploy.sh`
- **Issue:** Different deployment strategies (production vs docker-compose)
- **Resolution:** Added conditional logic based on `DEPLOY_ENV` variable
- **Strategy:** Made script handle both environments dynamically
- **Difficulty:** Hard
- **Time:** 20 minutes

#### Conflict 4: `scripts/monitor.js`
- **Issue:** Different monitoring intervals and log formats
- **Resolution:** Environment-based configuration object
- **Strategy:** Used `process.env.NODE_ENV` to determine behavior
- **Difficulty:** Medium
- **Time:** 15 minutes

#### Conflict 5: `docs/architecture.md`
- **Issue:** Different architectural descriptions
- **Resolution:** Merged both descriptions into comprehensive document
- **Strategy:** Created sections for each environment
- **Difficulty:** Easy
- **Time:** 10 minutes

#### Conflict 6: `README.md`
- **Issue:** Different feature lists and version numbers
- **Resolution:** Combined all features with clear environment labels
- **Strategy:** Organized features by category
- **Difficulty:** Easy
- **Time:** 10 minutes

---

### ⚙️ Merge 2: `main` + `conflict-simulator` (6 Files)

#### Conflict 1: `scripts/deploy.sh`
- **Issue:** Production logic vs experimental AI-driven deployment logic
- **Resolution:** Combined both under a unified deployment script with feature flags
- **Strategy:** Kept production stable as default, added experimental features behind flags
- **Difficulty:** Hard
- **Time:** 25 minutes

#### Conflict 2: `scripts/monitor.js`
- **Issue:** Simple production monitoring vs AI-enhanced predictive monitoring
- **Resolution:** Merged both by keeping stable code and adding AI mode under a config flag
- **Strategy:** Stable-first; experimental optional
- **Difficulty:** Medium
- **Time:** 20 minutes

#### Conflict 3: `README.md`
- **Issue:** Different documentation formats (basic vs extended dev features)
- **Resolution:** Combined into unified README with Production and Development sections
- **Strategy:** Clearly separated stable and beta features
- **Difficulty:** Easy
- **Time:** 10 minutes

#### Conflict 4: `docs/setup-guide.md`
- **Issue:** Missing development steps in one branch
- **Resolution:** Added development setup instructions (`npm install`, `npm run dev`)
- **Strategy:** Preserve all stable production steps + include dev setup
- **Difficulty:** Medium
- **Time:** 15 minutes

#### Conflict 5: `config/feature-flags.json`
- **Issue:** Feature toggles missing or mismatched
- **Resolution:** Created unified structure with default=false for experimental features
- **Strategy:** Maintain backward compatibility
- **Difficulty:** Medium
- **Time:** 10 minutes

#### Conflict 6: `CONTRIBUTING.md`
- **Issue:** One version had missing contribution guidelines
- **Resolution:** Merged both with clear steps for code style, branching, and PR process
- **Strategy:** Comprehensive documentation merge
- **Difficulty:** Easy
- **Time:** 8 minutes

---

## 💡 Most Challenging Parts

1. **Understanding Conflict Markers:**  
   Initially confused by `<<<<<<<`, `=======`, and `>>>>>>>` symbols. Learned that HEAD refers to current branch and the other side is incoming changes.

2. **Deciding What to Keep:**  
   Choosing between conflicting logic required full context reading before merging.

3. **Complex Logic Conflicts:**  
   `deploy.sh` had different logic for production and experimental deployments; merged with conditionals and environment flags.

4. **Testing After Resolution:**  
   Ensuring that all resolved scripts actually ran correctly and didn’t break dependencies.

---

## 🧠 Key Learnings

### Technical Skills
- Mastered manual conflict resolution  
- Learned `git diff` and `git log` usage for conflict tracing  
- Practiced advanced Git commands like rebase, stash, and cherry-pick  
- Improved understanding of Git internals and workflows  

### Best Practices
- Always read both sides before merging  
- Test before committing  
- Use atomic commits and descriptive messages  
- Rely on `git status` and `git reflog` for recovery  
- Document every resolution  

### Git Workflow Insights
- Conflicts are part of collaborative development  
- Merging carefully ensures quality and code integrity  
- Backups (`git stash`, `git branch backup`) are lifesavers  
- Never panic — Git always has a way to recover  

---

## 🪞 Reflection
This challenge transformed my understanding of Git.  
Merge conflicts no longer feel intimidating — they are simply opportunities to understand both perspectives of the code.  
I gained practical confidence in resolving complex conflicts, managing branches, and maintaining clean history.

The exercise taught me discipline: **read carefully, merge thoughtfully, test thoroughly.**  
Now, I can confidently say I’m ready to handle real-world multi-branch version control challenges in professional environments.

---

**End of GIT_JOURNEY.md**
