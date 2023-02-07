const mongoose = require("mongoose");

const QuestionnaireSchema = new mongoose.Schema(
  {
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Questionnaire ||
  mongoose.model("Questionnaire", QuestionnaireSchema);
