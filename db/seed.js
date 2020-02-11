const MongoClient = require("mongodb").MongoClient;
const { hash, genSalt } = require("bcryptjs");

MongoClient.connect("mongodb://localhost:27017/", {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(async client => {
	try {
		await client
			.db("hospital")
			.collection("users")
			.insertOne({
				email: "admin@admin.com",
				password: await hash("123456", await genSalt(10))
			});

		console.log("username: admin@admin.com");
		console.log("password: 123456");

		client.close();

		process.exit(1);
	} catch (e) {
		console.log(e.message);
	}
});
