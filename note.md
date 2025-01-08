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
git remote add origin git@github.com:MegaPhoenix92/trozlancom.git

# Push the commits to the remote repository
git push -u origin main

Note:

Replace YourUsername with your actual GitHub username.
Ensure you have created a new repository named trozlancom on GitHub before adding the remote.

sozsvath@Chriss-MacBook-Pro trozlancom % pbcopy < ~/.ssh/id_ed25519.pub

chrisozsvath@Chriss-MacBook-Pro trozlancom % ssh-keygen -t ed25519 -C "phaphiao@aol.com" -f ~/.ssh/id_ed25519_trozlancom

Generating public/private ed25519 key pair.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/chrisozsvath/.ssh/id_ed25519_trozlancom
Your public key has been saved in /Users/chrisozsvath/.ssh/id_ed25519_trozlancom.pub
The key fingerprint is:
SHA256:yuYxMNSU1V9rhHeqpcLK3FAnJMDFNA4Fl+x5Si8xbbw phaphiao@aol.com
The key's randomart image is:
+--[ED25519 256]--+
|     .=@Bo   .   |
|     oo+=.o . + .|
|    . ...* . + + |
|   .    * B o =  |
|    o  .SX + =   |
|     + .+ E o    |
|      *o = .     |
|     o o+ .      |
|      .          |
+----[SHA256]-----+
chrisozsvath@Chriss-MacBook-Pro trozlancom % eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_trozlancom
Agent pid 14119
Identity added: /Users/chrisozsvath/.ssh/id_ed25519_trozlancom (phaphiao@aol.com)
chrisozsvath@Chriss-MacBook-Pro trozlancom % pbco

# 6. Update the Git remote URL to use the new SSH configuration
git remote set-url origin git@github-trozlancom:MegaPhoenix92/trozlancom.git

# 7. Test the SSH connection
ssh -T git@github-trozlancom

# 8. Push your commits to the repository
git push -u origin main