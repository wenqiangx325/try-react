# React

## Getting Started

### Install Node.js

[Node.js](https://nodejs.org/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.

1. Installing Node.js via package manager, more information could find by this [link](https://nodejs.org/en/download/package-manager/).

```bash
# Using Ubuntu via APT
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. Install Node.js in Windows, official Windows Installer(.msi) should be a nice choise. More information could find by this [link](https://nodejs.org/en/download/).

### Install Yarn

[Yarn](https://yarnpkg.com/) is a package manager that doubles down as project manager. Install Yarn via *npm* should be a good choise.

```bash
# Using Linux via sudor
sudo npm install -g yarn

# Using Windows
npm install -g yarn
```

### Creating React Application

Create React Web Application by ```yarn```.

```bash
# yarn create app-name --template typescript
# don't use typescript, remove --template typescript flag 
yarn create react-app my-app --template typescript
```

### Fisrt Running

```bash
# to project root folder
cd my-app

# run project
yarn start

# in broswer goto http://127.0.0.1:3000
```

### Fisrt Building

```bash
# to project root folder,
# if it's current path, skip this command
cd my-app

# build project
yarn build

# goto build folder in root of this project, all file in that folder
```