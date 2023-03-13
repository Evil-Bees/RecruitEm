import Image from "next/image";
import cvImage from "public/images/sample-cv.png";
import cvImage2 from "public/images/sample-cv2.png";
import { useState } from "react";

function Resume() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="relative">
			<Image src={cvImage} alt="John Doe resume" />
			<Image
				onMouseEnter={() => setIsNavOpen(true)}
				onMouseLeave={() => setIsNavOpen(false)}
				className={`absolute top-0 ${isNavOpen ? "opacity-0" : "opacity-1"}`}
				src={cvImage2}
				alt="John Doe resume"
			/>
		</div>
	);
}

export default Resume;
