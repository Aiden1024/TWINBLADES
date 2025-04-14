import { useAlert } from "react-alert";
import { useTranslation } from "next-export-i18n";

import Home from "./comps/home";



export default function IndexPage() {
	const alert = useAlert();

	const { t } = useTranslation();



	return (
		<section className="flex flex-col w-full  ">
			<Home/>
			<Home/>
			<Home/>
		</section>
	);
}
