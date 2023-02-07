import database from "@/helper/database";
import Questionnaire from "@/models/questionnaire";

export default async function handler(req, res) {
	const { method } = req;

	await database();

	switch (method) {
		case "GET":
			try {
				const id = req.query.id;
				if (id) {
					const questionnaires = await Questionnaire.find({
						_id: id,
					});
					res.status(200).json({ data: questionnaires });
				} else {
					res.status(500).json({ error: "Failed to fetch data" });
				}
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "POST":
			try {
				const questionnaire = await Questionnaire.create(req.body);
				res.status(200).json({ data: questionnaire });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "PUT":
			try {
				const update = req.body.update;
				const questionnaireId = req.body.id;

				await Questionnaire.findOneAndUpdate({ _id: questionnaireId }, update);

				const updatedQuestionnaire = await Questionnaire.find({
					_id: questionnaireId,
				});
				res.status(200).json({ data: updatedQuestionnaire });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "DELETE":
			try {
				const questionnaireId = req.body.id;
				await Questionnaire.findOneAndDelete({ _id: questionnaireId });
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
