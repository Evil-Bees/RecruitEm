import Link from "next/link";

export default function Questioner() {
	return (
		<>
			<div>
				<Link href="/questioner/quiz/create">Create new Quiz</Link>
			</div>
			<div>
				<Link href="/questioner/quiz/edit">Edit Quiz</Link>
			</div>
		</>
	);
}
