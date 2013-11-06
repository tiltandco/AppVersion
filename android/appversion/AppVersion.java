package com.tiltandco.appversion;

import org.apache.cordova.*;

import org.json.JSONArray;
import org.json.JSONException;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;

public class AppVersion extends CordovaPlugin {
	@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        PackageManager packageManager = this.cordova.getActivity().getPackageManager();
        
        try {
            PackageInfo packageInfo = packageManager.getPackageInfo(this.cordova.getActivity().getPackageName(), 0);
            callbackContext.success(packageInfo.versionName);
        }
        catch (NameNotFoundException nnfe) {
        	callbackContext.error("Error");
        }
        
        return true;
    }
}
