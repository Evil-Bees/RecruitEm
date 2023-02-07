const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema(
	{
		name: String,
		duration: Number,
		description: String,
		questions: [
			{ question: String, answerType: String, Optional: String },
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);
