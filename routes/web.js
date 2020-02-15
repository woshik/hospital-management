// Don't Edit This File
"use strict";

const express = require("express");
const router = express.Router();

Object.entries(web).map(([routeName, routeInfo]) => {
	let middleware = routeInfo.middleware || [];
	let path = routeInfo.path || "";
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///													  Route Debug														 			//
	///   console.log( routeName, (routeInfo.url, middleware, require(join(CONTROLLER_DIR, path, routeInfo.controller))[routeName]) )  //
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	router[routeInfo.method](routeInfo.url, middleware, require(join(CONTROLLER_DIR, path, routeInfo.controller))[routeName]);
});

module.exports = router;