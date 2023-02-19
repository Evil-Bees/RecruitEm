import database from "@/helper/database";
import review from "@/models/review";
import Review from "@/models/review";

export default async function handler(req, res) {
	const { method } = req;

	await database();

	switch (method) {
		case "GET":
			try {
				const id = req.query.id;
				if (id) {
					const reviews = await Review.find({ _id: id });
					res.status(200).json({ data: reviews });
				} else {
					const reviews = await review.find();
					res.status(200).json({ data: reviews });
				}
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "POST":
			try {
				const review = await Review.create(req.body);
				res.status(200).json({ data: review });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "PUT":
			try {
				const update = req.body.update;
				const reviewId = req.body.id;

				await Review.findOneAndUpdate({ _id: reviewId }, update);

				const updatedReview = await Review.find({ _id: reviewId });
				res.status(200).json({ data: updatedReview });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case "DELETE":
			try {
				const reviewId = req.body.id;
				await Review.findOneAndDelete({ _id: reviewId });
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
