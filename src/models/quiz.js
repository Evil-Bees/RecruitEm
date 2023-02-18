const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		duration: {
			type: Number,
		},
		description: {
			type: String,
		},
		questions: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Question",
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);
