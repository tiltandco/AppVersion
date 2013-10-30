var exec = require('cordova/exec');

/* constructor */

function AppVersion() {}

AppVersion.prototype.get = function(str) {
    exec(

    function(reply) {
        callback('ok: ' + reply);
    }, function(err) {
        callback('Error: ' + err);
    }, "AppVersion", "echoTest", [str]);
};


var appversion = new AppVersion();
module.exports = appversion;