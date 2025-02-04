import {useTranslation, LanguageSwitcher} from "next-export-i18n";
import { Button } from "@heroui/button";
import {RadioGroup, Radio} from "@heroui/react";
export default function LangComponent({}) {
  const { t } = useTranslation();
  
  return (
	<div>

	  <nav className=" flex gap-2 py-2">
		{['cn', 'en', 'hk'].map((item, index)=>(
			
			<LanguageSwitcher lang={item} key={index}>
				<Button>{item}</Button>
			</LanguageSwitcher>
			
		))}
	
			
			


		
		
	  </nav>

	</div>
  )
}