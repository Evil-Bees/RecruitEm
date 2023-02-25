import database from "@/helper/database";
import Quiz from "@/models/quiz";

export default async function handler(req, res) {
	const { method } = req;

	await database();

	switch (method) {
		case "GET":
			try {
				const id = req.query.id;
				if (id) {
					const quizzes = await Quiz.find({ _id: id });
					res.status(200).json({ data: quizzes });
				} else {
					const quizzes = await Quiz.find();
					res.status(200).json({ data: quizzes });
				}
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "POST":
			try {
				const quiz = await Quiz.create(req.body);
				res.status(200).json({ data: quiz });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "PUT":
			try {
				const update = req.body.update;
				const quizId = req.body.id;

				await Quiz.findOneAndUpdate({ _id: quizId }, update);

				const updatedQuiz = await Quiz.find({ _id: quizId });
				res.status(200).json({ data: updatedQuiz });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "DELETE":
			try {
				const quizId = req.body.id;
				await Quiz.findOneAndDelete({ _id: quizId });
				res.status(200);
				return;
			} catch (error) {
				res.status(500).json({ error });
			}
		default:
			res.status(500).json({ error: "Failed to fetch data" });
			break;
	}
}
