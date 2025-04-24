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
import Ableton from './icons/Ableton';
import CapCut from './icons/CapCut';
import { IconType } from 'react-icons';
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
        <div className={`flex flex-col gap-2 ${isReversed ? 'items-end text-end' : ''}`}>
            <div className=' flex flex-col w-fit'>
                <SectionTitle
                    icon={icon}
                    text={title}
                    className=' mb-0 text-4xl md:text-5xl !font-normal md:mb-0.5'
                />
            {/* <Divider className=' bg-primary-500 '/> */}
            </div>

            <div className={`  md:text-xl flex gap-2 items-stretch mt-2 text-default-700 ${isReversed ? 'flex-row-reverse' : ''}`}>
                <Divider orientation='vertical' className='bg-primary-500 h-auto my-1 w-0.5' />
                <p>{quote}</p>
            </div>
            <div className='flex flex-wrap gap-4 mt-2'>
            {icons.map(({ icon: Icon, name }, index) => (
          <Tooltip
            key={index}
            content={name}
            shadow='sm'
            closeDelay={0}
            isOpen={openTooltips[index]}
          >
            <div 
              className='text-default-400 hover:text-foreground duration-150'
              onMouseEnter={() => handleTooltip(index, true)}
              onMouseLeave={() => handleTooltip(index, false)}
              onClick={() => handleTooltip(index, !openTooltips[index])}
            >
              <Icon className='size-6 md:size-7' />
            </div>
          </Tooltip>
        ))}
            </div>
        </div>
    );
};
const Skill = () => {
    return (
        <div className='px-4 py-16 flex flex-col gap-16'>
            <SkillSection
                title="开发"
                icon={RxCode}
                quote="如果你为错过太阳而流泪，你也将会错过群星"
                icons={skillIcons}
            />
            <SkillSection
                title="设计"
                icon={RxCrop}
                quote="设计是可视化的智慧"
                icons={designIcons}
                isReversed
            />
            <SkillSection
                title="产品"
                icon={RxLayers}
                // quote="Design is intelligence made visible" (设计是可视化的智慧)"
                quote='构想. 规划. 创造'
                icons={productIcons}
            />
            <SkillSection
                title="音乐"
                icon={TfiMusic}
                quote="仿若无因飘落的轻雨"
                icons={musicIcons}
                isReversed
            />
        </div>
    )
}

export default Skill
