#!/bin/sh

set -o errexit
set -o nounset

IFS=$(printf '\n\t')

# Node installation

curl -s https://deb.nodesource.com/setup_16.x | sudo bash
sudo apt install nodejs -y

# wget --quiet --output-document=- https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# sudo add-apt-repository --yes "deb [arch=$(dpkg --print-architecture)] https://download.docker.com/linux/ubuntu $(lsb_release --codename --short) stable"
# sudo apt update
# sudo apt --yes --no-install-recommends install docker-ce docker-ce-cli containerd.io
# sudo usermod --append --groups docker "$USER"
# sudo systemctl enable docker
# printf '\nDocker installed successfully\n\n'

# printf 'Waiting for Docker to start...\n\n'
# sleep 5

# Docker-Compose installation

# sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep '\"tag_name\":' | sed -E 's/.*\"([^\"]+)\".*/\1/')/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# sudo chmod +x /usr/local/bin/docker-compose
# printf '\nDocker-Compose installed successfully\n\n'
# sleep 2

# # VMS installation
# printf '\nInstalling VMS\n\n'
# ip_address=`hostname -I | awk '{ print $1 }'`
# sed -i "/^MACHINE_HOST=/s/[^=]*$/${ip_address}/;/^APP_HOST=/s/[^=]*$/${ip_address}/" .env

# sudo docker-compose up -d