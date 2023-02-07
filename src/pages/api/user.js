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
				res.status(200).json({ success: true, data: users });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const user = await User.create(req.body);
				res.status(201).json({ success: true, data: user });
			} catch (error) {
				res.status(400).json({ error });
			}
			break;
		case "PUT":
			try {
				const update = req.body.update;
				const userId = req.body.id;

				await User.findOneAndUpdate({ _id: userId }, update);

				const updatedUser = await User.find({ _id: userId });
				res.status(201).json({ success: true, data: updatedUser });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "DELETE":
			try {
				const userId = req.body.id;
				await User.findOneAndDelete({ _id: userId });
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
