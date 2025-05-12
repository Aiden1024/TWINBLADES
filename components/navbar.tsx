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

import { useDisclosure } from "@heroui/react";
import NavDrawer from "./navDrawer";

import { Link as ScrollLink } from 'react-scroll';

export const Navbar = () => {
	const navItems = [
		{
			label: "主页",
			href: "/",
			key: "home",
		},
		{
			label: "理念",
			href: "/",
			key: "philosophy",
		},
		{
			label: "经验",
			href: "/",
			key: "experience",
		},
		{
			label: "项目",
			href: "/",
			key: "projects",
		},
		{
			label: "专长",
			href: "/",
			key: "expertise",
		},
	];


	const { isOpen: isDrawerOpen, onOpen: onOpenDrawer, onOpenChange: onOpenDrawerChange } = useDisclosure();

	return (
		<HeroUINavbar isBlurred={true} maxWidth="full" position="sticky" classNames={{ wrapper: "px-0 md:px-2 gap-1" }}>

			<NavDrawer isOpen={isDrawerOpen} onOpenChange={onOpenDrawerChange} />

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
				className="flex basis-1/5 sm:basis-full"
				justify="end"

			>
				<NavbarItem>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="flex">

					<Button isIconOnly radius="full" variant="light" onPress={onOpenDrawer}>
						<LuMenu className=" text-xl" />
					</Button>
				</NavbarItem>
			</NavbarContent>

		</HeroUINavbar>
	);
};
