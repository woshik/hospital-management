"use strict";

const {
	isAuthenticated,
	CanNotAccessAfterLogin,
	havePermissionToAccess
} = require(join(BASE_DIR, "core", "middlewares"));

module.exports = {
	//===========================================================================================================================================//
	//===========================================================================================================================================//
	//=========================================================== User Management ===============================================================//
	viewUser: {
		url: "/hospital/users",
		controller: "UserManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 1
	},

	getUserData: {
		url: "/hospital/users/get",
		controller: "UserManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 2
	},

	addUserView: {
		url: "/hospital/users/add",
		controller: "UserManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 3
	},

	addUser: {
		url: "/hospital/users/add",
		controller: "UserManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 4
	},

	updateUserView: {
		url: "/hospital/users/update",
		controller: "UserManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 5
	},

	updateUser: {
		url: "/hospital/users/update",
		controller: "UserManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 6
	},

	removeUser: {
		url: "/hospital/users/delete",
		controller: "UserManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 7
	},

	//=========================================================== User Management ===============================================================//
	//===========================================================================================================================================//
	//===========================================================================================================================================//
	//=========================================================== Role Management ===============================================================//

	viewRole: {
		url: "/hospital/role",
		controller: "RoleManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 8
	},

	getRoleData: {
		url: "/hospital/role/get",
		controller: "RoleManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 9
	},

	addRoleView: {
		url: "/hospital/role/add",
		controller: "RoleManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 10
	},

	addRole: {
		url: "/hospital/role/add",
		controller: "RoleManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 11
	},

	updateRoleView: {
		url: "/hospital/role/update",
		controller: "RoleManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 12
	},

	updateRole: {
		url: "/hospital/role/update",
		controller: "RoleManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 13
	},

	removeRole: {
		url: "/hospital/role/delete",
		controller: "RoleManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 14
	},

	getRoleDataForUser: {
		url: "/hospital/roles/get",
		controller: "RoleManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 15
	},

	//=========================================================== Role Management ===============================================================//
	//===========================================================================================================================================//
	//===========================================================================================================================================//
	//===========================================================================================================================================//
	//=========================================================== Patient Management ============================================================//

	viewPatient: {
		url: "/hospital/patient",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 8
	},

	getPatientData: {
		url: "/hospital/patient/get",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 9
	},

	addPatientView: {
		url: "/hospital/patient/add",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 10
	},

	addPatient: {
		url: "/hospital/patient/add",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 11
	},

	updatePatientView: {
		url: "/hospital/patient/update",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 12
	},

	updatePatient: {
		url: "/hospital/patient/update",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 13
	},

	removePatient: {
		url: "/hospital/patient/delete",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 14
	},

	//=========================================================== Patient Management ===============================================================//
	//===========================================================================================================================================//
	//===========================================================================================================================================//

	//======================================================== basic Route ==================================================================//
	//======================================================================================================================================//
	//=====================================================================================================================================//

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
	}
};
