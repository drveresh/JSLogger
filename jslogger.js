var logger = (function () {
    function logger(pageId, testing) {
        this.pageId = pageId;
        this.testing = (testing || testing == true) ? true : false;
    }
    function print(msg, type) {
        var logTime = new Date();
        logTime = logTime.getHours() + ":" + logTime.getMinutes() + ":" + logTime.getSeconds() + ":" + Math.floor(logTime.getMilliseconds());
        if ( this.testing ) {
            var logMsg = this.pageId + "[" + logTime + "]# " + msg;
            try {
                if (type == "log")
                    console.log(logMsg);
                if (type == "info")
                    console.info(logMsg);
                else if (type == "warn")
                    console.warn(logMsg);
                else if (type == "error")
                    console.error(logMsg);
            } catch (e) {
                console.log(logMsg);
            }
        }
        return;
    }
    logger.prototype.log = function (msg) {
        return print.call(this, msg, "log");
    }
    logger.prototype.info = function (msg) {
        return print.call(this, msg, "info");
    }
    logger.prototype.warn = function (msg) {
        return print.call(this, msg, "warn");
    }
    logger.prototype.error = function (msg) {
        return print.call(this, msg, "error");
    }
    return logger;
})();