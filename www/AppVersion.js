var exec = require('cordova/exec');

/* constructor */

function AppVersion() {}

AppVersion.prototype.get = function(str) {
    exec(

    function(reply) {
    	console.log('Response ' + reply);
        callback('ok: ' + reply);
    }, function(err) {
        callback('Error: ' + err);
    }, "AppVersion", "get", [str]);
};


var appversion = new AppVersion();
module.exports = appversion;