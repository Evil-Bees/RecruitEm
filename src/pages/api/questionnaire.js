import database from "@/helper/database";
import Questionnaire from "@/models/questionnaire";

export default async function handler(req, res) {
	const { method } = req;

	await database();

	switch (method) {
		case "GET":
			try {
				const userId = req.query.userId;
				if (userId) {
					const questionnaires = await Questionnaire.find({ owner: userId });
					res.status(200).json({ success: true, data: questionnaires });
				} else if (req.query.id) {
					const id = req.query.id;
					const questionnaires = await Questionnaire.find({ _id: id });
					res.status(200).json({ success: true, data: questionnaires });
				} else {
					res.status(400).json({ success: false });
				}
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const questionnaire = await Questionnaire.create(body);
				res.status(201).json({ success: true, data: questionnaire });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "PUT":
			try {
				const update = req.body.update;
				const questionnaireId = req.body.id;

				await Questionnaire.findOneAndUpdate({ _id: questionnaireId }, update);

				const updatedQuestionnaire = await Questionnaire.find({ _id: questionnaireId });
				res.status(201).json({ success: true, data: updatedQuestionnaire });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "DELETE":
			try {
				const questionnaireId = req.body.id;
				await Questionnaire.findOneAndDelete({ _id: questionnaireId });
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
