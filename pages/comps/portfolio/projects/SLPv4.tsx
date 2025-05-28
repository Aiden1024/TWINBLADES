import React from 'react'
import { motion, useAnimation } from "framer-motion";
const SLPv4 = () => {
    return (
        <div>
            SLPv4
        </div>
    )
}




import { useEffect } from "react";

export const SLPv4Cover = () => {
  const controls = useAnimation();

  // 动画配置
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // 每行间隔0.3秒
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.3,
        staggerDirection: -1, // 反向消失
      },
    },
  };

  const item = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      x: 100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  useEffect(() => {
    const animateSequence = async () => {
      while (true) { // 无限循环
        await controls.start("show"); // 播放出现动画
        await new Promise(resolve => setTimeout(resolve, 2000)); // 显示2秒
        await controls.start("exit"); // 播放消失动画
        await new Promise(resolve => setTimeout(resolve, 100)); // 消失后等待0.5秒
      }
    };
    
    animateSequence();
    
    return () => {
      // 组件卸载时清理动画
      controls.stop();
    };
  }, [controls]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="w-3/4 flex flex-col items-start text-start"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 className="text-4xl font-medium" variants={item}>
          Self-Learning
        </motion.h2>
        <motion.h2 className="text-4xl font-medium" variants={item}>
          Platform
        </motion.h2>
        <motion.h2 className="font-medium text-xl" variants={item}>
          version 4
        </motion.h2>
        <motion.h2 className="tracking-widest text-small font-light" variants={item}>
          UPLOAD. LABEL. TRAIN.
        </motion.h2>
      </motion.div>
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
