import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";

// alert imports
import { positions, transitions, types, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "@/components/alertPops/index";

// alertPops
const options = {
	offset: "10px",
	timeout: 5000,
	position: positions.TOP_CENTER,
}

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<AlertProvider template={AlertTemplate} {...options}>
			<HeroUIProvider  navigate={router.push}>
				<NextThemesProvider defaultTheme="light" forcedTheme="light">
					<Component {...pageProps} />
				</NextThemesProvider>
			</HeroUIProvider>
		</AlertProvider>
	);
}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
