sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.test.controller.mainView", {
		onInit: function () {

		},
		pressOpenMobileApp: function (params) {
			// var href = "vnd.youtube://watch?v=GbL39Vald9E";
			var href = "vnd.youtube://";
			window.location.replace(href); 
			//var href="intent://8xn9iq3lG_w/#Intent;scheme=vnd.youtube;package=com.google.android.youtubeS.browser_fallback_url=market://details?id=com.google.android.youtube;end;
		},
		pressOpenFioriClient: function (params) {
			var href = "com.sap.fiori.client.xcallbackurl://x-callback-url/openFioriUrl?url=smartcappd00.sap.tt-tim.tr:8000/sap/bc/ui2/flp"; 
			//var href="com.sap.fiori.client.xcallbackurl";
			window.location.replace(href); 
			// var href ="intent://8xn9iq3lG_w/#Intent;scheme=vnd.youtube;package=com.google.android.youtubeS.browser_fallback_url=market://details?id=com.google.android.youtube;end;
		}

	});
});