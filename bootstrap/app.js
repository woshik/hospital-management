"use strict";

// import other usefull modules
const { createServer } = require("http");
const express = require("express");
const helmet = require("helmet");
const csrf = require("csurf");

// import module from project
const util = require(join(BASE_DIR, "core/util"));
const database = require(join(BASE_DIR, "db/database"))

const mongoClient = database.mongoClient;
const { sessionStore } = require(join(BASE_DIR, "core/sessionStore"));
const logger = util.logger;
const auth = require(join(BASE_DIR, "core/auth"));
const { flash } = require(join(BASE_DIR, "core/middlewares"));

// global declaration
global.fromErrorMessage = util.fromErrorMessage;
global.getDB = database.getDB;
global.randerForDashBoard = util.randerForDashBoard;

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
		appName: appInfo.appName,
	})
);

// error handle
app.use((err, req, res, next) => {
	if (app.get('env') === "development") {
		console.log(err);
	}

	if (err instanceof Object) {
		logger.error({ label: err.name, message: err.info });
	} else {
		logger.error({ label: "web error", message: err.info });
	}
	
	if (req.xhr) {
		return res.status(200).json({
			success: false,
			info: "Some error occurred. Please try again later."
		});
	} else {
		return res.status(500).render("error-page/template", {
			status: 500,
			appName: appInfo.appName
		});
	}
});

// start mongodb and then runing the app on defined port number
mongoClient
	.then(() => {
		createServer(app).listen(process.env.PORT, () =>
			console.log(`app is runing http server on port ${process.env.PORT}`)
		);
	})
	.catch(err => logger.error(err));
