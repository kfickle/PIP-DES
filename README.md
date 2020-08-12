# PIP-DES

This repository is a collection of node.js packages, starter files, and recommended software for the PIP project. 

## Software Requirements (and recommendations)

### Github Desktop
 <a href="https://desktop.github.com/"> Download Github Desktop</a>

### Recommended Text Editor: Atom 
<a href="https://atom.io/" target="_blank"> Download the lastest version of Atom</a>

### XAMPP Apache Web Server
<a href="https://www.apachefriends.org/download.html"> Download XAMPP Web Server </a> Version 7.3.20 / PHP 7.3.20 <br> *If you use the download button for your respective platform (Linux, Windows, Mac, etc.) the site should automatically give you a compatiable install package for your operating system version.*

#### XAMPP Installation Tips

**1.** If you have an antivirus running, you may receive a warning about it impacting the installation wizard. This typically isn't an issue, so it's fine to proceed with the antivirus enabled. 

**2.** (on Windows OS) If the install wizard warns you about UAC permissions, proceed to the next screen. We'll correct this in step 4.

**3.** When asked to select components, select "Apache", "MySQL", "PHP" and "phpMyAdmin". You're welcome to install anything else you'll make use of, but these are the base files that make XAMPP useful as a PHP development environment for dynamic and static projects. 

![xampp components to install](https://raw.githubusercontent.com/kfickle/images/34536f1bbf01ae2ea4d17a0d3634cd9df55b3514/xampp-components.PNG)

**4.** (on Windows OS, cont.) Once you're prompted to select an install location, select the root of your C:\ drive, rather than your programs folder. This should allow XAMPP to run properly without changing your UAC permissions. i.e ```C:\xampp```

### Node.js
Get the latest *stable* release of <a href="https://nodejs.org/en/download/" target="_blank">Node.js, v12.18.3 available for Windows/macOS/Linux (includes npm 6.14.6) </a>

Note: If you have an older system (or a system based on 32-bit integers), you may need to opt for the 32-bit version.

#### Node Installation Tips

**1.** After agreeing to the licensing agreement, the installer will prompt you to select the installation location. 
 <br> -> *install the program in the default location, unless you have a specific reason for installing the program elsewhere.*

**2** The install wizard will allow you to select components to include or remove from the installation. 
  <br> -> *Again, unless you have a specific need, accept the defaults.*

**3** The install wizard will ask to install additional dependencies (python and <a href="https://chocolatey.org/packages/nodejs">chocolatey</a>) automatically.
 <br>  -> *I would encourage letting node handle this for you. Otherwise, you'll have to install these programs and package files manually.*


#### Verify Installation
Open a command prompt (or PowerShell), and enter the following:

```node –v```

The system should display the Node.js version installed on your system. 

Also verify that npm installed sucessfully by entering:

```npm –v```

## Quick Start

1. After downloading these base files to your system, cd into your project directory using bash/terminal/command line. <br> i.e. ``` cd C:\parent-directory\project-directory\project-folder ``` *)

2. Run ```npm install gulp-cli -g``` to ensure you have access to the gulp Command Line Interface within the project directory--this won't install gulp globally on your system, but it allows you to interact with gulp via the command line in the directory as though it's a global program. Pretty neat stuff!

3. Run the default gulp task by typing ```gulp``` into bash/terminal/command line--our task has been configured to automatically compile sass files to plan css, add vendor prefixes, minify our stylesheets, concatenate our scripts, and rerun those subtasts automatically when you save changes in the text editor.


That's about it! We can always adjust our gulp task and directory structure as needed throughout the project, but to start things off our source files are located under "src" and our production files are located under "dst" 


