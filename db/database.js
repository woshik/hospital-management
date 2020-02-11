"use strict";

const { logger } = require(join(BASE_DIR, "core", "util"));
const MongoClient = require("mongodb").MongoClient;

let _db;

exports.mongoClient = new Promise((resolve, reject) => {
	MongoClient.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(client => {
		_db = client.db(process.env.DB_DATABASE);
		resolve();
	})
	.catch(err => reject(err));
});

exports.getDB = () => {
	if (_db) {
		return _db;
	}
	logger.error("database not found");
};