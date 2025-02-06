import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import LangComponent from "@/components/langSwitcher";

import { useAlert } from "react-alert";
import { Button } from "@heroui/button";

import { useTranslation } from "next-export-i18n";
import { Code } from "@heroui/react";
import { useState } from "react";
import { RiRefreshLine } from "react-icons/ri";
export default function IndexPage() {
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
			</div>

			<div>
				<h2 className="text-header">Pop Alert Ability</h2>
				<h2 className=" text-subheader">
					Press the Button to Trigger Pop Alert
				</h2>
				<div className=" grid grid-cols-3 gap-2 w-fit">
					<Button
						color="primary"
						variant="flat"
						onPress={() => {
							alert.info("This is a Info Alert");
						}}
					>
						Alert
					</Button>
					<Button
						color="success"
						variant="flat"
						onPress={() => {
							alert.success("This is a Success Alert");
						}}
					>
						Alert
					</Button>
					<Button
						color="danger"
						variant="flat"
						onPress={() => {
							alert.error("This is a Error Alert");
						}}
					>
						Alert
					</Button>

					<Button
						color="primary"
						onPress={() => {
							alert.info(["Info Title", "This is a Info Alert Description"]);
						}}
					>
						Title Alert
					</Button>
					<Button
						color="success"
						onPress={() => {
							alert.success([
								"Success Title",
								"This is a Success Alert Description",
							]);
						}}
					>
						Title Alert
					</Button>
					<Button
						color="danger"
						onPress={() => {
							alert.error(["Error Title", "This is a Error Alert Description"]);
						}}
					>
						Title Alert
					</Button>
				</div>
				<Code className=" w-fit">/components/alertPops/index.js </Code>
			</div>
			
			<div>
				<h2 className="text-header">I18n Based Dynamic Fonts</h2>
				<h2 className=" text-subheader">
					{t("heroPage.slogan", { count: count })}
				</h2>

				<div className=" flex items-center gap-2">
					<LangComponent
						buttonFunc={() => {
							setCount(count + 1);
						}}
					/>
					
					<Button onPress={()=> window.location.reload()} variant="flat" color="primary" startContent={<RiRefreshLine className=" text-xl"/>} className=" w-fit" isIconOnly></Button>
				</div>
				<Code className=" w-fit">/fonts/[fontFamily].ttf </Code>
			</div>
		</section>
	);
}
