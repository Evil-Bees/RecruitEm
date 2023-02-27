import { getSession } from "next-auth/react";

export default function EditQuiz(props) {
	return (
		<>
			Edit Quiz
			{console.log(props)}
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
		const quizId = context.query.page;

		if (typeof quizId == "undefined") {
			return {
				redirect: { destination: "/" },
			};
		}

		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		const response = await fetch(
			process.env.SITE_URI + "/api/quiz?id=" + quizId,
			requestOptions
		)
			.then(response => response.json())
			.then(result => {
				return {
					props: {
						quizId: quizId,
						name: result.data[0].name,
						duration: result.data[0].duration,
						questions: result.data[0].questions,
						description: result.data[0].description,
					},
				};
			})
			.catch(error => console.log("error", error));

		return response;
	}

	return {
		props: {},
	};
}
