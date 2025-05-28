import React from "react";
import PiIcon from "../icons/Pi";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
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
  return <div>RP</div>;
};

export const RPdesc =
  "SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP ";

export default HKITCRP;
