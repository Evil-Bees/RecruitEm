const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		position: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Position",
			required: true,
		},
		pipeline: { type: String, required: true },
		status: { type: String, required: true },
		started: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports =
	mongoose.models.Review || mongoose.model("Review", ReviewSchema);
