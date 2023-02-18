const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		status: [
			{
				Open: [
					{
						type: String,
						required: true,
					},
				],
				Closed: [
					{
						type: String,
						required: true,
					},
				],
			},
		],
		quiz: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Quiz",
				required: true,
			},
		],
	},
	{ timestamps: true }
);

module.exports =
	mongoose.models.Position || mongoose.model("Position", PositionSchema);
