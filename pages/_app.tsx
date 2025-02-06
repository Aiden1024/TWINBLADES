import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";

// alert imports
import { positions, transitions, types, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "@/components/alertPops/index";
import DefaultLayout from "@/layouts/default";
import localFont from 'next/font/local'     
import { useTranslation } from "next-export-i18n";
import useCurrentLang from "@/hooks/useCurrentLang";
// alertPops
const options = {
	offset: "10px",
	timeout: 5000,
	position: positions.TOP_CENTER,
}
// fonts
const enFont = localFont({ src: '../fonts/Roboto-VariableFont_wdth,wght.ttf' })
const cnFont = localFont({ src: '../fonts/NotoSansSC-VariableFont_wght.ttf' })
const hkFont = localFont({ src: '../fonts/NotoSansHK-VariableFont_wght.ttf' })

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const lang = useCurrentLang()
	
	const getFontClassName = () => {
		switch (lang) {
		  case 'en':
			return enFont.className;
		  case 'cn':
			return cnFont.className;
		  case 'hk':
			return hkFont.className;
		  default:
			return enFont.className;
		}
	  };

	return (
		<AlertProvider template={AlertTemplate} {...options}>
			<HeroUIProvider  navigate={router.push} className={getFontClassName()}>
				<NextThemesProvider defaultTheme="light" >
					<DefaultLayout>
						<Component {...pageProps} />
					</DefaultLayout>
				</NextThemesProvider>
			</HeroUIProvider>
		</AlertProvider>
	);
}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
