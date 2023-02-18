const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema(
	{
		name: String,
		description: String,
		status: String,
		quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
	},
	{ timestamps: true }
);

module.exports =
	mongoose.models.Position || mongoose.model("Position", PositionSchema);
