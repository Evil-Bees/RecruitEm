import Link from "next/link";

export default function Questioner(props) {
	return (
		<>
			<div>
				<Link href="/questioner/quiz/create">Create new Quiz</Link>
			</div>
			<div>
				{props.quizzes.length > 0 &&
					props.quizzes.map(quiz => (
						<div key={quiz._id}>
							<p>{quiz.name}</p>
							<p>{quiz.description}</p>
							<p>{quiz.duration}</p>
							<Link href={`/questioner/quiz/edit?id=${quiz._id}`}>Edit Quiz</Link>
						</div>
					))}
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const quizzes = await fetch(process.env.SITE_URI + "/api/quiz", {
		method: "GET",
		redirect: "follow",
	})
		.then(response => response.json())
		.then(result => {
			return result.data;
		})
		.catch(error => console.log("error", error));

	return {
		props: {
			quizzes,
		},
	};
}
