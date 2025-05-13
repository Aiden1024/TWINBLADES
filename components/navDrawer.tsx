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
import { Link as ScrollLink } from 'react-scroll';
import { PiListLight, PiCaretDoubleLeftLight } from "react-icons/pi";
const NavDrawer = ({ isOpen = false, onOpenChange = () => { }, navItems = [] }) => {

	const pathname = usePathname();

	return (
		<div >
			<Drawer size='xs' isOpen={isOpen} onOpenChange={onOpenChange} placement='left' motionProps={drawerMotionProps} hideCloseButton
				radius='none'  >
				<DrawerContent>
					{(onClose) => (
						<>
							<DrawerHeader className="flex gap-1 items-center pt-3 pb-0">
								<Button isIconOnly radius="full" variant="light" onPress={onClose}>
									<PiCaretDoubleLeftLight className=" text-2xl" />
								</Button>
							</DrawerHeader>

							<DrawerBody>
								<div className="flex flex-col gap-1 ">
									{navItems.map((item) => (
										<ScrollLink
											key={item.key}
											className="cursor-pointer font-light tracking-wide text-lg py-1 px-2 
                 duration-150 ease-in-out text-default-600 
                 hover:text-primary hover:bg-default-100
                 data-[active=true]:text-primary-500"
											to={item.key}
											duration={800}
											smooth="easeInOutCubic"
											offset={-48}
											spy={true}
											onClick={onClose}
											activeClass="!text-primary-500"
										>
											{item.label}
											<div className="absolute bottom-0 left-0 h-[1px] bg-primary-500 transition-all duration-300 ease-in-out 
                         w-0 group-hover:w-full
                         [.active_&]:w-full"
											/>
										</ScrollLink>
									))}
								</div>

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
