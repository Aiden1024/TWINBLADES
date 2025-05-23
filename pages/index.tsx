import { useAlert } from "react-alert";
import { useTranslation } from "next-export-i18n";

import Home from "./comps/home";
import About from "./comps/about";
import Experience from "./comps/exp";
import Portfolio from "./comps/portfolio";
import Contact from "./comps/contact";
import Skill from "./comps/skill";

export default function IndexPage() {
	const alert = useAlert();

	const { t } = useTranslation();



	return (
		<section className="flex flex-col w-full  ">
			<Home/>
			<About/>
			<Experience/>
			<Portfolio/>
			<Skill/>
			<Contact/>
		</section>
	);
}
