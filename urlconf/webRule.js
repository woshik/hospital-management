"use strict";

const { isAuthenticated, CanNotAccessAfterLogin } = require(join(
	BASE_DIR,
	"core",
	"middlewares"
));

module.exports = {
	//=====================================================================================================================================//
	//=========================================================== Hospital ===============================================================//
	//===================================================================================================================================//

	loginView: {
		url: "/hospital/login",
		controller: "Hospital",
		method: "get",
		middleware: [CanNotAccessAfterLogin],
		path: "login"
	},

	login: {
		url: "/hospital/login",
		controller: "Hospital",
		method: "post",
		middleware: [CanNotAccessAfterLogin],
		path: "login"
	},

	logout: {
		url: "/hospital/logout",
		controller: "Hospital",
		method: "post",
		middleware: [isAuthenticated],
		path: "login"
	},

	dashboardView: {
		url: "/hospital/dashboard",
		controller: "Dashboard",
		method: "get",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	profileView: {
		url: "/hospital/user/profile",
		controller: "Dashboard",
		method: "get",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	profile: {
		url: "/hospital/user/profile",
		controller: "Dashboard",
		method: "post",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	//===========================================================================================================================================//
	//===========================================================================================================================================//
	//=========================================================== User Management ===============================================================//
	viewUser: {
		url: "/hospital/users",
		controller: "UserManagement",
		method: "get",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	addUserView: {
		url: "/hospital/users/add",
		controller: "UserManagement",
		method: "get",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	addUser: {
		url: "/hospital/users",
		controller: "UserManagement",
		method: "post",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	updateUserView: {
		url: "/hospital/users/update",
		controller: "UserManagement",
		method: "get",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	updateUser: {
		url: "/hospital/users",
		controller: "UserManagement",
		method: "put",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	deleteUser: {
		url: "/hospital/users",
		controller: "UserManagement",
		method: "delete",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	//=========================================================== User Management ===============================================================//
	//===========================================================================================================================================//
	//===========================================================================================================================================//
	//=========================================================== Role Management ===============================================================//

	viewRole: {
		url: "/hospital/role",
		controller: "RoleManagement",
		method: "get",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	viewRoleData: {
		url: "/hospital/role/data",
		controller: "RoleManagement",
		method: "get",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	addRoleView: {
		url: "/hospital/role/add",
		controller: "RoleManagement",
		method: "get",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	addRole: {
		url: "/hospital/role",
		controller: "RoleManagement",
		method: "post",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	updateRoleView: {
		url: "/hospital/role/update",
		controller: "RoleManagement",
		method: "get",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	updateRole: {
		url: "/hospital/role",
		controller: "RoleManagement",
		method: "put",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	removeRole: {
		url: "/hospital/role",
		controller: "RoleManagement",
		method: "delete",
		middleware: [isAuthenticated],
		path: "hospital"
	}

	//=========================================================== Role Management ===============================================================//
	//===========================================================================================================================================//
	//===========================================================================================================================================//
};
