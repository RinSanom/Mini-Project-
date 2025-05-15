read -p "Enter commit message: " msg
read -p "Enter Branch name: " branch

git add .
git commit -m "$msg"
git push -u origin  "$branch"

echo "✅ Code pushed to Git successfully!"