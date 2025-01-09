import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import localFont from 'next/font/local'
import { appWithTranslation, useTranslation } from 'next-i18next'

import "@/styles/globals.css";

const enFont = localFont({ src: '../fonts/Raleway-VariableFont_wght.ttf' })
const cnFont = localFont({ src: '../fonts/NotoSansSC-VariableFont_wght.ttf' })
const hkFont = localFont({ src: '../fonts/NotoSansHK-VariableFont_wght.ttf' })

const App = ({ Component, pageProps }: AppProps) => {
  const { i18n } = useTranslation();
  const router = useRouter();


  const getFontClassName = () => {
    switch (i18n.language) {
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
    <NextUIProvider navigate={router.push} className={getFontClassName()}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}


export default appWithTranslation(App)
