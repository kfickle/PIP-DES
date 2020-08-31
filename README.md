# PIP-Resources

This repository is a collection of node.js packages, starter files, and recommended software for the PIP project. 

## Software Requirements (and recommendations)

### Github Desktop
 <a href="https://desktop.github.com/"> Download Github Desktop</a>

### Recommended Text Editor: Atom 
<a href="https://atom.io/" target="_blank"> Download the lastest version of Atom</a>

### XAMPP Apache Web Server
<a href="https://www.apachefriends.org/download.html"> Download XAMPP Web Server </a> Version 7.3.2# / PHP 7.3.2# 

*If you use the download button for your respective platform (Linux, Windows, Mac, etc.) the site should automatically give you a compatiable install package for your operating system version.*

#### XAMPP Installation Tips

**1.** If you have an antivirus running, you may receive a warning about it impacting the installation wizard. This typically isn't an issue, so it's fine to proceed with the antivirus enabled. 

**2.a** (on Windows OS) User Account Control (UAC) can interfere with the XAMPP installation because it limits writing access to the C: drive. Typically, installing the program in the root of your C:\ drive, rather than your programs folder allows XAMPP to install sucessfully without issue. If you find a warnig still appears, proceed to step 2.b

**2.b** First, ensure that your user account has administrator privilege. 
If the error still occurs on an admin account, try deactivating UAC for the duration of the installation process.
<br>Instructions for turning off your UAC are provided on the <a href="https://support.microsoft.com/en-us/help/17228/windows-protect-my-pc-from-viruses#">Microsoft Windows support website.</a>

**3.** When asked to select components, select "Apache", "MySQL", "PHP" and "phpMyAdmin". You're welcome to install anything else you'll make use of, but these are the base files that make XAMPP useful as a PHP development environment for dynamic and static projects. 

![xampp components to install](https://raw.githubusercontent.com/kfickle/images/34536f1bbf01ae2ea4d17a0d3634cd9df55b3514/xampp-components.PNG)

### Node.js
<a href="https://nodejs.org/en/download/" target="_blank"> Download Node.js, version 12.18.3 </a>(includes npm 6.14.6+) 

#### Node Installation Tips

**1.** After agreeing to the licensing agreement, the install wizard will prompt you to select the installation location. 
<br>*Selecting the default install location is recommended on most systems*

**2** The install wizard will allow you to select components to include or remove from the installation. 
<br>*Again, defaults are recommended*

**3** The install wizard will ask to install additional dependencies (python and <a href="https://chocolatey.org/packages/nodejs">chocolatey</a>) automatically.
<br>*Allow the wizard to install these dependendcies, unless you have a reason to install these programs and package files manually.*


#### Verify Node and NPM Installation
Open your preferred command line interface, and enter the following:

```node –v```

If Node.js installed sucessfully, the system should display the Node.js version currently installed. 

Also verify that npm installed sucessfully by entering:

```npm –v```

## Quick Start
## Starting the Web Server 

a. Download the starter files, then place them in your newly-created web server directory. On Windows, this will be ```C:\xampp\htdocs``` 

b. Rename the folder to "PIP".

c. Launch XAMPP, then turn on Apache in the control panel that appears on your screen.
![xampp control panel](https://raw.githubusercontent.com/kfickle/images/master/xampp%20cntrl.PNG)

d. In preferred web browser, navigate to http://localhost/PIP/dist. This should automatically open our project index page, regardless of the file extension (html, php, etc.)

## Starting Gulp Task Automation/SASS Compile

1. Open your preferred command line interface and change directory to the main project folder. <br> i.e. ``` cd C:\xampp\htdocs\PIP ```

2. The first time you launch the Gulp task, run ```npm install gulp-cli -g``` to ensure the gulp Command Line Interface is active in the directory. 

3. Start running the default gulp task(s) by entering  ```gulp``` into the command line. 

That's about it! The gulp task should continue running as long as you leave the cmd open, and will automatically compile sass files into plan css, add vendor prefixes, minify our stylesheets, concatenate our script files, and watch our src directory for file changes. 


