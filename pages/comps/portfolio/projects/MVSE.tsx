import React from "react";
import MVSEIcon from "../icons/MVSEicon";
import { motion } from "framer-motion";

const MVSE = () => {
  return <div>MVSE</div>;
};

const StyledText = ({ text }) => (
  <p>
    <span className="font-medium text-2xl  ">{text[0]}</span>
    {text.slice(1)}
  </p>
);

export const MVSECover = () => {
  return (
    <div className=" w-full h-full items-center justify-center flex ">

      <motion.div
        className="flex flex-col items-start text-lg w-full h-full p-8"
        initial={{ y: 0 }}
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {/* <NextImage
              className='hidden md:flex mb-8'
              src={require("@/pages/comps/asset/tb-logov3.svg")}
              alt="logo"
            /> */}
        <MVSEIcon className=" w-full h-full" />
      </motion.div>

    </div>
  );
};

export const MVSEContent = () => {
  return <div>MVSE</div>;
};

export const MVSEdesc =
  "As a government-backed intelligent video analytics solution, MVSE(Multi-modal Video Search Engine) provides the Hong Kong Police Force with advanced multimodal search capabilities. Officers can combine queries like 'police uniform + vehicle image' to instantly search through millions of surveillance hours, retrieving all target appearances with timestamped evidence. The system's bilingual (Chinese/English) interface is optimized for police workflows, currently operational at HK Police Headquarters' smart security platform.作为政府重点支持的智能视频分析项目，MVSE(多模态视频搜索引擎)为香港警务处定制开发了新一代多模态检索系统。该系统支持通过'警服特征+车辆图片'等组合条件，对百万小时监控视频进行秒级检索，精准定位目标人物的所有出现画面（带时间戳截图）。系统完全适配警务中英文双语操作环境，目前已正式部署于香港警察总部智能安防平台。";

export default MVSE;
