import {useTranslation, LanguageSwitcher} from "next-export-i18n";

export default function LangComponent({}) {
  const { t } = useTranslation();
  
  return (
	<div>
	  <nav className="">
		<LanguageSwitcher lang="de">de</LanguageSwitcher>
		<LanguageSwitcher lang="en">en</LanguageSwitcher>
	  </nav>
	  <h1>{t('nested.key')}</h1>
	</div>
  )
}