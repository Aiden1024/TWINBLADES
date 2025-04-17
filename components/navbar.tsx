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

export const Navbar = () => {

	const { isOpen: isDrawerOpen, onOpen: onOpenDrawer, onOpenChange: onOpenDrawerChange } = useDisclosure();

	return (
		<HeroUINavbar isBlurred={true} maxWidth="full" position="sticky" classNames={{ wrapper: "px-0 md:px-2 gap-1" }}>

			<NavDrawer isOpen={isDrawerOpen} onOpenChange={onOpenDrawerChange} />

			<NavbarContent className="basis-3/5 sm:basis-full" justify="start">


				<NavbarBrand className="gap-3 max-w-fit ml-2">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<div className="group flex flex-col w-10 h-10 border text-default-500 hover:text-foreground border-default-300 hover:border-primary-500 text-sm items-center justify-center duration-150 ease-in-out ">
							<div className=" duration-150 ease-in-out ">
								<p className="">T <span className=" ml-0.5">B</span></p>
								<p className="-mt-1">D V</p>
							</div>
						</div>
					</NextLink>
				</NavbarBrand>
				<div className="hidden lg:flex gap-2 justify-start ml-2">

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
