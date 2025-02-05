import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import LangComponent from "@/components/langTest";

import { useAlert } from 'react-alert'
import { Button } from "@heroui/button";

import { useTranslation } from "next-export-i18n";
export default function IndexPage() {
	
	const alert = useAlert();
	
	const { t } = useTranslation();
	
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-xl text-center justify-center">
					<h2 className={title()}>{t('heroPage.slogan')}</h2>
					<div className={subtitle({ class: "mt-4" })}>
						Light it up, Burn it down.
					</div>
					
					<h2 className=" text-title">Title</h2>
					<h2 className=" text-subtitle">subtitle</h2>
					<LangComponent/>
					<div className=" grid grid-cols-3 gap-2">
					<Button color="primary" variant="flat" onPress={()=>{alert.info("This is a Info Alert")}}>Alert</Button>
					<Button color="success" variant="flat" onPress={()=>{alert.success("This is a Success Alert")}}>Alert</Button>
					<Button color="danger" variant="flat" onPress={()=>{alert.error("This is a Error Alert")}}>Alert</Button>
					
					<Button color="primary" onPress={()=>{alert.info(["Info Title", "This is a Info Alert Description"])}}>Title Alert</Button>
					<Button color="success" onPress={()=>{alert.success(["Success Title", "This is a Success Alert Description"])}}>Title Alert</Button>
					<Button color="danger" onPress={()=>{alert.error(["Error Title", "This is a Error Alert Description"])}}>Title Alert</Button>
					</div>

				</div>




			</section>
		</DefaultLayout>
	);
}
