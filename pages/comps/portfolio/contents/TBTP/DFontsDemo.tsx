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
				{t("heroPage.slogan")}
			</h2>

			<div className=" flex items-center gap-2">
				<LangComponent
					buttonFunc={() => {

					}}
				/>

				<Button onPress={() => window.location.reload()} variant="flat" color="primary" startContent={<RiRefreshLine className=" text-xl" />} className=" w-fit" isIconOnly></Button>
			</div>
			<Code className=" w-fit">/fonts/[fontFamily].ttf </Code>
		</>
	)
}

export default DFontsDemo
