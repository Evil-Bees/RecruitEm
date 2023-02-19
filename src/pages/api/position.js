import database from "@/helper/database";
import Position from "@/models/position";

export default async function handler(req, res) {
	const { method } = req;

	await database();

	switch (method) {
		case "GET":
			try {
				const id = req.query.id;
				if (id) {
					const positions = await Position.find({ _id: id });
					res.status(200).json({ data: positions });
				} else {
					const positions = await Position.find();
					res.status(200).json({ data: positions });
				}
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "POST":
			try {
				const position = await Position.create(req.body);
				res.status(200).json({ data: position });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "PUT":
			try {
				const update = req.body.update;
				const positionId = req.body.id;

				await Position.findOneAndUpdate({ _id: positionId }, update);

				const updatedPosition = await Position.find({ _id: positionId });
				res.status(200).json({ data: updatedPosition });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "DELETE":
			try {
				const positionId = req.body.id;
				await Position.findOneAndDelete({ _id: positionId });
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
