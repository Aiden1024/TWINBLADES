import { Divider } from '@heroui/react';
import React from 'react'
import { PiBriefcase, PiBackpack, PiGraduationCap, PiSuitcaseSimple } from "react-icons/pi";
import { LuDot } from 'react-icons/lu';
// 标题组件
const SectionTitle = ({ icon: Icon, text }: { icon: React.ElementType, text: string }) => (
    <h2 className='text-2xl font-semibold flex gap-2 items-center'>
        <span><Icon /></span>
        {text}
    </h2>
);

// 教育经历卡片组件
const ExpCard = ({
    dateRange,
    institution,
    location,
    degree,
    details
}: {
    dateRange: string,
    institution: string,
    location: string,
    degree: string,
    details?: string[]
}) => (
    <>
        <div className='mt-8 mb-2 w-full flex flex-col md:flex-row md:justify-between md:items-center md:*:w-1/3 font-medium'>
            <span className=' w-full flex justify-start items-end'>{dateRange} <p className=' text-xs text-default-500 ml-2'>{location}</p> </span>
            <span className='md:text-center text-xl md:text-base'>{institution}</span>
            <span className='md:text-end text-sm text-default-400'>{degree}</span>
        </div>
        {details && details.map((detail, index) => (
            <div className=' flex gap-2 items-center'>
                <LuDot className=' text-default-500'/>
                <p key={index}>{detail}</p>
            </div>
        ))}
    </>
);

const Experience = () => {
    const universityDetails = [
        "加拿大1位， 全球21位 - 2023",
        "3.54/4.0 GPA",
        "计算机科学 & 工商管理学 - 专业淘汰率(75% +)",
        "荣誉理学士 - 高度荣誉"
    ];

    const highSchoolDetails = [
        "曾代表学校参加不列颠哥伦比亚大学物理奥运大赛"
    ];

    const job1Details = [
        "参与消费级 AI 应的功能解析与测试"
    ];

    const job2Details = [
        "精通 React/Next.js 与 Tailwind CSS",
        "完成 5+ POC 与 4 个商业项目落地",
        "负责政府、企业、消费级 AI 应用开发",
        "实现拖拽、连线等复杂交互功能",
        "具备产品设计与端到端开发能力"
    ];

    return (
        <div className='w-full flex flex-col py-8 px-2'>
            <div className='flex flex-col w-full'>
                <SectionTitle
                    icon={PiGraduationCap}
                    text="教育背景"
                />

                <ExpCard
                    dateRange="2019.09 - 2023.05"
                    institution="多伦多大学"
                    location="加拿大，多伦多"
                    degree="本科"
                    details={universityDetails}
                />

                <ExpCard
                    dateRange="2016.09 - 2019.05"
                    institution="温斯顿丘吉尔"
                    location="加拿大，温哥华"
                    degree="高中"
                    details={highSchoolDetails}
                />
                <Divider className=' my-8 invisible' />
                <SectionTitle
                    icon={PiSuitcaseSimple}
                    text="工作经历"
                />
                <ExpCard
                    dateRange="2023.10 - 2025.07"
                    institution="微马视觉智能科技有限公司"
                    location="中国，香港"
                    degree="前端开发/UI UX设计/产品设计"
                    details={job2Details}
                />
                <ExpCard
                    dateRange="2023.08 - 2023.10"
                    institution="深圳广播电影电视集团华夏城视"
                    location="中国，深圳"
                    degree="软件开发实习"
                    details={job1Details}

                />
            </div>
        </div>
    )
}

export default Experience
