# SimpleJSLogger
Very simple and useful logging API for Javascripts

How it is useful
---
  - One central API for logging per individual scripts
  - Helps to organize logging per scripts
  - Gives control to display logging or not based on local/dev or prod site
  - Helps to identify the source of logging
  - Supports built-in timestamps
  - In case of errors, it helps trace the function calls

Examples
---
```sh
    var displayLog = true;
    var logMain = new logger("main.js", displayLog);
    logMain.log("Test info logging");
    logMain.info("Test info logging");
    logMain.warn("Test warning logging");
    logMain.error("Test error logging");
```

Installation
---
Just download and use it in script tag

Sample Log
---
![Alt text](http://image.prntscr.com/image/8cff3727ddab44769e721a9b0b5b2092.png "Sample versions of logging")

Licence
-------
GPL ver. 1.0
