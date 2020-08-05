# PIP-DES

PIP **D**evelopment **E**nvironment **S**etup is a collection of node.js packages, starter files, and directory structure for the PIP project. For a breakdown of project configurations and development dependencies, please refer to the "devDependencies" section in the package.json file located in the root directory of this repo.

## Software Requirements (and recommendations)

### Github Desktop
Download and install the latest version of <a href="https://desktop.github.com/">Github Desktop</a>

**Already have Github Desktop installed?** Check that you're running version 2.5.3 by opening the program and opening "About Github Desktop" under the help menu located in the menu bar at the top of the window. 


### Atom 
Download and install the lastest version of <a href="https://atom.io/" target="_blank"> Atom text editor (v1.49.0 available for Windows/macOS/Linux)</a>

### Node.js
Get the latest stable release of <a href="https://nodejs.org/en/download/" target="_blank">Node.js, v12.18.3 available for Windows/macOS/Linux (includes npm 6.14.6) </a>

Note: If you have an older system (or a system based on 32-bit integers), you may need to opt for the 32-bit version.

#### Node Installation Tips

**1.** After agreeing to to the licensing agreement, the installer will prompt you for the installation location. 
  -> Leave the default location, unless you have a specific need to install it somewhere else.

**2** The install wizard will allow you to select components to include or remove from the installation. 
  -> Again, unless you have a specific need, accept the defaults.

**3** When prompted to automatically install additional dependencies (python and <a href="https://chocolatey.org/packages/nodejs">chocolatey</a>)
  -> I would encourage allowing node to handle this for you, unless you have a specific reason to do so manually. 


#### Verify Installation
Open a command prompt (or PowerShell), and enter the following:

node –v
The system should display the Node.js version installed on your system. You can do the same for NPM:

npm –v
