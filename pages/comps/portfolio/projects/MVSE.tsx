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
  "MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE ";

export default MVSE;
