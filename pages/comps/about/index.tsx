import React, { useEffect } from 'react'
import { Button } from '@heroui/button'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from "next-export-i18n";



const About = () => {
    const [banNum, setBanNum] = useState(1)
    const { t } = useTranslation()
    const bannerList = [
        {
            id: 1,
            title: t("banner.1.title"),
            role: t("banner.1.role")
        },
        {
            id: 2,
            title: t("banner.2.title"),
            role: t("banner.2.role")
        },
        {
            id: 3,
            title: t("banner.3.title"),
            role: t("banner.3.role")
        },
        {
            id: 4,
            title: t("banner.4.title"),
            role: t("banner.4.role")
        }
    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setBanNum(prev => prev === bannerList.length ? 1 : prev + 1)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='w-full flex flex-col items-center h-[100vh]  py-16 px-2' id='philosophy'>
            <div className='flex-1' /> {/* 顶部空白占位 */}

            <AnimatePresence mode="wait">
                <motion.h2
                    key={banNum + "title"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    className='text-5xl'
                >
                    {bannerList[banNum - 1].title}
                </motion.h2>
            </AnimatePresence>
            <AnimatePresence mode="wait">
                <motion.p
                    key={banNum + "role"}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.2
                    }}
                    className=' mt-8 text-default-500 tracking-wide'
                >
                    {bannerList[banNum - 1].role}
                </motion.p>
            </AnimatePresence>

            <div className='flex-1' /> {/* 中间空白占位 */}

            <div className='flex flex-col gap-4'>
                {/* <AnimatePresence mode="wait">
            <motion.p
                key={banNum + "role"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.2
                }}
                className=' text-default-500 tracking-wide'
            >
                {bannerList[banNum - 1].role}
            </motion.p>
        </AnimatePresence> */}
                <div className='flex flex-row gap-4 mt-8'>
                    {bannerList.map((item) => (
                        <div
                            className={`w-1 h-1 bg-default rounded-full cursor-pointer  p-0 flex-shrink-0 duration-500 ease-in-out ${banNum === item.id ? 'w-4 bg-primary  ' : ''
                                }`}
                            key={item.id}
                            color={banNum === item.id ? 'primary' : 'default'}
                            onClick={() => setBanNum(item.id)}
                        >

                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default About
