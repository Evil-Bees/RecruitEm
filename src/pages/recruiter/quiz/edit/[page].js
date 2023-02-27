import { getSession } from "next-auth/react";

const submitForm = async e => {};
const getQuestion = async id => {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	};

	return await fetch(
		process.env.SITE_URI + "/api/question?id=" + id,
		requestOptions
	)
		.then(response => response.json())
		.then(result => result)
		.catch(error => console.log("error", error));
};

export default function EditQuiz(props) {
	return (
		<>
			<form method="POST" onSubmit={submitForm}>
				<input type="text" name="name" defaultValue={props.name}></input>
				<input
					type="number"
					name="duration"
					defaultValue={props.duration}
				></input>
				<textarea
					type="text"
					name="description"
					defaultValue={props.description}
				></textarea>

				<div>
					{props.questions.length > 0 &&
						props.questions.map(question => (
							<div key={question[0]._id}>
								<div>{question[0]._id}</div>
								<div>{question[0].question}</div>
							</div>
						))}
				</div>
			</form>
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

		let questionList = [];

		const response = await fetch(
			process.env.SITE_URI + "/api/quiz?id=" + quizId,
			requestOptions
		)
			.then(response => response.json())
			.then(result => {
				return result.data;
			})
			.catch(error => console.log("error", error));

		let questionListFinal = await Promise.all(
			response[0].questions.map(async question => {
				return getQuestion(question).then(result => {
					questionList.push(result.data[0]);
					return questionList;
				});
			})
		);

		return {
			props: {
				quizId: quizId,
				name: response[0].name,
				duration: response[0].duration,
				questions: questionListFinal,
				description: response[0].description,
			},
		};
	}
}
