import { Divider, Spacer } from '@heroui/react';
import React from 'react'
import { PiBriefcase, PiBackpack, PiGraduationCap, PiSuitcaseSimple } from "react-icons/pi";
import { LuDot } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from '@heroui/react';
import { useTranslation } from 'next-export-i18n';
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
            className='flex gap-2 items-start '
        >
            <LuDot className='text-default-500 flex-shrink-0 translate-y-1' />
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
            <a target="_blank" rel="noopener noreferrer" href={href} className='md:text-center text-xl md:text-base relative group   w-fit cursor-pointer duration-300 ease-in-out transition-all'>
                <span >{institution}</span>
                <Divider className=' bg-primary-500/70 w-0 group-hover:w-full duration-300 ease-in-out ' />
            </a>
            <span className=' flex-1 md:text-end text-sm font-normal text-default-600 md:justify-end flex items-center gap-2'>
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
    const { t } = useTranslation();

    return (
        <div className='w-full flex flex-col py-8 px-4' id='experience'>
            <div className='flex flex-col w-full'>
                <SectionTitle
                    icon={PiGraduationCap}
                    text={t("experience.education")}
                />

                <ExpCard
                    dateRange="2019.09 - 2023.06"
                    institution={t("experience.institutions.uoft")}
                    location={t("experience.locations.toronto")}
                    degree={t("experience.degrees.undergraduate")}
                    details={t("experience.university.details")}
                    href="https://www.utoronto.ca/"
                />
                <Spacer className='my-4' />

                <ExpCard
                    dateRange="2016.09 - 2019.05"
                    institution={t("experience.institutions.winston_churchill")}
                    location={t("experience.locations.vancouver")}
                    degree={t("experience.degrees.high_school")}
                    details={t("experience.highschool.details")}
                    href="https://www.vsb.bc.ca/sir-winston-churchill"
                />
                <Divider className='my-8 invisible' />
                <SectionTitle
                    icon={PiSuitcaseSimple}
                    text={t("experience.work")}
                />
                <ExpCard
                    dateRange="2023.10 - 2025.07"
                    institution={t("experience.institutions.visionmatrix")}
                    location={t("experience.locations.hong_kong")}
                    degree={t("experience.degrees.frontend_ui")}
                    details={t("experience.job2.details")}
                    href="https://visionmatrix.ai/"
                />

                <Spacer className='my-4' />

                <ExpCard
                    dateRange="2023.08 - 2023.10"
                    institution={t("experience.institutions.szmg")}
                    location={t("experience.locations.shenzhen")}
                    degree={t("experience.degrees.internship")}
                    details={t("experience.job1.details")}
                    href="https://www.szmg.com.cn/"
                />
            </div>
        </div>
    )
}

export default Experience
