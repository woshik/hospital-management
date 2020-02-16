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
				icon: '<i class="nav-icon fas fa-list-ul"></i>',
				permitNumber: web.viewUser.viewUser
			},
			{
				title: "Add User",
				url: web.addUserView.url,
				icon: '<i class="nav-icon fas fa-user-plus"></i>',
				permitNumber: web.addUserView.viewUser
			},
			{
				title: "Roles List",
				url: web.viewRole.url,
				icon: '<i class="nav-icon fas fa-address-card"></i>',
				permitNumber: web.viewRole.viewUser
			},
			{
				title: "Add Role",
				url: web.addRoleView.url,
				icon: '<i class="nav-icon fas fa-puzzle-piece"></i>',
				permitNumber: web.addRoleView.viewUser
			}

		]
	}
};
