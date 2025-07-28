import React from "react";
import PiIcon from "../icons/Pi";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import ImageGallery from "../ImageGallary";
const HKITCRP = () => {
  return <div>RP</div>;
};

export const RPCover = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className=" w-full h-full items-center justify-center flex p-4 text-start ">
      <div className="flex flex-row gap-4 ">
        <PiIcon
          className={`size-12 ${theme === "dark" ? "fill-[#9060BE]" : "fill-[#603294]"}`}
        />
        <div className="flex flex-col items-start">

          <h2 className="text-2xl tracking-widest">創 新 科 技 署</h2>
          {/* Marquee 容器 - 添加固定宽度和高度 */}
          <div className=" w-40 h-6 overflow-hidden">
            {" "}
            {/* 控制宽度和高度 */}
            <div className="flex whitespace-nowrap">
              <motion.div
                className="flex"
                animate={{
                  x: ["0%", "-100%"],
                }}
                transition={{
                  duration: 50, // 调快了一点
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-xs pr-8">
                    {" "}
                    {/* 改用span更语义化 */}
                    Innovation and Technology Commission Research Talent Hub for Incubatees and I&T Tenants of the HKSTPC and the Cyberport (RTH-SPC)
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RPContent = () => {
  const router = useRouter();
  const basePath = router.basePath || '';

  const images = [
    `${basePath}/portfolio/rp/1.png`,

  ];
  return (
    <ImageGallery
      images={images}
    />
  );
};

export const RPdesc =
  "The RTH-SPC is a government-funded program launched in July 2020 to support incubatees and I&T tenants of Hong Kong Science Park (HKSTPC) and Cyberport in hiring research talent for R&D projects. It merges two former schemes (Researcher Programme and Postdoctoral Hub) under the Innovation and Technology Fund (ITF) 研究人才库（RTH-SPC）是香港特别行政区政府于2020年7月推出的专项计划，旨在为香港科技园公司（HKSTPC）及香港数码港管理有限公司（Cyberport）的培育公司和创科租户提供资助，帮助其聘用研究人才进行研发工作。该计划整合了原有的「研究员计划」和「博士专才库」，进一步优化了人才支持机制";

export default HKITCRP;
