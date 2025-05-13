import React, { useEffect } from 'react'
import { Button } from '@heroui/button'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const bannerList = [
  {
    id: 1,
    title: "大 道 至 简",
    role: "UI/UX 设计理念"
  },
  {
    id: 2,
    title: "极 效 致 用",
    role: "前端开发理念"
  },
  {
    id: 3,
    title: "构 简 驭 繁",
    role: "产品设计理念"
  },
  {
    id: 4,
    title: "众 水 之 诗 ",
    role: "音乐演奏理念"
  }
]    


const About = () => {
    const [banNum, setBanNum] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setBanNum(prev => prev === bannerList.length ? 1 : prev + 1)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
<div className='w-full flex flex-col items-center h-[100dvh]  py-16 px-2' id='philosophy'>
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
                    className={`w-1 h-1 bg-default rounded-full cursor-pointer  p-0 flex-shrink-0 duration-500 ease-in-out ${
                        banNum === item.id ? 'w-4 bg-primary  ' : ''
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
