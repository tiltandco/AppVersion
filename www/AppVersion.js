var exec = require('cordova/exec');

/* constructor */
function AppVersion() {}

AppVersion.prototype.dummy = function() {
        exec(
            function(result){ alert('ok: '+reply);      },
            function(err){ alert('Error: '+err); }
        , "AppVersion", "echoTest", ['dummy']);
}

AppVersion.prototype.echoTest = function(str, callback) {
        exec(
            function(reply){ callback('ok: '+reply);      },
            function(err){ callback('Error: '+err); }
        , "AppVersion", "echoTest", [str]);
};

AppVersion.prototype.backgroundTest = function(str, callback) {
        exec(
            function(reply){ callback('ok: '+reply);      },
            function(err){ callback('Error: '+err); }
        , "AppVersion", "backgroundJobTest", [str]);
};

var wurst = new AppVersion();
module.exports = wurst;
