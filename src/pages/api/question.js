import database from "@/helper/database";
import Question from "@/models/question";

export default async function handler(req, res) {
	const { method } = req;

	await database();

	switch (method) {
		case "GET":
			try {
				const id = req.query.id;
				if (id) {
					const questiones = await Question.find({ _id: id });
					res.status(200).json({ data: questiones });
				} else {
					const questiones = await Question.find();
					res.status(200).json({ data: questiones });
				}
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "POST":
			try {
				const question = await Question.create(req.body);
				res.status(200).json({ data: question });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "PUT":
			try {
				const update = req.body.update;
				const questionId = req.body.id;

				await Question.findOneAndUpdate({ _id: questionId }, update);

				const updatedQuestion = await Question.find({ _id: questionId });
				res.status(200).json({ data: updatedQuestion });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "DELETE":
			try {
				const questionId = req.body.id;
				await Question.findOneAndDelete({ _id: questionId });
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
