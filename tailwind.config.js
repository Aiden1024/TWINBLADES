import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./layouts/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)"],
				mono: ["var(--font-mono)"],
			},
			animation: {
				'spin-slow': 'spin 30s linear infinite',
				'spin-slower': 'spin 40s linear infinite reverse',
			}

		},
	},
	darkMode: "class",
	plugins: [heroui({
		themes: {
			light: {
				colors: {
					primary: {
						50: "#FEE8E4",
						100: "#FCDCCC",
						200: "#FAB299",
						300: "#F07D65",
						400: "#E24D3F",
						500: "#CF0808",
						600: "#B20514",
						700: "#95041D",
						800: "#780221",
						900: "#630123",
						DEFAULT: "#CF0808",
						foreground: "#FFFFFF"
					}
				}
			},
			dark: {
				colors: {
					primary: {
						900: "#FEE8E4",    // 原 50
						800: "#FCDCCC",    // 原 100
						700: "#FAB299",    // 原 200
						600: "#F07D65",    // 原 300
						500: "#CF0808",    // 保持不变
						400: "#B20514",    // 原 600
						300: "#95041D",    // 原 700
						200: "#780221",    // 原 800
						100: "#630123",    // 原 900
						50: "#4A0125",     // 新的更深色
						DEFAULT: "#CF0808", // 保持不变
						foreground: "#FFFFFF"
					}
				}
			}

		},
		layout: {
			radius: {
				small: "0px", // rounded-small
				medium: "0px", // rounded-medium
				large: "0px", // rounded-large
			},
		}
	})]
}
