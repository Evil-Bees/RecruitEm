import Image from "next/image";
import cvImage from "public/images/sample-cv.png";
import cvImage2 from "public/images/sample-cv2.png";
import { useState } from "react";

function Resume() {
	const [isHovered, setHover] = useState(false);

	return (
		<div className="relative bg-indigo-900 py-12">
			<h1 className="text-center text-white text-6xl pt-10 pb-8">
				Transparent hiring. Always.
			</h1>
			<Image
				className="lg:w-1/2 lg:mx-auto lg:my-12"
				src={cvImage}
				alt="John Doe resume"
			/>
			<Image
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				className={`absolute top-0 lg:w-1/2 top-[10rem] lg:left-[25%] ${
					isHovered ? "opacity-0" : "opacity-1"
				}`}
				src={cvImage2}
				alt="John Doe resume"
			/>
		</div>
	);
}

export default Resume;
