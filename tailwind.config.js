/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"node_modules/preline/dist/*.js",
		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"inter-light": ["Inter-ExtraLight"],
				"inter-regular": ["Inter-Regular"],
				"inter-semibold": ["Inter-SemiBold"],
				"inter-black": ["Inter-Black"],
			},
			colors: {
				"recruit-blue": "#1c1a4d",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "translateY(3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
				carousel: {
					"0%, 100%": { transform: "translateY(-150%)" },
					"50%": { transform: "translateY(150%)" },
				},
				carouselTwo: {
					"0%, 100%": { transform: "translateY(700px)" },
					"50%": { transform: "translateY(-57px)" },
				},
				carouselThree: {
					"0%, 100%": { transform: "translateY(-400px)" },
					"50%": { transform: "translateY(0)" },
				},
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
				carousel: "carousel 8s ease-in-out infinite",
				carouselTwo: "carouselTwo 5s ease-in-out infinite",
				carouselThree: "carouselThree 5s ease-in-out infinite",
			},
		},
	},
	plugins: [require("preline/plugin")],
};
