import promoImg from "public/images/promo.png";
import RotateImages from "./RotateImages";

function Hero() {
	return (
		<section className="flex">
			<div className="w-1/2">Hero</div>
			<div className="flex w-1/2 rotate-[32deg]">
				<RotateImages
					className="h-2"
					imageOne={promoImg}
					imageTwo={promoImg}
					imageThree={promoImg}
					imageFour={promoImg}
				/>
				<RotateImages
					className="h-2"
					imageOne={promoImg}
					imageTwo={promoImg}
					imageThree={promoImg}
					imageFour={promoImg}
				/>
				<RotateImages
					className="h-2"
					imageOne={promoImg}
					imageTwo={promoImg}
					imageThree={promoImg}
					imageFour={promoImg}
				/>
			</div>
		</section>
	);
}

export default Hero;
