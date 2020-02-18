const { ObjectId } = require("mongodb");
const { hashPassword } = require(join(BASE_DIR, "core/util"));

exports.addUser = userInfo => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await getDB().collection("users");

			let exist = await user.findOne(
				{
					username: userInfo.username
				},
				{
					projection: {
						_id: 1
					}
				}
			);

			if (exist) {
				return resolve({
					success: false,
					info: "Username already exist. Please change the username."
				});
			} else {
				userInfo.role = ObjectId(userInfo.role);
				userInfo.account_created = new Date();
				userInfo.password = await hashPassword(userInfo.password);

				let data = await user.insertOne(userInfo);
				if (data.insertedCount) {
					return resolve({
						success: true,
						info: "Successfully User Added"
					});
				} else {
					return resolve({
						success: false,
						info: "Can not add user. Please try again later."
					});
				}
			}
		} catch (error) {
			return reject(error);
		}
	});
};

exports.getUserListData = query => {
	return new Promise(async (resolve, reject) => {
		try {
			let order = ["username", "f_name", "", "email"];
			let sort = {};
			let userCollection = await getDB().collection("users");

			if (query.order) {
				sort[order[parseInt(query.order[0].column)]] =
					query.order[0].dir === "asc" ? 1 : -1;
			} else {
				sort[order[0]] = 1;
			}

			let where = {
				$or: [
					{
						username: RegExp(`.*${query.search.value}.*`, "i")
					},
					{
						f_name: RegExp(`.*${query.search.value}.*`, "i")
					},
					{
						email: RegExp(`.*${query.search.value}.*`, "i")
					}
				]
			};

			return resolve({
				list: await userCollection
					.find(where, {
						skip: parseInt(query.start),
						limit: parseInt(query.length),
						sort: sort,
						projection: {
							username: 1,
							f_name: 1,
							l_name: 1,
							role: 1,
							email: 1
						}
					})
					.toArray(),
				recordsTotal: await userCollection.countDocuments(),
				recordsFiltered: await userCollection.countDocuments(where)
			});
		} catch (err) {
			return reject(err);
		}
	});
};

exports.getRoleData = id => {
	return new Promise(async (resolve, reject) => {
		try {
			id = ObjectId(id);
		} catch (error) {
			resolve(null);
		}

		try {
			let roleData = await getDB()
				.collection("user-role")
				.findOne(
					{
						_id: id
					},
					{
						projection: {
							_id: 0
						}
					}
				);
			resolve(roleData);
		} catch (error) {
			reject(error);
		}
	});
};

exports.updateRole = (id, permissions) => {
	return new Promise(async (resolve, reject) => {
		try {
			let roleData = await getDB()
				.collection("user-role")
				.updateOne(
					{
						_id: ObjectId(id)
					},
					{
						$set: {
							permissions: permissions
						}
					}
				);
			if (roleData.modifiedCount) {
				return resolve({
					success: true,
					info: "Successfully updated this role."
				});
			} else {
				return resolve({
					success: false,
					info: "Can not update this role. Please try again later."
				});
			}
		} catch (error) {
			reject(error);
		}
	});
};

exports.removeRole = id => {
	return new Promise(async (resolve, reject) => {
		try {
			let deleteRole = await getDB()
				.collection("user-role")
				.deleteOne({
					_id: ObjectId(id)
				});
			if (deleteRole.deletedCount) {
				resolve({
					success: true,
					info: "Successfully delete the role."
				});
			} else {
				resolve({
					success: false,
					info: "Can not delete the role. Please try again later."
				});
			}
		} catch (error) {
			reject(error);
		}
	});
};
