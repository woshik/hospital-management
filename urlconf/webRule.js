"use strict";

const { isAuthenticated, CanNotAccessAfterLogin } = require(join(BASE_DIR, "core", "middlewares"));

module.exports = {

	//=====================================================================================================================================//
	//=========================================================== Hospital ===============================================================//
	//===================================================================================================================================//

	hospitalLogin: {
		url: "/login",
		controller: "Hospital",
		methods: {
			loginView: "get",
			login: "post"
		},
		middleware: [CanNotAccessAfterLogin],
		path: "login"
	},

	hospitalLogout: {
		url: "/logout",
		controller: "Hospital",
		methods: {
			logout: "get"
		},
		middleware: [isAuthenticated],
		path: "login"
	},

	hospitalDashboard: {
		url: "/dashboard",
		controller: "Dashboard",
		methods: {
			dashboardView: "get"
		},
		middleware: [isAuthenticated],
		path: "hospital"
	},

	

	// userProfileSetting: {
	// 	url: "/user/profile-setting",
	// 	controller: "Dashboard",
	// 	methods: {
	// 		userProfileSetting: "post"
	// 	},
	// 	middleware: [isUserAuthenticated],
	// 	path: "user"
	// },

	// installAppView: {
	// 	url: "/user/install-app",
	// 	controller: "InstallApp",
	// 	methods: {
	// 		installAppView: "get"
	// 	},
	// 	middleware: [isUserAuthenticated],
	// 	path: "user"
	// },

	// installApp: {
	// 	url: "/user/install-app",
	// 	controller: "InstallApp",
	// 	methods: {
	// 		installApp: "post"
	// 	},
	// 	middleware: [isUserAuthenticated, trialUserCanAccess, userAccountLimitIsAvailable],
	// 	path: "user"
	// },

	// appName: {
	// 	url: "/user/app-name",
	// 	controller: "InstallApp",
	// 	methods: {
	// 		appName: "post"
	// 	},
	// 	middleware: [isUserAuthenticated, trialUserCanAccess, userAccountLimitIsAvailable],
	// 	path: "user"
	// },

	// appListView: {
	// 	url: "/user/app-list",
	// 	controller: "AppList",
	// 	methods: {
	// 		appListView: "get"
	// 	},
	// 	middleware: [isUserAuthenticated],
	// 	path: "user"
	// },

	// appListGet: {
	// 	url: "/user/app-list/get",
	// 	controller: "AppList",
	// 	methods: {
	// 		appList: "get"
	// 	},
	// 	middleware: [isUserAuthenticated],
	// 	path: "user"
	// },

	// appdetails: {
	// 	url: "/user/app-details",
	// 	controller: "AppDetails",
	// 	methods: {
	// 		appDetailsView: "get"
	// 	},
	// 	middleware: [isUserAuthenticated],
	// 	path: "user"
	// },

	// appMessageContent: {
	// 	url: "/user/app-message-content",
	// 	controller: "AppDetails",
	// 	methods: {
	// 		getAppMessageContent: "get"
	// 	},
	// 	middleware: [isUserAuthenticated],
	// 	path: "user"
	// },

	// appdInfoUpdate: {
	// 	url: "/user/app-update",
	// 	controller: "AppList",
	// 	methods: {
	// 		appUpdate: "post"
	// 	},
	// 	middleware: [isUserAuthenticated],
	// 	path: "user"
	// },

	// appStatusChange: {
	// 	url: "/user/app-status-change",
	// 	controller: "AppList",
	// 	methods: {
	// 		appStatusChange: "post"
	// 	},
	// 	middleware: [isUserAuthenticated, trialUserCanAccess, userAccountLimitIsAvailable],
	// 	path: "user"
	// },

	// deleteApp: {
	// 	url: "/user/delete-app",
	// 	controller: "AppList",
	// 	methods: {
	// 		deleteApp: "delete"
	// 	},
	// 	middleware: [isUserAuthenticated, trialUserCanAccess, userAccountLimitIsAvailable],
	// 	path: "user"
	// },

	// contentUploadView: {
	// 	url: "/user/content-upload",
	// 	controller: "ContentUpload",
	// 	methods: {
	// 		contentUploadView: "get"
	// 	},
	// 	middleware: [isUserAuthenticated],
	// 	path: "user"
	// },

	// contentUpload: {
	// 	url: "/user/content-upload",
	// 	controller: "ContentUpload",
	// 	methods: {
	// 		contentUpload: "post"
	// 	},
	// 	middleware: [isUserAuthenticated, trialUserCanAccess, userAccountLimitIsAvailable],
	// 	path: "user"
	// },

	// getContent: {
	// 	url: "/user/get-content",
	// 	controller: "AppDetails",
	// 	methods: {
	// 		getContent: "get"
	// 	},
	// 	middleware: [isUserAuthenticated],
	// 	path: "user"
	// },

	// updateContent: {
	// 	url: "/user/update-content",
	// 	controller: "AppDetails",
	// 	methods: {
	// 		updateContent: "post"
	// 	},
	// 	middleware: [isUserAuthenticated, trialUserCanAccess, userAccountLimitIsAvailable],
	// 	path: "user"
	// },

	// applicationGeneratorView: {
	// 	url: "/user/application-generator",
	// 	controller: "ApplicationGenerator",
	// 	methods: {
	// 		applicationGeneratorView: "get"
	// 	},
	// 	middleware: [isUserAuthenticated],
	// 	path: "user"
	// },

	// applicationGenerator: {
	// 	url: "/user/application-generator",
	// 	controller: "ApplicationGenerator",
	// 	methods: {
	// 		applicationGenerator: "post"
	// 	},
	// 	middleware: [isUserAuthenticated, trialUserCanAccess, userAccountLimitIsAvailable],
	// 	path: "user"
	// },

	// download: {
	// 	url: "/user/application-generator/download",
	// 	controller: "ApplicationGenerator",
	// 	methods: {
	// 		download: "get"
	// 	},
	// 	middleware: [isUserAuthenticated],
	// 	path: "user"
	// },

	//=====================================================================================================================================//
	//============================================================== Admin URL ===========================================================//
	//===================================================================================================================================//
};
