#!/bin/bash

echo "🚀 Starting Git Upload Process..."

# 1️⃣ Check if there are any changes
git status

# 2️⃣ Stage all changes
git add .

# 3️⃣ Commit with timestamp for easy tracking
git commit -m "Update: $(date +'%Y-%m-%d %H:%M:%S')"

# 4️⃣ Push to GitHub
git push origin main

# 5️⃣ Show last 3 commits for validation
git log --oneline -n 3

# 6️⃣ Open GitHub repo in browser for quick check
open https://github.com/xaviki/sigmabot

echo "✅ Git Upload Completed!"
