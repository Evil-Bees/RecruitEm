import Image from "next/image";
import { VscAccount, VscActivateBreakpoints } from "react-icons/vsc";

import logo from "../../public/images/recruitem-logo.png";

export default function Home() {
	return (
		<div className="bg-recruit-blue text-white">
			<div className="px-6 flex items-center justify-between ">
				<Image className="w-" src={logo} alt="Recruitem logo" height={55} />

				<nav>
					<ul className="flex gap-8">
						<li className="flex items-center gap-2">
							<VscActivateBreakpoints />
							Recruiter
						</li>
						<li className="flex items-center gap-2">
							<VscAccount />
							Candidate
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
