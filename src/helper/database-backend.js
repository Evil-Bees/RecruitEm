const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
	throw new Error(
		"Please define the MONGODB_URI environment variable inside .env"
	);
}

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function database() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		cached.promise = mongoose
			.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
			.then(mongoose => {
				return mongoose;
			});
	}
	cached.conn = await cached.promise;
	return cached.conn;
}

module.exports = database;
