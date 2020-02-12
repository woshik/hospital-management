"use strict";

const { compare } = require("bcryptjs");
const { ObjectId } = require("mongodb");
const { getDB } = require(join(BASE_DIR, "db", "database"));

exports.hospital = (email, password) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await getDB()
				.collection("users")
				.findOne(
					{
						email: email
					},
					{
						projection: {
							password: 1
						}
					}
				);

			if (!user) {
				return resolve({
					success: false,
					info: "Your email address not registered."
				});
			}

			if (await compare(password, user.password)) {
				return resolve({
					success: true,
					info: user._id
				});
			} else {
				return resolve({
					success: false,
					info: "Password doesn't match."
				});
			}
		} catch (error) {
			return reject(error);
		}
	});
};

exports.login = id => {
	return new Promise(async (resolve, reject) => {
		try {
			let userData = await getDB()
				.collection("users")
				.findOne(
					{
						_id: ObjectId(id)
					},
					{
						projection: {
							name: 1,
							number: 1,
							email: 1,
							role: 1
						}
					}
				);

			if (userData) {
				return resolve(userData);
			} else {
				return resolve(null, false);
			}
		} catch (error) {
			return reject(error);
		}
	});
};
