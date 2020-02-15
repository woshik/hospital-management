exports.dashboardView = (req, res, next) => {
	res.render("hospital/base-template", {
		info: appInfo,
		title: "Dasboard",
		layout: "dashboard",
		userData: req.user,
        currentURL: req.url,
        sidebar: sideBar.hospital,
		csrfToken: req.csrfToken(),
		logoutURL: web.logout.url
	});
};

exports.profileView = (req, res, next) => {
};

exports.profile = (req, res, next) => {
};