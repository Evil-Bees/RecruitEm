import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<div>
				<Link href="/candidate">Candidate</Link>
			</div>
			<div>
				<Link href="/recruiter">Recruiter</Link>
			</div>
		</>
	);
}
