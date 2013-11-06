App Version Plugin
--------------------------------
Basic plugin used to optain the build version in both ios and android.

Useage example
	
    window.plugins.appVersion.get(function(versionNumber) {
        console.log('Success ' + versionNumber);
    }, function() {
        console.log('Fail');
    });