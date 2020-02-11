"use strict";

require("dotenv").config();
const cluster = require("cluster");

// global declaration
global.join = require("path").join;
global.BASE_DIR = __dirname;
global.MODEL_DIR = join(__dirname, "application/models");
global.CONTROLLER_DIR = join(__dirname, "application/controllers");

if (cluster.isMaster) {
	let numCPUs = require("os").cpus().length;
	for (let i = 0; i < numCPUs; i++) cluster.fork();

	cluster.on("exit", () => cluster.fork());
} else {
	require(join(BASE_DIR, "bootstrap/app"));
}
