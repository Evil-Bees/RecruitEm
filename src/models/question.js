const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
	{
		question: {
			type: String,
		},
		type: {
			text: {
				type: String,
			},
			code: {
				type: String,
			},
			radio: {
				type: String,
			},
			select: {
				type: String,
			},
		},
	},
	{ timestamps: true }
);

module.exports =
	mongoose.models.Question || mongoose.model("Question", QuestionSchema);
