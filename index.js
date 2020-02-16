"use strict";

require("dotenv").config();
const cluster = require("cluster");

// global declaration
global.join = require("path").join;
global.BASE_DIR = __dirname;
global.MODEL_DIR = join(__dirname, "application/models");
global.CONTROLLER_DIR = join(__dirname, "application/controllers");
global.appInfo = {
	appName: process.env.APP_NAME,
	currentYear: new Date().getUTCFullYear(),
	websiteURL: process.env.WEBSITE_URL
};
global.web = require(join(BASE_DIR, "urlconf/webRule"));
global.Joi = require("@hapi/joi");

if (cluster.isMaster) {
	let numCPUs = require("os").cpus().length;
	for (let i = 0; i < numCPUs; i++) cluster.fork();

	cluster.on("exit", () => cluster.fork());
} else {
	require(join(BASE_DIR, "bootstrap/app"));
}
