import Image from "next/image";

import logo from "../images/recruitem-logo.png";

export default function Home() {
	return (
		<>
			<section>
				<Image
					className="h-full object-none"
					src={logo}
					alt="Recruitem logo"
					height={100}
				/>
			</section>
		</>
	);
}
