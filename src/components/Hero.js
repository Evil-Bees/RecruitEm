import promoImg from "public/images/promo.png";
import RotateImages from "./RotateImages";

function Hero() {
	return (
		<section className="flex relative h-[50vh] overflow-hidden bg-indigo-200 lg:p-[100px]">
			<div className="lg:w-1/2 flex flex-col justify-center items-center z-[2] px-8 text-center lg:text-left">
				<h1 className="text-6xl lg:text-[100px]">RecruitEm</h1>
				<p className="text-4xl lg:pl-5">
					The only recruiting tool you'll ever need
				</p>
			</div>
			<div className="flex w-1/2 rotate-[32deg] absolute right-[10%] -top-[200px]">
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
