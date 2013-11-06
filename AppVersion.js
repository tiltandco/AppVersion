var exec = require('cordova/exec');

/* constructor */

function AppVersion() {}

AppVersion.prototype.get = function(success, fail) {
    exec(success, fail, "AppVersion", "get", []);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.appVersion) {
    window.plugins.appVersion = new AppVersion();
}
