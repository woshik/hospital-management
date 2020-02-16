"use strict";

const { compare } = require("bcryptjs");
const { ObjectId } = require("mongodb");

exports.hospital = (username, password) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await getDB()
				.collection("users")
				.findOne(
					{
						username: username
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
			let db = await getDB();
			let userData = await db.collection("users").findOne(
				{
					_id: ObjectId(id)
				},
				{
					projection: {
						f_name: 1,
						l_name: 1,
						username: 1,
						email: 1,
						role: 1
					}
				}
			);

			if (userData) {
				if (!(userData.role === 1)) {
					let role = await db.collection("user-role").findOne(
						{
							_id: userData.role
						},
						{
							projection: {
								_id: 0,
								permissions: 1
							}
						}
					);
					userData.role = role ? role.permissions : [];
				}

				return resolve(userData);
			} else {
				return resolve(null, false);
			}
		} catch (error) {
			return reject(error);
		}
	});
};
