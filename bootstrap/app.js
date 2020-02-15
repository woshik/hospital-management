"use strict";

// import other usefull modules
const { createServer } = require("http");
const express = require("express");
const helmet = require("helmet");
const csrf = require("csurf");

// import module from project
const { mongoClient } = require(join(BASE_DIR, "db/database"));
const { sessionStore } = require(join(BASE_DIR, "core/sessionStore"));
const { logger } = require(join(BASE_DIR, "core/util"));
const auth = require(join(BASE_DIR, "core/auth"));
const { flash } = require(join(BASE_DIR, "core/middlewares"));

// global declaration
global.appInfo = {
	appName: process.env.APP_NAME,
	currentYear: new Date().getUTCFullYear(),
	websiteURL: process.env.WEBSITE_URL
};
global.web = require(join(BASE_DIR, "urlconf/webRule"));
global.sideBar = require(join(BASE_DIR, "urlconf/sideBar"));
global.Joi = require("@hapi/joi");
global.fromErrorMessage = require(join(BASE_DIR, "core/util")).fromErrorMessage;
global.getDB = require(join(BASE_DIR, "db/database")).getDB;

// calling express function
const app = express();

// node js process error handle
process.on("uncaughtException", err => {
	console.log(err);
	logger.error({ label: "uncaughtException", message: err });
});

process.on("unhandledRejection", err => {
	console.log(err);
	logger.error({ label: "unhandledRejection", message: err });
});

// security configuretaion
app.use(helmet());

// app configuretaion
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true
	})
);

// set view engine configuretaion
app.set("view engine", "ejs");
app.set("views", join(BASE_DIR, "application/views"));

app.use(express.static(join(BASE_DIR, "public")));
app.use(express.static(join(BASE_DIR, "custom")));

// session configuretion
app.use(sessionStore);

// csrf configuretion
app.use(csrf());

// auth configuretion
auth(app);

// set flash message
app.use(flash);

// web routing
app.use(require(join(BASE_DIR, "routes/web")));

// 404 page not found
app.use((req, res) =>
	res.status(404).render("error-page/template", {
		status: 404,
		appName: process.env.APP_NAME
	})
);

// error handle
app.use((err, req, res, next) => {
	if (err instanceof Object) {
		logger.error({ label: err.name, message: err.info });
	} else {
		logger.error({ label: "web error", message: err.info });
	}
	console.log(err)
	return res.status(500).render("error-page/template", {
		status: 500,
		appName: process.env.APP_NAME
	});
});

// start mongodb and then runing the app on defined port number
mongoClient
	.then(() => {
		createServer(app).listen(process.env.PORT, () =>
			console.log(`app is runing http server on port ${process.env.PORT}`)
		);
	})
	.catch(err => logger.error(err));
