const { ObjectId } = require("mongodb");

exports.addRole = (roleName, permissions) => {
	return new Promise(async (resolve, reject) => {
		try {
			let userRole = await getDB().collection("user-role");

			let exist = await userRole.findOne(
				{
					name: roleName
				},
				{
					projection: {
						name: 0,
						permissions: 0
					}
				}
			);

			if (exist) {
				return resolve({
					success: false,
					info: "Role name already exist. Please change the name."
				});
			} else {
				let data = await userRole.insertOne({
					name: roleName,
					permissions: permissions
				});

				if (data.insertedCount) {
					return resolve({
						success: true,
						info: "Successfully Role Added."
					});
				} else {
					return resolve({
						success: false,
						info: "can not add role. Please try again later."
					});
				}
				
			}
		} catch (error) {
			return reject(error);
		}
	});
};

exports.getRoleListData = query => {
	return new Promise(async (resolve, reject) => {
		try {
			let order = ["name"];
			let sort = {};
			let userRoleCollection = await getDB().collection("user-role");

			if (query.order) {
				sort[order[parseInt(query.order[0].column)]] =
					query.order[0].dir === "asc" ? 1 : -1;
			} else {
				sort[order[0]] = 1;
			}

			let where = {
				$or: [
					{
						name: RegExp(`.*${query.search.value}.*`, "i")
					}
				]
			};

			return resolve({
				list: await userRoleCollection
					.find(where, {
						skip: parseInt(query.start),
						limit: parseInt(query.length),
						sort: sort
					})
					.toArray(),
				recordsTotal: await userRoleCollection.countDocuments(),
				recordsFiltered: await userRoleCollection.countDocuments(where)
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

exports.getRolesData = (query) => {
	return new Promise(async (resolve, reject) => {
		console.log(query)
		try {
			return resolve(
				await getDB()
					.collection("user-role")
					.find(
						{
							name: RegExp(`.*${query}.*`, "i")
						},
						{
							limit: 5,
							sort: {
								name: 1
							},
							projection: {
								permissions: 0
							}
						}
					)
					.toArray()
			);
		} catch (err) {
			return resolve([]);
		}
	});
};
