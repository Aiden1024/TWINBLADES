import React, { useState } from 'react'
import { Button, Divider, Tooltip } from '@heroui/react'
import { SectionTitle } from '../exp';
import { RxCode, RxMix, RxDimensions, RxCrop, RxLayers } from "react-icons/rx";
import { TfiMusic } from "react-icons/tfi";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiPython, SiGnubash, SiCapacitor, SiGithub, SiJira, SiGraphql } from "react-icons/si";
import { SiFigma, SiMaterialdesign, SiNextui, SiTailwindcss, SiAdobephotoshop } from "react-icons/si";

import { MdOutlineFormatListBulleted, MdDesignServices } from "react-icons/md";
import { PiFlowArrow } from "react-icons/pi";
import { GiViolin } from "react-icons/gi";
import { SiYoutube, SiNeteasecloudmusic } from "react-icons/si";
import Ableton from './icons/Ableton';
import CapCut from './icons/CapCut';
import { IconType } from 'react-icons';
import { VscMusic } from "react-icons/vsc";
import { useTranslation } from 'next-export-i18n';
const skillIcons = [
    // 前端基础
    {
        icon: SiHtml5,
        name: 'HTML'
    },
    {
        icon: SiCss3,
        name: 'CSS'
    },
    {
        icon: SiJavascript,
        name: 'JavaScript'
    },
    {
        icon: SiTypescript,
        name: 'TypeScript'
    },
    // 前端框架
    {
        icon: SiReact,
        name: 'React'
    },
    {
        icon: SiNextdotjs,
        name: 'Next.js'
    },
    {
        icon: SiTailwindcss,
        name: 'Tailwind CSS'
    },
    {
        icon: SiNextui,
        name: 'NextUI'
    },
    // 其他技术
    {
        icon: SiPython,
        name: 'Python'
    },
    {
        icon: SiGnubash,
        name: 'Bash'
    },
    {
        icon: SiCapacitor,
        name: 'Capacitor'
    },
    // 开发工具
    {
        icon: SiGithub,
        name: 'GitHub'
    },
    {
        icon: SiJira,
        name: 'Jira'
    }
];
const designIcons = [
    {
        icon: SiFigma,
        name: 'Figma'
    },
    {
        icon: SiMaterialdesign,
        name: 'Material Design'
    },
    {
        icon: SiNextui,
        name: 'NextUI'
    },
    {
        icon: SiTailwindcss,
        name: 'Tailwind CSS'
    },
    {
        icon: SiAdobephotoshop,
        name: 'Photoshop'
    },
    {
        icon: CapCut,
        name: 'CapCut'
    }
];
const productIcons = [
    {
        icon: MdOutlineFormatListBulleted,
        name: 'Requirement'
    },
    {
        icon: PiFlowArrow,
        name: 'Flows'
    },
    {
        icon: MdDesignServices,
        name: 'Wireframe'
    },
]

const musicIcons = [
    {
        icon: Ableton,
        name: 'Ableton Live'
    },
    {
        icon: GiViolin,
        name: 'Violin'
    },
    {
        icon: SiYoutube,
        name: 'Youtube'
    },
    {
        icon: SiNeteasecloudmusic,
        name: 'Netease Cloud Music'
    },


]

// SkillSection 组件
interface SkillSectionProps {
    title: string;
    icon: IconType;
    quote: string;
    icons: Array<{ icon: IconType; name: string }>;
    isReversed?: boolean;
}

const SkillSection = ({ title, icon, quote, icons, isReversed = false }: SkillSectionProps) => {
    const [openTooltips, setOpenTooltips] = useState(new Array(icons.length).fill(false));

    // 更新特定索引的 tooltip 状态
    const handleTooltip = (index: number, isOpen: boolean) => {
        setOpenTooltips(prev => {
            const newState = [...prev];
            newState[index] = isOpen;
            return newState;
        });
    };
    return (
        <div className={`flex flex-col gap-2 ${isReversed ? 'items-end text-end' : ''}`} >
            <div className=' flex flex-col w-fit'>
                <div className=' relative'>
                    <SectionTitle
                        icon={icon}
                        text={title}
                        className=' mb-0 text-3xl md:text-4xl !font-normal md:mb-0.5'
                    />
                </div>
                {/* <Divider className=' bg-primary-500 '/> */}
            </div>

            {/* <div className={`  md:text-xl flex gap-2 items-stretch mt-2 text-default-700 ${isReversed ? 'flex-row-reverse' : ''}`}>
                <Divider orientation='vertical' className='bg-primary-500 h-auto my-1 w-0.5' />
                <p>{quote}</p>
            </div> */}
            <div className='flex flex-wrap gap-4 mt-4'>
                {icons.map(({ icon: Icon, name }, index) => (
                    <Tooltip
                        key={index}
                        content={name}
                        shadow='sm'
                        closeDelay={0}
                        isOpen={openTooltips[index]}
                    >
                        <div
                            className='text-default-500 hover:text-foreground duration-150'
                            onMouseEnter={() => handleTooltip(index, true)}
                            onMouseLeave={() => handleTooltip(index, false)}
                            onClick={() => handleTooltip(index, !openTooltips[index])}
                        >
                            <Icon className='size-8 md:size-10' />
                        </div>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
};
const Skill = () => {
    const { t } = useTranslation()
    return (
        <div className='px-4 py-8 flex flex-col gap-32 min-h-screen' id='expertise'>
            <SkillSection
                title={t("expertise.development.title")}
                icon={RxCode}
                quote={t("expertise.development.quote")}
                icons={skillIcons}
            />
            <SkillSection
                title={t("expertise.design.title")}
                icon={RxCrop}
                quote={t("expertise.design.quote")}
                icons={designIcons}
                isReversed
            />
            <SkillSection
                title={t("expertise.product.title")}
                icon={RxLayers}
                quote={t("expertise.product.quote")}
                icons={productIcons}
            />
            <SkillSection
                title={t("expertise.music.title")}
                icon={VscMusic}
                quote={t("expertise.music.quote")}
                icons={musicIcons}
                isReversed
            />
        </div>
    )
}

export default Skill
