exports.hospital = {
	dashboard: {
		title: "Dashboard",
		url: web.dashboardView.url,
		icon: '<i class="nav-icon fas fa-tachometer-alt"></i>'
	},

	userManagement: {
		title: "User Management",
		url: web.logout.url,
		icon: '<i class="nav-icon fas fa-users"></i>',
		subMenu: [
			{
				title: "Users List",
				url: web.viewUser.url,
				icon: '<i class="nav-icon fas fa-list-ul"></i>'
			},
			{
				title: "Add User",
				url: web.addUserView.url,
				icon: '<i class="nav-icon fas fa-user-plus"></i>'
			},
			{
				title: "Roles List",
				url: web.viewRole.url,
				icon: '<i class="nav-icon fas fa-address-card"></i>'
			},
			{
				title: "Add Role",
				url: web.addRoleView.url,
				icon: '<i class="nav-icon fas fa-puzzle-piece"></i>'
			}

		]
	}
};
