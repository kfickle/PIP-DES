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

**2.** (on Windows OS) User Account Control (UAC) can interfere with the XAMPP installation because it limits writing access to the C: drive. Typically, installing the program in the root of your C:\ drive, rather than your programs folder allows XAMPP to install sucessfully, but if you receive an error message try deactivating UAC for the duration of the installation process. Instructions for turning off your UAC are provided on the <a href="https://support.microsoft.com/en-us/help/17228/windows-protect-my-pc-from-viruses#">Microsoft Windows support website.</a>

**3.** When asked to select components, select "Apache", "MySQL", "PHP" and "phpMyAdmin". You're welcome to install anything else you'll make use of, but these are the base files that make XAMPP useful as a PHP development environment for dynamic and static projects. 

![xampp components to install](https://raw.githubusercontent.com/kfickle/images/34536f1bbf01ae2ea4d17a0d3634cd9df55b3514/xampp-components.PNG)

### Node.js
Get the latest *stable* release of <a href="https://nodejs.org/en/download/" target="_blank">Node.js, v12.18.3 available for Windows/macOS/Linux (includes npm 6.14.6) </a>

Note: If you have an older system (or a system based on 32-bit integers), you may need to opt for the 32-bit version.

#### Node Installation Tips

**1.** After agreeing to the licensing agreement, the installer will prompt you to select the installation location. 
 <br> -> *install the program in the default location, unless you have a specific reason for installing the program elsewhere.*

**2** The install wizard will allow you to select components to include or remove from the installation. 
  <br> -> *Again, unless you have a specific need, accept the defaults.*

**3** The install wizard will ask to install additional dependencies (python and <a href="https://chocolatey.org/packages/nodejs">chocolatey</a>) automatically.
 <br>  -> *I recommend letting the install wizard handle this. Otherwise, you'll have to install these programs and package files manually.*


#### Verify Node and NPM Installation
Open a command prompt (or PowerShell), and enter the following:

```node –v```

The system should display the Node.js version installed on your system. 

Also verify that npm installed sucessfully by entering:

```npm –v```

## Quick Start
0a. Download the starter files, then place them in your newly-created web server directory. On Windows, this will be ```C:\xampp\htdocs``` 

0b. Rename the folder to "PIP".

0c. Launch XAMPP, then turn on Apache in the control panel that appears on your screen.
![xampp control panel](https://raw.githubusercontent.com/kfickle/images/master/xampp%20cntrl.PNG)

0d. Open your preferred browser, then navigate to http://localhost/PIP/. This should automatically open our project index page, regardless of the file extension (html, php, etc.)

#### Setting up our task automation for SASS

1. Open your preferred command line interface and cd into the project directory. <br> i.e. ``` cd C:\xampp\htdocs\PIP ```

2. Run ```npm install gulp-cli -g``` to make sure the gulp Command Line Interface is active in the directory--this won't install gulp globally on your system, but it allows you to interact with gulp via the command line in the directory as though it's a global program. Pretty neat stuff!

3. Run the default gulp task by typing ```gulp``` into bash/terminal/command line <br> 

That's about it! We can always adjust our gulp task and directory structure as needed throughout the project, but to start things off our source files are located under "src" and our production files are located under "dist". Our gulp task runner has been configured to automatically compile sass files into plan css, add relevant vendor prefixes, minify our stylesheets, concatenate our script files, and rerun those subtasts automatically when you save changes in the text editor.


