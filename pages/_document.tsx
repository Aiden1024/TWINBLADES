import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";
import { mixfonts } from "@/config/fonts";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link 
          rel="icon" 
          type="image/x-icon" 
          href={`${basePath}/favicon.ico`}
        />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          mixfonts.className,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
