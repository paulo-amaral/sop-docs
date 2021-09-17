# HOWTO INSTALL 
Please follow the steps bellow to install docusaurus for local development and build the static website.

# Template

This template is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator, to provide a documentation system for the ICT of Courts.

# Prerequistes

### Install NodeJS :
- Windows : 
Visit - https://nodejs.org/en/download/current/ download the Windows Installer .msi (64-bit) file and install the package.

- Linux(Debian):

````console
sudo apt-get install curl software-properties-common 
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - 
apt update
apt install nodejs npm
npm -v
nvm -v
````

# Docusaurus 

##  1 - Clone repo and install

```console
git clone https://github.com/paulo-amaral/easy-sop-docs.git
cd easy-sop-docs
npm install
```

## 2 - Local Development

```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.


## 3 - Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

## 4 - Deployment 

Copy all contents of your Build folder to the webserver:
```console
scp -r build/* user@server:/var/www/
```

## Install search
Docussaurus doesn't have support to offline search, but in this deploy(check docusaurus docs).

The search  is based on: 
https://github.com/lelouch77/docusaurus-lunr-search
