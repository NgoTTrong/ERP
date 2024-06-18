import type { Config } from "tailwindcss";

const config: Config = {
	corePlugins: {
		preflight: false,
	},
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			primary: "#13C2C2",
		},
	},
	plugins: [],
};
export default config;
