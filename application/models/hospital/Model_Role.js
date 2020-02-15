exports.addRole = (roleName, permission) => {
	return new Promise(async (resolve, reject) => {
		try {
			delete permission.roleName;
			getDB()
				.collection("user-role")
				.insertOne({
					name: roleName,
					permissions: permission
				});

			return resolve({
				success: true,
				info: "Successfully Role Added"
			});
		} catch (error) {
			return reject(error);
		}
	});
};

exports.getRoleData = query => {
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
