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

export const SLPv4desc = "Self-Learning Platform v4 (SLPv4) is a no-code AI training platform that makes building custom models for object detection, facial recognition, and movement analysis effortless. With its guided step-by-step interface, users can quickly upload data, select pre-configured templates, and start training models - all within minutes. The platform supports multiple languages and enables seamless team collaboration, putting advanced AI capabilities within everyone's reach. 自学习平台v4 (SLPv4) 是一款无需编程的AI训练平台，可轻松构建物体识别、人脸检测和动作分析模型。通过其引导式分步界面，用户只需上传数据、选择预设模板，即可在几分钟内完成模型训练。平台支持多语言操作和团队协作功能，让人工智能技术触手可及。"

export default SLPv4
