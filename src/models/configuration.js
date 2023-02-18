const mongoose = require("mongoose");

const ConfigurationSchema = new mongoose.Schema(
	{
		companyName: String,
		companyLogo: String,
	},
	{ timestamps: true }
);

module.exports =
	mongoose.models.Configuration ||
	mongoose.model("Configuration", ConfigurationSchema);
