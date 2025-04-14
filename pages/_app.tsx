import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import "@/styles/globals.css";

// alert imports
import { positions, transitions, types, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "@/components/alertPops/index";
import DefaultLayout from "@/layouts/default";
import localFont from 'next/font/local'
import { useTranslation } from "next-export-i18n";
import useCurrentLang from "@/hooks/useCurrentLang";
import { DataProvider } from "@/components/providerContext";

import { mixfonts } from "@/config/fonts";

// alertPops
const options = {
	offset: "10px",
	timeout: 5000,
	position: positions.TOP_CENTER,
}


export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const lang = useCurrentLang()


	return (
		<DataProvider>
			<AlertProvider template={AlertTemplate} {...options}>
				<HeroUIProvider navigate={router.push} className={` ${mixfonts.className}`}>
					<NextThemesProvider defaultTheme="light" >

						<DefaultLayout>
							<Component {...pageProps} />
						</DefaultLayout>

					</NextThemesProvider>
				</HeroUIProvider>
			</AlertProvider>
		</DataProvider>
	);
}

