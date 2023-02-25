import Link from "next/link";
import { getSession } from "next-auth/react";

export default function Recruiter(props) {
	return (
		<>
			<div>
				<Link href="/recruiter/quiz/create">Create new Quiz</Link>
			</div>
			<div>
				{props.quizzes.length > 0 &&
					props.quizzes.map((quiz) => (
						<div key={quiz._id}>
							<p>{quiz.name}</p>
							<p>{quiz.description}</p>
							<p>{quiz.duration}</p>
							<Link href={`/recruiter/quiz/edit?id=${quiz._id}`}>
								Edit Quiz
							</Link>
						</div>
					))}
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);

	const quizzes = await fetch(process.env.SITE_URI + "/api/quiz", {
		method: "GET",
		redirect: "follow",
	})
		.then((response) => response.json())
		.then((result) => {
			return result.data;
		})
		.catch((error) => console.log("error", error));

	return {
		props: {
			quizzes,
		},
	};
}
