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
				'shadow-grow': 'shadowGrow 0.5s ease forwards',
				'shadow-shrink': 'shadowGrow 0.5s ease reverse forwards',
				soundwave: 'soundwave 1.5s ease-in-out infinite',
			},
			keyframes: {
				shadowGrow: {
					'0%': {
						boxShadow: 'none'
					},
					'20%': {
						boxShadow: '5px 5px rgba(0, 98, 90, 0.4)'
					},
					'40%': {
						boxShadow: '5px 5px rgba(0, 98, 90, 0.4), 10px 10px rgba(0, 98, 90, 0.3)'
					},
					'60%': {
						boxShadow: '5px 5px rgba(0, 98, 90, 0.4), 10px 10px rgba(0, 98, 90, 0.3), 15px 15px rgba(0, 98, 90, 0.2)'
					},
					'80%': {
						boxShadow: '5px 5px rgba(0, 98, 90, 0.4), 10px 10px rgba(0, 98, 90, 0.3), 15px 15px rgba(0, 98, 90, 0.2), 20px 20px rgba(0, 98, 90, 0.1)'
					},
					'100%': {
						boxShadow: '5px 5px rgba(0, 98, 90, 0.4), 10px 10px rgba(0, 98, 90, 0.3), 15px 15px rgba(0, 98, 90, 0.2), 20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05)'
					}
				},
				soundwave: {
					'0%, 100%': { height: '25px' },
					'50%': { height: '100px' },
				},

			}

		},
	},
	darkMode: "class",
	plugins: [heroui({
		themes: {
			light: {
				colors: {
					background: "#FEFEFE",
					focus: "#CF0808",
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
						foreground: "#FEFEFE"
					},
					default: {
						"100": "#F2F8FA",
						"200": "#E6F0F6",
						"300": "#CFDCE5",
						"400": "#B3C1CC",
						"500": "#8F9DAB",
						"600": "#687B93",
						"700": "#485C7B",
						"800": "#2D4063",
						"900": "#1B2B52",
						"DEFAULT": "#CFDCE5",
						"foreground": "#485C7B"
					},
					secondary: {
						50: "#e6f1fe",    // 最浅
						100: "#cce3fd",
						200: "#99c7fb",
						300: "#66aaf9",
						400: "#338ef7",
						500: "#006FEE",    // 亮蓝色
						600: "#005bc4",
						700: "#004493",
						800: "#002e62",
						900: "#001731",
						"DEFAULT": "#006FEE",   // 最深
					}

				}
			},
			dark: {
				colors: {
					focus: "#FE0000",
					primary: {
						900: "#FEE8E4",    // 原 50
						800: "#FCDCCC",    // 原 100
						700: "#FAB299",    // 原 200
						600: "#F07D65",    // 原 300
						500: "#FE0000",    // 保持不变
						400: "#B20514",    // 原 600
						300: "#95041D",    // 原 700
						200: "#780221",    // 原 800
						100: "#630123",    // 原 900
						50: "#4A0125",     // 新的更深色
						DEFAULT: "#FE0000", // 保持不变
						foreground: "#FFFFFF"
					},
					default: {
						500: "#71717a"
					},
					secondary: {
						50: "#001731",
						100: "#002e62",
						200: "#004493",
						300: "#005bc4",
						400: "#006FEE",
						500: "#338ef7",
						600: "#66aaf9",
						700: "#99c7fb",
						800: "#cce3fd",
						900: "#e6f1fe",
						DEFAULT: "#338ef7", // 保持不变
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
