Plan:

Remove the existing Git history.
Initialize a new Git repository.
Add and commit all files.
Create a new remote repository on GitHub.
Add the new remote and push the commits.

# Remove existing Git history
rm -rf .git

# Initialize a new Git repository
git init

# Add all files to the repository
git add .

# Commit the changes
git commit -m "Initial commit for TROZLANCOM project"

# Add the new remote repository
git remote add origin git@github.com:YourUsername/trozlancom.git

# Push the commits to the remote repository
git push -u origin main

Note:

Replace YourUsername with your actual GitHub username.
Ensure you have created a new repository named trozlancom on GitHub before adding the remote.