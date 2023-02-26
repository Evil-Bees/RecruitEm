import Image from "next/image";

function RotateImages({
	rotateAngle,
	imageOne,
	imageTwo,
	imageThree,
	imageFour,
}) {
	return (
		<div className={`rotate-${rotateAngle} mr-2`}>
			<Image src={imageOne} alt="placeholder image" />
			<Image src={imageTwo} alt="placeholder image" />
			<Image src={imageThree} alt="placeholder image" />
			<Image src={imageFour} alt="placeholder image" />
		</div>
	);
}

export default RotateImages;
