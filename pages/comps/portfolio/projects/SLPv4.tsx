import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from "framer-motion";
const SLPv4 = () => {
    return (
        <div>
            SLPv4
        </div>
    )
}




export const SLPv4Cover = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
      }, 1000); // fadeout 后等待 100ms 再 fadein
    }, 3000); // 2000ms 显示时间 + 100ms 过渡时间

    return () => clearInterval(timer);
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1, // 反向顺序退出
      },
    },
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      },
    },
    exit: {
      x: 20,
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      },
    },
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            className="w-3/4 flex flex-col items-start text-start"
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.h2 
              className="text-4xl font-medium" 
              variants={item}
            >
              Self-Learning
            </motion.h2>
            <motion.h2 
              className="text-4xl font-medium" 
              variants={item}
            >
              Platform
            </motion.h2>
            <motion.h2 
              className="font-medium text-xl" 
              variants={item}
            >
              version 4
            </motion.h2>
            <motion.h2 
              className="tracking-widest text-small font-light" 
              variants={item}
            >
              UPLOAD. LABEL. TRAIN.
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};




export const SLPv4Content = () => {
    return (
        <div>
            SLP
        </div>
    )
}

export const SLPv4desc = "SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP "

export default SLPv4
