import { getSession } from "next-auth/react";

const updateQuiz = async e => {
	e.preventDefault();

	const id = e.target.id.value;
	const name = e.target.name.value;
	const duration = e.target.duration.value;
	const description = e.target.description.value;

	let myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	let raw = JSON.stringify({
		id,
		update: {
			name,
			duration,
			description,
		},
	});

	let requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	fetch(process.env.SITE_URI + "/api/quiz", requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("error", error));

	console.log(id, name, duration, description);
};

const updateQuestion = async e => {
	e.preventDefault();

	const id = e.target.id.value;
	const question = e.target.question.value;

	let myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	let raw = JSON.stringify({
		id,
		update: {
			question,
		},
	});

	let requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	fetch(process.env.SITE_URI + "/api/question", requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("error", error));
};

const getQuestion = async id => {
	let myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	let requestOptions = {
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
			<form method="POST" onSubmit={updateQuiz}>
				<input type="hidden" name="id" defaultValue={props.quizId}></input>
				<div>
					<input type="text" name="name" defaultValue={props.name}></input>
				</div>

				<div>
					<input
						type="number"
						name="duration"
						defaultValue={props.duration}
					></input>
				</div>
				<div>
					<textarea
						type="text"
						name="description"
						defaultValue={props.description}
					></textarea>
				</div>
				<button type="submit">Update Quiz</button>
			</form>

			<div>
				<h3>Questions</h3>
				{props.questions.length > 0 &&
					props.questions.map(question => (
						<form type="POST" onSubmit={updateQuestion} key={question[0]._id}>
							<input
								type="hidden"
								name="id"
								defaultValue={question[0]._id}
							></input>
							<input
								type="text"
								name="question"
								defaultValue={question[0].question}
							></input>
							<button type="submit">Update Question</button>
						</form>
					))}
			</div>
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

		let requestOptions = {
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
