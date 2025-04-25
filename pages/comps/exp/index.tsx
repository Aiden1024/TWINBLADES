import { Divider, Spacer } from '@heroui/react';
import React from 'react'
import { PiBriefcase, PiBackpack, PiGraduationCap, PiSuitcaseSimple } from "react-icons/pi";
import { LuDot } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from '@heroui/react';
// 标题组件
export const SectionTitle = ({
    icon: Icon,
    text,
    className = ''
}: {
    icon: React.ElementType;
    text: string;
    className?: string;
}) => (
    <h2 className={`text-2xl -mb-4 font-semibold flex gap-2 items-center ${className}`}>
        <span><Icon /></span>
        {text}
    </h2>
)


// 创建动画详情项组件
const AnimatedDetail = ({ detail, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "0px 0px -50px 0px" // 可以调整触发动画的视图范围
    });

    return (
        <motion.div
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{
                duration: 0.3,
                delay: index * 0.1, // 每项延迟 0.1 秒
                ease: "easeOut"
            }}
            className='flex gap-2 items-center'
        >
            <LuDot className='text-default-500' />
            <p>{detail}</p>
        </motion.div>
    );
}
// 教育经历卡片组件
// 修改 ExpCard 组件中的 details 渲染部分
const ExpCard = ({
    dateRange,
    institution,
    location,
    degree,
    details,
    href
}) => (
    <>
        <div className=' mt-6 w-full flex flex-col md:flex-row md:justify-between md:items-center  font-medium'>
            <span className=' flex-1'>{dateRange}</span>
            <a   target="_blank" rel="noopener noreferrer" href={href}  className='md:text-center text-xl md:text-base relative group   w-fit cursor-pointer duration-300 ease-in-out transition-all'>
                <span >{institution}</span>
                <Divider className=' bg-primary-500/70 w-0 group-hover:w-full duration-300 ease-in-out '/>
            </a>
            <span className=' flex-1 md:text-end text-sm font-normal text-default-500 md:justify-end flex items-center gap-2'>
                {degree}
                <Divider orientation='vertical' className='h-3' />
                {location}
            </span>
        </div>
        <div className='w-full flex items-stretch relative'>
            <Divider className='my-4 w-full' />
        </div>
        {details && details.map((detail, index) => (
            <AnimatedDetail key={index} detail={detail} index={index} />
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
        "实现拖拽、连线、绘图、标注等复杂交互功能",
        "具备产品设计与端到端开发能力"
    ];

    return (
        <div className='w-full flex flex-col py-8 px-4 '>
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
                    href="https://www.utoronto.ca/"
                />
                <Spacer className=' my-4 ' />

                <ExpCard
                    dateRange="2016.09 - 2019.05"
                    institution="温斯顿丘吉尔"
                    location="加拿大，温哥华"
                    degree="高中"
                    details={highSchoolDetails}
                    href="https://www.vsb.bc.ca/sir-winston-churchill"
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
                    degree="前端开发 · UI UX设计 · 产品设计"
                    details={job2Details}
                    href="https://visionmatrix.ai/"
                    
                />

                <Spacer className=' my-4 ' />

                <ExpCard
                    dateRange="2023.08 - 2023.10"
                    institution="深圳广播电影电视集团华夏城视"
                    location="中国，深圳"
                    degree="软件开发实习"
                    details={job1Details}
                    href="https://www.szmg.com.cn/"

                />
            </div>
        </div>
    )
}

export default Experience
