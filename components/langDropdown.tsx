import React from 'react'
import { useTranslation, LanguageSwitcher } from "next-export-i18n";
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button } from "@heroui/react";
import { TfiLayout, TfiSettings, TfiUser, TfiWorld } from "react-icons/tfi";
import { PiGlobeLight } from 'react-icons/pi';

const LangDropdown = () => {
    return (
        <Dropdown className=" " placement="bottom-end" classNames={{ content: " min-w-0" }} >
            <DropdownTrigger>
                <Button isIconOnly variant="light" radius="full" className=" "><PiGlobeLight className=" text-2xl" /></Button>
            </DropdownTrigger>
            <DropdownMenu variant="light" aria-label="Link Actions" color="danger"  >
                <DropdownItem key="en" textValue="ENGLISH" className=' duration-150 ease-in-out hover:bg-default-100'>
                    <LanguageSwitcher lang="en" >
                        <h2 className=" px-8">ENGLISH</h2>
                    </LanguageSwitcher>

                </DropdownItem>




                <DropdownItem key="cn" textValue="简体中文" className=' duration-150 ease-in-out hover:bg-default-100'  >
                    <LanguageSwitcher lang="cn">
                        <h2 className="px-8 ">简体中文</h2>
                    </LanguageSwitcher>

                </DropdownItem>


            </DropdownMenu>
        </Dropdown>
    )
}

export default LangDropdown
