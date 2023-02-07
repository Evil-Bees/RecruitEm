import database from "@/helper/database";
import Quiz from "@/models/quiz";

export default async function handler(req, res) {
	const { method } = req;

	await database();

	switch (method) {
		case "GET":
			try {
				const userId = req.query.userId;
				if (userId) {
					const quizzes = await Quiz.find({ owner: userId });
					res.status(200).json({ success: true, data: quizzes });
				} else if (req.query.id) {
					const id = req.query.id;
					const quizzes = await Quiz.find({ _id: id });
					res.status(200).json({ success: true, data: quizzes });
				} else {
					res.status(400).json({ success: false });
				}
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const quiz = await Quiz.create(body);
				res.status(201).json({ success: true, data: quiz });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "PUT":
			try {
				const update = req.body.update;
				const quizId = req.body.id;

				await Quiz.findOneAndUpdate({ _id: quizId }, update);

				const updatedQuiz = await Quiz.find({ _id: quizId });
				res.status(201).json({ success: true, data: updatedQuiz });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "DELETE":
			try {
				const quizId = req.body.id;
				await Quiz.findOneAndDelete({ _id: quizId });
				res.status(201).json({ success: true });
				return;
			} catch (error) {
				res.status(400).json({ success: false });
			}
		default:
			res.status(400).json({ success: false });
			break;
	}
}
