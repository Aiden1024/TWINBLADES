
import LangComponent from "@/components/langSwitcher";

import { useAlert } from "react-alert";
import { Button } from "@heroui/button";

import { useTranslation } from "next-export-i18n";
import { Code } from "@heroui/react";
import { useState } from "react";



import AlertDemo from "./AlertDemo";
import DFontsDemo from "./DFontsDemo";
import FetchHookDemo from "./FetchHookDemo";
import ProviderDemo from "./ProviderDemo";

export default function TBTPContent() {
    const alert = useAlert();

    const { t } = useTranslation();

    const [count, setCount] = useState(0);

    return (
        <section className="flex flex-col *:flex *:flex-col *:gap-1   w-full max-w-screen-lg mx-auto gap-8 py-8 md:py-10">
            <div>
                <h2 className=" text-title text-4xl">TB-NEXT-TEMPLATE</h2>
                <h2 className=" text-subtitle">An i18n Static-Export NEXT Template </h2>
            </div>
            <div className=" ">
                <h2 className=" text-header">Global CSS Setting </h2>
                <h2 className=" text-subheader">
                    title, subtitle ... and other styles
                </h2>
                <Code className=" w-fit">/styles/globals.css. </Code>
            </div>

            <div>
                <h2 className="text-header">Real Time i18n with LocalStorage or Query Param</h2>
                <h2 className=" text-subheader">
                    {t("heroPage.template", { count: count })}
                </h2>
                <Code className=" w-fit">{"Pressed {{count}} times"} </Code>

                <LangComponent
                    buttonFunc={() => {
                        setCount(count + 1);
                    }}
                />
                <Code className=" w-fit">/i18n/translations.[Lang].json </Code>
                <Code className=" w-fit">/i18n/index.js </Code>
            </div>

            <div>
                <AlertDemo/>
            </div>
            
            <div>
                <DFontsDemo/>
            </div>
            
            <div>
                <FetchHookDemo/>
            </div>
            
            <div>
                <ProviderDemo/>
            </div>
        </section>
    );
}
