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
            stiffness: 6,
            damping: 3,
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
  "AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox ";

export default AIBox;
