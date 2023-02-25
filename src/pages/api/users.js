import database from "@/helper/database";
import User from "@/models/user";

export default async function handler(req, res) {
	const { method } = req;

	await database();

	switch (method) {
		case "GET":
			try {
				const filter = req.query;
				const users = await User.find(filter);
				res.status(200).json({ data: users });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "POST":
			try {
				const user = await User.create(req.body);
				res.status(201).json({ data: user });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "PUT":
			try {
				const update = req.body.update;
				const userId = req.body.id;

				await User.findOneAndUpdate({ _id: userId }, update);

				const updatedUser = await User.find({ _id: userId });
				res.status(201).json({ data: updatedUser });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "DELETE":
			try {
				const userId = req.body.id;
				await User.findOneAndDelete({ _id: userId });
				res.status(200);
				return;
			} catch (error) {
				res.status(500).json({ error });
			}
		default:
			res.status(500).json({ error: 'Failed to fetch data' });
			break;
	}
}
