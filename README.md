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

**1.** After agreeing to the licensing agreement, the installer will prompt you to select the installation location. 
 <br> -> Leave this as the default location, unless you have a specific need to install the program elsewhere.

**2** The install wizard will allow you to select components to include or remove from the installation. 
  <br> -> Again, unless you have a specific need, accept the defaults.

**3** The install wizard will ask to install additional dependencies (python and <a href="https://chocolatey.org/packages/nodejs">chocolatey</a>) automatically.
 <br>  -> I would encourage letting node handle this for you, unless you have a specific reason to install these files manually. 


#### Verify Installation
Open a command prompt (or PowerShell), and enter the following:

node –v

The system should display the Node.js version installed on your system. 

Also verify that npm installed sucessfully by entering:

npm –v

## Quick Start

1. After downloading these base files to your system, cd into your project directory using bash/terminal/command line. <br>  (*For example, I typically use XAMPP as my cross-platform apache web server solution, so I would type in something like <br>``` cd C:\xampp\htdocs\projects\PIP ```*)

2. Run ```npm install gulp-cli -g``` to ensure you have access to the gulp Command Line Interface within the project directory--this won't install gulp globally on your system, but it allows you to interact with gulp via the command line in the directory as though it's a global program. Pretty neat stuff!

3. Run the default gulp.js task by typing ```gulp``` into bash/terminal/command line--our task has been configured to automatically compile sass files, add css vendor prefixes, refresh using BrowserSync when source files change, and recompile automatically when you save changes in the text editor.


That's about it! We can always adjust our gulp task and directory structure as needed throughout the project, but to start things off our source files are located under "src" and our production files are located under "dst" 


