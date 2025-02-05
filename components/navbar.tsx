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

	const {isOpen: isDrawerOpen, onOpen: onOpenDrawer, onOpenChange: onOpenDrawerChange} = useDisclosure();
	
	return (
		<HeroUINavbar maxWidth="full" position="sticky" classNames={{wrapper:"px-0 md:px-2 gap-1"}}>
			
			<NavDrawer isOpen={isDrawerOpen} onOpenChange={onOpenDrawerChange} />

			<NavbarContent className="basis-3/5 sm:basis-full" justify="start">
			<Button isIconOnly radius="full" variant="light" onPress={onOpenDrawer}>
				<LuMenu className=" text-xl"/>
			</Button>
			
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<GiCurlyWing className=" text-lg text-danger"/>
						<p className="font-bold text-inherit">TBDV</p>
					</NextLink>
				</NavbarBrand>
				<div className="hidden lg:flex gap-2 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden md:flex">
					123
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
			</NavbarContent>
		</HeroUINavbar>
	);
};
