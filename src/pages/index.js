import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Resume />
			<div>
				<Link href="/candidate">Candidate</Link>
			</div>
			<div>
				<Link href="/recruiter">Recruiter</Link>
			</div>
		</>
	);
}
