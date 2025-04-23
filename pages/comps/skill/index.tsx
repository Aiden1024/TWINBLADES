import React from 'react'
import { Button, Divider, Tooltip } from '@heroui/react'
import { SectionTitle } from '../exp';
import { RxCode, RxMix, RxDimensions, RxCrop  } from "react-icons/rx";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiPython, SiGnubash, SiCapacitor, SiGithub, SiJira, SiGraphql } from "react-icons/si";
import { SiFigma, SiMaterialdesign, SiNextui, SiTailwindcss, SiAdobephotoshop } from "react-icons/si";
import { MdOutlineVideoSettings } from "react-icons/md";
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

// SkillSection 组件
interface SkillSectionProps {
    title: string;
    icon: IconType;
    quote: string;
    icons: Array<{ icon: IconType; name: string }>;
    isReversed?: boolean;
}

const SkillSection = ({ title, icon, quote, icons, isReversed = false }: SkillSectionProps) => {
    return (
        <div className={`flex flex-col gap-2 ${isReversed ? 'items-end text-end' : ''}`}>
            <SectionTitle
                icon={icon}
                text={title}
            />
            <div className={`flex gap-2 items-center mt-2 text-default-700 ${isReversed ? 'flex-row-reverse' : ''}`}>
                <div className='bg-primary-500 h-4 w-0.5' />
                <p>{quote}</p>
            </div>
            <div className='flex flex-wrap gap-4 mt-2'>
                {icons.map(({ icon: Icon, name }, index) => (
                    <Tooltip
                        key={index}
                        content={name}
                        color='primary'
                        shadow='sm'
                        closeDelay={0}
                    >
                        <div className='text-default-500 hover:text-foreground duration-150'>
                            <Icon className='size-5' />
                        </div>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
};
const Skill = () => {
    return (
        <div className='p-4 flex flex-col gap-8'>
            <SkillSection
                title="开发"
                icon={RxCode}
                quote="如果你为错过太阳而流泪，你也将会错过群星"
                icons={skillIcons}
            />
            <SkillSection
                title="设计"
                icon={RxCrop}
                quote="构想. 规划. 创造"
                icons={designIcons}
                isReversed
            />
            <SkillSection
                title="产品"
                icon={RxCode}
                quote="如果你为错过太阳而流泪，你也将会错过群星"
                icons={skillIcons}
            />
            <SkillSection
                title="音乐"
                icon={RxCode}
                quote="如果你为错过太阳而流泪，你也将会错过群星"
                icons={skillIcons}
                isReversed
            />
        </div>
    )
}

export default Skill
