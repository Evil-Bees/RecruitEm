import { getSession } from "next-auth/react";
import Link from "next/link";

export default function Quiz(props) {
	return (
		<>
			{props.quiz.length > 0 &&
				props.quiz.map(quiz => (
					<div key={quiz._id}>
						<p>{quiz.name}</p>
						<p>{quiz.description}</p>
						<Link href={"/recruiter/quiz/edit/" + quiz._id}>Edit</Link>
					</div>
				))}
		</>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: { destination: "/" },
		};
	} else {
		const response = {
			props: {
				email: session._doc.email,
				firstName: session._doc.firstName,
				lastName: session._doc.lastName,
				id: session._doc._id,
			},
		};

		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		const quiz = await fetch(process.env.SITE_URI + "/api/quiz", requestOptions)
			.then(response => response.json())
			.then(result => {
				return result.data;
			})
			.catch(error => console.log("error", error));

		response.props.quiz = quiz;
		return response;
	}
}
