import Link from "next/link";

export default function Home() {
	return (
		<>
			<div>
				<Link href="/candidate">Candidate</Link>
			</div>
			<div>
				<Link href="/recruiter">Recruiter</Link>
			</div>
		</>
	);
}
