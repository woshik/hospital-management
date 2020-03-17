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
		permitNumber: 16
	},

	getPatientData: {
		url: "/hospital/patient/get",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 17
	},

	addPatientView: {
		url: "/hospital/patient/add",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 18
	},

	addPatient: {
		url: "/hospital/patient/add",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 19
	},

	updatePatientView: {
		url: "/hospital/patient/update",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 20
	},

	updatePatient: {
		url: "/hospital/patient/update",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 21
	},

	patientDetailsView: {
		url: "/hospital/patient/details",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 22
	},

	admitPatientView: {
		url: "/hospital/patient/admit",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 23
	},

	admitPatient: {
		url: "/hospital/patient/admit",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 24
	},

	admitPatientListView: {
		url: "/hospital/patient/admit/list",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 25
	},

	admitPatientList: {
		url: "/hospital/patient/admit/list",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 26
	},

	admitPatientDetailsView: {
		url: "/hospital/patient/admit/details",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 27
	},

	removePatient: {
		url: "/hospital/patient/delete",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 28
	},

	//========================================================= Patient Management ===============================================================//
	//===========================================================================================================================================//
	//==========================================================================================================================================//

	//===========================================================================================================================================//
	//=========================================================== Patient Discharge ============================================================//

	viewDischargePatient: {
		url: "/hospital/patient/discharge",
		controller: "PatientDischarge",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 29
	},

	getDischargePatientData: {
		url: "/hospital/patient/discharge/get",
		controller: "PatientDischarge",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 30
	},

	dischargePatientFormView: {
		url: "/hospital/patient/discharge/add",
		controller: "PatientDischarge",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 31
	},

	dischargePatientForm: {
		url: "/hospital/patient/discharge/add",
		controller: "PatientDischarge",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 32
	},

	updateDischargePatientFormView: {
		url: "/hospital/patient/discharge/update",
		controller: "PatientDischarge",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 33
	},

	updateDischargePatientForm: {
		url: "/hospital/patient/discharge/update",
		controller: "PatientDischarge",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 34
	},

	viewDischargePatientDetails: {
		url: "/hospital/patient/discharge/details",
		controller: "PatientDischarge",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 35
	},

	//========================================================= Patient Discharge ===============================================================//
	//===========================================================================================================================================//
	//==========================================================================================================================================//

	//===========================================================================================================================================//
	//=========================================================== Doctor Management ============================================================//

	viewDoctor: {
		url: "/hospital/doctor",
		controller: "DoctorManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 28
	},

	getDoctorData: {
		url: "/hospital/doctor/get",
		controller: "DoctorManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 29
	},

	addDoctorView: {
		url: "/hospital/doctor/add",
		controller: "DoctorManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 30
	},

	addDoctor: {
		url: "/hospital/doctor/add",
		controller: "DoctorManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 31
	},

	updateDoctorView: {
		url: "/hospital/doctor/update",
		controller: "DoctorManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 32
	},

	updateDoctor: {
		url: "/hospital/doctor/update",
		controller: "DoctorManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 33
	},

	viewDoctorDetails: {
		url: "/hospital/doctor/details",
		controller: "DoctorManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 34
	},

	removeDoctor: {
		url: "/hospital/doctor/delete",
		controller: "DoctorManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 35
	},

	//========================================================= Doctor Management ===============================================================//
	//===========================================================================================================================================//
	//==========================================================================================================================================/
	//=========================================================== Bill Management ============================================================//

	viewService: {
		url: "/hospital/service",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 28
	},

	getServiceData: {
		url: "/hospital/Service/get",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 29
	},

	addServiceView: {
		url: "/hospital/Service/add",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 30
	},

	addService: {
		url: "/hospital/Service/add",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 31
	},

	updateServiceView: {
		url: "/hospital/Service/update",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 32
	},

	updateService: {
		url: "/hospital/Service/update",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 33
	},

	removeService: {
		url: "/hospital/Service/delete",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 35
	},


	viewUnit: {
		url: "/hospital/service/unit",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 28
	},

	getUnitData: {
		url: "/hospital/Service/unit/get",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 29
	},

	addUnit: {
		url: "/hospital/Service/unit/add",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 31
	},

	updateUnit: {
		url: "/hospital/Service/unit/update",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 33
	},

	removeUnit: {
		url: "/hospital/Service/unit/delete",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 35
	},



	//========================================================= Bill Management ===============================================================//
	//===========================================================================================================================================//
	//==========================================================================================================================================/
	//=========================================================== Expense Management ============================================================//

	viewExpense: {
		url: "/hospital/expense",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 28
	},

	getExpenseData: {
		url: "/hospital/expense/get",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 29
	},

	addExpenseView: {
		url: "/hospital/expense/add",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 30
	},

	addExpense: {
		url: "/hospital/expense/add",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 31
	},

	updateExpenseView: {
		url: "/hospital/expense/update",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 32
	},

	updateExpense: {
		url: "/hospital/expense/update",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 33
	},

	removeExpense: {
		url: "/hospital/expense/delete",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 35
	},

	//========================================================= Expense Management ===============================================================//
	//===========================================================================================================================================//


	//==========================================================================================================================================/
	//=========================================================== Reports Management ============================================================//

	viewLoseProfitReport: {
		url: "/hospital/report/lose-profit",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 28
	},

	getLoseProfitReportData: {
		url: "/hospital/report/lose-profit/get",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 29
	},

	viewExpenseReport: {
		url: "/hospital/report/expense",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 30
	},

	getExpenseReportData: {
		url: "/hospital/report/expense/get",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 31
	},

	viewPatientAdmitReport: {
		url: "/hospital/report/admit",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 32
	},

	getPatientAdmitReport: {
		url: "/hospital/report/patient-admit/get",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 33
	},

	viewPatientDischargeReport: {
		url: "/hospital/report/patient-discharge",
		controller: "PatientManagement",
		method: "get",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 32
	},

	getPatientDischargeReport: {
		url: "/hospital/report/patient-discharge/get",
		controller: "PatientManagement",
		method: "post",
		middleware: [isAuthenticated, havePermissionToAccess],
		path: "hospital",
		permitNumber: 33
	},

	
	//========================================================= Reports Management ===============================================================//
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

	userProfileView: {
		url: "/hospital/user/profile",
		controller: "Dashboard",
		method: "get",
		middleware: [isAuthenticated],
		path: "hospital"
	},

	userProfile: {
		url: "/hospital/user/profile",
		controller: "Dashboard",
		method: "post",
		middleware: [isAuthenticated],
		path: "hospital"
	}
};
