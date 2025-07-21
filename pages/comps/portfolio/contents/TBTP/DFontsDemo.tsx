import React from 'react'
import LangComponent from '@/components/langSwitcher';
import { Button, Code } from '@heroui/react';
import { useState } from 'react';
import { useTranslation } from 'next-export-i18n';
import { RiRefreshLine } from 'react-icons/ri';
const DFontsDemo = () => {

	const { t } = useTranslation()
	return (
		<>
			<h2 className="text-header">I18n Based Dynamic Fonts</h2>
			<h2 className=" text-subheader">
				Demo: Adaptive Raleway (English) with NotoSans (Chinese)
			</h2>
			<h2 className=" text-subheader">
				{t("heroPage.slogan")}
			</h2>

			<div className=" flex items-center gap-2">
				<LangComponent
					buttonFunc={() => {

					}}
				/>

			</div>
			<Code className=" w-fit">/config/fonts/[fontFamily].ttf </Code>
		</>
	)
}

export default DFontsDemo
