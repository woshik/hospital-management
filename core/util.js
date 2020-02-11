"use strict";

const winstonDailyRotateFile = require("winston-daily-rotate-file");
const { createLogger, format } = require("winston");
const bcrypt = require("bcryptjs");

exports.fromErrorMessage = error => {
	switch (error.type) {
		case "string.empty":
			return `${error.context.label} is required`;
		case "string.pattern.base":
			if (error.path[0] === "name") {
				return `${error.context.label} contains only characters`;
			} else {
				return `Enter valid ${error.context.label.toLowerCase()}`;
			}
		case "string.email":
			return "Enter valid mail address";
		case "string.min":
			return `${error.context.label} contain minimum 5 characters`;
		case "string.mix":
			return `${error.context.label} contain maximum 5 characters`;
		case "any.only":
			return "Confirm password doesn't match";
		case "any.required":
			return `${error.context.label} is required`;
		case "date.greater":
			return `Date must be greater than today`;
		case "date.base":
			return "Please, enter valid date.";
		case "number.base":
			return `Please, enter valid ${error.context.label.toLowerCase()}`;
		default:
			return error.message;
	}
};

exports.hashPassword = password => {
	return new Promise((resolve, reject) => {
		bcrypt
			.genSalt(10)
			.then(getSalt => {
				bcrypt
					.hash(password, getSalt)
					.then(hashPassword => resolve(hashPassword))
					.catch(err => reject(err));
			})
			.catch(err => reject(err));
	});
};

exports.logger = createLogger({
	format: format.combine(
		format.timestamp(),
		format.align(),
		format.prettyPrint(),
		format.printf(
			info =>
				`${info.timestamp} ${info.level} [${info.label}] : ${info.message}`
		)
	),
	transports: [
		new winstonDailyRotateFile({
			filename: join(BASE_DIR, "log/error-%DATE%.log"),
			datePattern: "DD-MM-YYYY"
		})
	]
});
