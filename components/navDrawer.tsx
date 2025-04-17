import React from 'react'
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	Button,
	useDisclosure,
} from "@heroui/react";
import { LuMenu } from "react-icons/lu";
import { LuChevronsLeft } from "react-icons/lu";

import { Listbox, ListboxItem } from "@heroui/react";
const drawerMotionProps = {
	variants: {

		enter: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.25
			}
		},
		exit: {
			x: -50,
			opacity: 0,
			transition: {
				duration: 0.25
			}
		},
	},
}

import { usePathname } from 'next/navigation';

const items = [
	{
		key: "home",
		label: "Home",
		href: "/",
	},
	{
		key: "about",
		label: "About",
		href: "/about",
	},
	{
		key: "docs",
		label: "Docs",
		href: "/docs",
	},
	{
		key: "setting",
		label: "Setting",
		href: "/setting",
	},
];
const NavDrawer = ({ isOpen = false, onOpenChange = () => { } }) => {

	const pathname = usePathname();

	return (
		<div>
			<Drawer size='xs' isOpen={isOpen} onOpenChange={onOpenChange} placement='left' motionProps={drawerMotionProps} hideCloseButton
				radius='none' >
				<DrawerContent>
					{(onClose) => (
						<>
							<DrawerHeader className="flex gap-1 items-center pt-3 pb-0">
								<Button isIconOnly radius="full" variant="light" onPress={onClose}>
									<LuChevronsLeft className=" text-xl" />
								</Button>
							</DrawerHeader>

							<DrawerBody>
								<Listbox aria-label="Dynamic Actions" variant='flat' className=' ' items={items}>
									{(item) => (
										<ListboxItem
											
									
											showDivider={item.key === "docs" ? true : false}
											key={item.key}
											className={""}
											variant={ pathname.includes(item.href) ? "solid" : "flat"}
											color={ pathname.includes(item.href) ? "primary" : "default"}
											href={item.href}
										>
											{item.label}
										</ListboxItem>
									)}
								
								</Listbox>
							</DrawerBody>
							{/* <DrawerFooter>
								<Button className=' flex justify-start' color="danger" variant="light" fullWidth onPress={onClose}>
									Logout
								</Button>

							</DrawerFooter> */}
						</>
					)}
				</DrawerContent>
			</Drawer>

		</div>
	)
}

export default NavDrawer
