"use strict";

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

exports.sessionStore = session({
	name: "sid",
	resave: false,
	saveUninitialized: false,
	secret: process.env.APP_KEY,
	unset: "destroy",
	store: new MongoStore({
		url: `${process.env.DB_CONNECTION}${process.env.DB_DATABASE}`,
		secret: process.env.APP_KEY,
		collection: "sessions",
		ttl: parseInt(process.env.SESSION_LIFETIME),
		mongoOptions: {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	}),
	cookie: {
		maxAge: parseInt(process.env.SESSION_LIFETIME),
		SameSite: true,
		secure: process.env.APP_PRODUCTION === "production"
	}
});
