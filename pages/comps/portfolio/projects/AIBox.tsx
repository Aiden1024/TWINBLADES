import React from "react";
import AIBOXLogo from "../icons/AIBOXLogo";
import AIBOXname from "../icons/AIBOXnameIcon";
import { motion } from "framer-motion";
const AIBox = () => {
  return <div>AIBox</div>;
};

export const AIBoxCover = () => {
  return (
    <div className=" w-full h-full items-center justify-center flex ">
      <div className=" w-full h-full p-8 gap-4 flex flex-row items-center ">
        <motion.div
          animate={{
            rotate: [0, 90, 90, 180, 180, 270, 270, 360], // 关键帧：旋转并保持
          }}
          transition={{
            type: "spring",
            stiffness: 20,
            damping: 4,
            repeat: Infinity,
            duration: 0.5, // 每次旋转动画持续1秒
            times: [0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1], // 时间分配
            repeatDelay: 2, // 每次循环后延迟3秒
          }}
        >
          <AIBOXLogo className="size-12" />
        </motion.div>
        <AIBOXname />
      </div>
    </div>
  );
};

export const AIBoxContent = () => {
  return <div>AIBox</div>;
};

export const AIBoxdesc =
  "AI BOX v2 is an ONVIF-compatible edge AI device that supports running any custom object detection models (including facial recognition, anomaly detection, hazardous items identification, etc.). Featuring multilingual interface (Chinese/English, etc.) and seamless integration with Self-Learning Platform v4 (SLPv4), it allows users to train custom models on SLPv4 and deploy directly for real-time analysis. All data processing occurs locally to ensure privacy protection.AI BOX v2 是支持ONVIF协议的智能边缘分析盒，可运行任何自定义物体检测模型（包括但不限于人脸识别、异常行为分析、危险物品检测等）。提供完整多语言界面（中/英等），并与自学习平台SLPv4深度整合——用户可在SLPv4训练专属模型后直接部署到AI BOX v2，实现实时智能分析。所有数据处理均在本地完成，确保隐私安全。";

export default AIBox;
