import { Divider } from "@heroui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
const TBTemplate = () => {
  return <div>TBTemplate</div>;
};

export const TBTPCover = () => {
  const letters = ["T", "E", "M", "P", "L", "A", "T", "E"];
const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % letters.length);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [letters.length]);
  return (
    <div className="w-full h-full flex justify-center">
      {" "}
      {/* 添加 flex 和 justify-center */}
      <div className="flex h-full flex-col w-fit justify-center items-stretch text-3xl font-medium">
  <h2 className='tracking-widest inline-block'>TWIN<span className=''>B</span>LADES</h2>
        <div className='flex flex-row justify-between w-auto font-light text-xl text-primary'>
          {letters.map((letter, index) => (
            <span 
              key={index} 
              className={`${index === activeIndex ? 'font-bold' : 'font-light scale-100'} duration-200 ease-in-out`}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TBTPContent = () => {
  return <div>TBTemplate</div>;
};

export const TBTPdesc =
  "TwinBlades Template 是一个基于 Next.js 和 Tailwind CSS 的前端模板项目，集成了日常开发中最常用的基础功能组件和工具。内置国际化（i18n）配置支持多语言切换，封装常用的数据请求 Hook 简化API调用，集成键盘事件监听支持快捷键操作，并包含可复用的弹窗提示组件和全局状态管理的 Provider 模板，帮助开发者快速搭建交互友好的用户界面。";

export default TBTemplate;
