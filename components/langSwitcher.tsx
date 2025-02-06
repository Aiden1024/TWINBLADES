import {useTranslation, LanguageSwitcher} from "next-export-i18n";
import { Button } from "@heroui/button";
import {RadioGroup, Radio} from "@heroui/react";
export default function LangComponent({buttonFunc=()=>{}}) {
  const { t } = useTranslation();
  
  return (
	<div>

	  <div className=" flex gap-2 py-2">
	  {[
		{ key: 'en', label: 'English' },
		{ key: 'cn', label: '简体中文' },
		{ key: 'hk', label: '繁體中文' }
		].map((item, index) => (
		<LanguageSwitcher lang={item.key} key={index}>
			<Button variant="faded" onPress={buttonFunc}>{item.label}</Button>
		</LanguageSwitcher>
		))}
			
			


		
		
	  </div>

	</div>
  )
}