App Version Plugin
--------------------------------

**DEPERECATED** in favour of https://github.com/whiteoctober/cordova-plugin-app-version


Basic plugin used to optain the build version in both ios and android.

Useage example
	
    window.plugins.appVersion.get(function(versionNumber) {
        console.log('Success ' + versionNumber);
    }, function() {
        console.log('Fail');
    });
