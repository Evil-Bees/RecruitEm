import Image from "next/image";
import Link from "next/link";
import { VscAccount, VscActivateBreakpoints } from "react-icons/vsc";

import logo from "../../public/images/recruitem-logo.png";

export default function Home() {
	return (
		<div className="bg-recruit-blue text-white">
			<div className="px-6 flex items-center justify-between ">
				<Link href="/">
					{" "}
					<Image src={logo} alt="Recruitem logo" height={55} />{" "}
				</Link>

				<nav>
					<ul className="flex gap-8">
						<Link href="/recruiter" className="flex items-center gap-2">
							<VscActivateBreakpoints />
							Recruiter
						</Link>
						<Link href="/candidate" className="flex items-center gap-2">
							<VscAccount />
							Candidate
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
}
