const web = require(join(BASE_DIR, "urlconf/webRule"));

exports.user = {
	dashboard: {
		title: "Dashboard",
		url: web.userDashboard.url,
		icon: '<i class="fas fa-th-large"></i>'
	},
	userManagement: {
		title: "User Management",
		url: web.installAppView.url,
		icon: '<i class="fas fa-arrow-alt-circle-down"></i>'
	},
	patientAdmission: {
		title: "Patient Admission",
		url: web.appListView.url,
		icon: '<i class="fas fa-list-ul"></i>'
	}
};