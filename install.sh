#!/bin/sh

set -o errexit
set -o nounset

IFS=$(printf '\n\t')

# Deps
sudo apt install git
sudo apt install ffmpeg
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm install 16.17.1
npm install -g pm2
pm2 startup

echo 'export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >>~/.bash_profile

# Build
git clone https://github.com/maxim729467/finder-build.git
cd finder-build/

# Launch
pm2 start npm --name "app" -- start
pm2 save
