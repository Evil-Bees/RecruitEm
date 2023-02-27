import promoImg from "public/images/promo.png";
import RotateImages from "./RotateImages";

function Hero() {
	return (
		<section className="flex relative h-[50vh] overflow-hidden bg-indigo-200 p-[100px]">
			<div className="w-1/2 flex flex-col justify-center items-center z-[2] backdrop-opacity-20 bg-white/30 backdrop-invert">
				<h1 className="text-[100px]">RecruitEm</h1>
				<p className="text-4xl px-8">
					The only recruiting tool you'll ever need
				</p>
			</div>
			<div className="flex w-1/2 rotate-[32deg] absolute right-[10%] -top-[200px]">
				<div className="animate-carousel">
					<RotateImages
						imageOne={promoImg}
						imageTwo={promoImg}
						imageThree={promoImg}
						imageFour={promoImg}
					/>
				</div>
				<div className="animate-carouselTwo">
					<RotateImages
						imageOne={promoImg}
						imageTwo={promoImg}
						imageThree={promoImg}
						imageFour={promoImg}
					/>
				</div>
				<div className="animate-carouselThree">
					<RotateImages
						imageOne={promoImg}
						imageTwo={promoImg}
						imageThree={promoImg}
						imageFour={promoImg}
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
