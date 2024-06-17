import type { Config } from "tailwindcss";

const config: Config = {
	corePlugins: {
		preflight: false,
	},
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{html,ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				default: "1472px",
				xs: "600px",
				tablet: "601px",
			},
		},
	},
	plugins: [],
};
export default config;
