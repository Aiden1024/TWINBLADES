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
    title: "轻 量 共 生",
    role: "产品设计理念"
  },
  {
    id: 4,
    title: "木 匣 吟 风",
    role: "小提琴演奏理念"
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
        <div className='w-full flex flex-col items-center py-16 gap-8'>
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
                    className='text-3xl md:text-5xl'
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
                    className='self-end'
                >
                    {bannerList[banNum - 1].role}
                </motion.p>
            </AnimatePresence>

            <div className='flex flex-row gap-8'>
                {bannerList.map((item) => (
                    <Button
                        className={`w-2 h-2 min-w-0 p-0 flex-shrink-0 transition-all duration-300 ${
                            banNum === item.id ? 'scale-110' : ''
                        }`}
                        isIconOnly
                        radius='full'
                        size='sm'
                        key={item.id}
                        color={banNum === item.id ? 'primary' : 'default'}
                        onPress={() => setBanNum(item.id)}
                    >
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default About
