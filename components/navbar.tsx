import {
	Navbar as HeroUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import { GiCurlyWing } from "react-icons/gi";
import { LuMenu } from "react-icons/lu";
import { PiListLight, PiCaretDoubleLeftLight, PiLinuxLogoFill, PiList, PiEnvelope, PiEnvelopeThin, PiEnvelopeDuotone, PiEnvelopeLight } from "react-icons/pi";

import { useDisclosure } from "@heroui/react";
import NavDrawer from "./navDrawer";

import { Link as ScrollLink } from 'react-scroll';
import LangDropdown from "./langDropdown";
import { useTranslation } from "next-export-i18n";
export const Navbar = () => {
	const { t } = useTranslation()
	const navItems = [
		{
			label: t("navbar.home"), // 主页 / Home
			href: "/",
			key: "home",
		},
		{
			label: t("navbar.philosophy"), // 理念 / Philosophy
			href: "/",
			key: "philosophy",
		},
		{
			label: t("navbar.experience"), // 经验 / Experience
			href: "/",
			key: "experience",
		},
		{
			label: t("navbar.projects"), // 项目 / Projects
			href: "/",
			key: "projects",
		},
		{
			label: t("navbar.expertise"), // 专长 / Expertise
			href: "/",
			key: "expertise",
		},
	];


	const { isOpen: isDrawerOpen, onOpen: onOpenDrawer, onOpenChange: onOpenDrawerChange } = useDisclosure();

	return (
		<HeroUINavbar isBlurred={true} maxWidth="full" position="sticky" classNames={{ wrapper: "px-0 md:px-2 gap-1" }}>

			<NavDrawer isOpen={isDrawerOpen} onOpenChange={onOpenDrawerChange} navItems={navItems} />

			<NavbarContent className="basis-3/5 sm:basis-full" justify="start">


				<NavbarBrand className="gap-3 max-w-fit ml-2">
					<ScrollLink className="flex cursor-pointer justify-start items-center gap-1" to="home" duration={800}
						smooth="easeInOutCubic">
						<div className="group flex flex-col w-10 h-10 border text-default-500 hover:text-foreground border-default-300 hover:border-primary-300 text-sm items-center justify-center duration-150 ease-in-out ">
							<div className=" duration-150 ease-in-out ">
								<p className="">T <span className=" ml-[2px]">B</span></p>
								<p className="-mt-1">D V</p>
							</div>
						</div>
					</ScrollLink>
				</NavbarBrand>
				<div className="hidden lg:flex gap-4 justify-start ml-2">
					{navItems.map((item) => (
						<NavbarItem key={item.href}>
							<div className="group relative">
								<ScrollLink
									className="cursor-pointer font-light tracking-wide text-lg duration-150 ease-in-out text-default-600 group-hover:text-foreground"
									color="foreground"
									to={item.key}
									duration={800}
									smooth="easeInOutCubic"
									offset={-48}
									spy={true}
									activeClass="!text-primary-500"
								>
									{item.label}
									<div className="absolute bottom-0 left-0 h-[1px] bg-primary-500 transition-all duration-300 ease-in-out 
                         w-0 group-hover:w-full
                         [.active_&]:w-full"
									/>
								</ScrollLink>
							</div>
						</NavbarItem>
					))}
				</div>

			</NavbarContent>

			<NavbarContent
				className="flex basis-1/5 sm:basis-full mr-2 gap-2 md:gap-4"
				justify="end"

			>


				<NavbarItem>
					<Button
						isIconOnly
						variant="light"
						radius="full"
						onPress={() => {
							const contactSection = document.getElementById("contact");
							if (contactSection) {
								contactSection.scrollIntoView({ behavior: "smooth" });
							}
						}}
					>
						<PiEnvelopeLight className="text-2xl" />
					</Button>
				</NavbarItem>
				<NavbarItem>
					<ThemeSwitch />
				</NavbarItem>

				<NavbarItem>
					<LangDropdown />
				</NavbarItem>


				<NavbarItem className="flex  lg:hidden">

					<Button isIconOnly radius="full" variant="light" onPress={onOpenDrawer} className=''>
						<PiList className=" text-2xl" />
					</Button>
				</NavbarItem>
			</NavbarContent>

		</HeroUINavbar>
	);
};
