import { useEffect, useState } from 'react';
import ArcCircle from './ArcCircle';
import NextImage from 'next/image';
import { Button } from '@heroui/button';
import { useTheme } from 'next-themes';
import { RxMoon, RxSun, RxChevronDown, RxStar } from "react-icons/rx";
import { PiMoonStarsLight, PiSunLight } from "react-icons/pi";
import { motion } from "framer-motion";
export default function Home() {
  const [circles, setCircles] = useState<Array<any>>([]);
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  // 辅助函数：生成随机值
  const getRandomValue = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // 辅助函数：生成4或5个随机rotation (只在初始化时调用)
  const generateRotations = (count: number) => {
    const baseRotations = Array(count).fill(0)
      .map((_, i) => (360 / count) * i);
    return baseRotations.map(base =>
      base + getRandomValue(-15, 15)
    );
  };

  // 辅助函数：生成4或5个随机value
  const generateValues = (count: number) => {
    return Array(count).fill(0).map(() =>
      getRandomValue(15, 22)
    );
  };

  // 生成初始圆环配置
  const generateInitialCircles = () => {
    return Array(12).fill(0).map((_, index) => {
      const count = Math.random() > 0.5 ? 4 : 5;
      return {
        scale: 3.5 - (index * 0.28),
        rotations: generateRotations(count), // 初始化时生成rotations
        values: generateValues(count),
        color: index % 2 === 0 ? 'danger' : 'default',
        className: index % 2 === 0 ? "animate-spin-pulse" : ""
      };
    });
  };

  // 更新values但保持其他属性不变
  const updateCircleValues = () => {
    setCircles(prevCircles =>
      prevCircles.map(circle => ({
        ...circle,
        values: generateValues(circle.rotations.length) // 只更新values
      }))
    );
  };

// 修改：设置所有值为0
const setAllValuesToZero = () => {
  setCircles(prevCircles =>
    prevCircles.map(circle => ({
      ...circle,
      values: Array(circle.rotations.length).fill(0)
    }))
  );
};

// 修改：添加动画序列控制
const animateThemeChange = async () => {
  // 1. 先将所有值设为0
  setAllValuesToZero();
  
  // 2. 等待一小段时间
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // 3. 生成新的随机值
  updateCircleValues();
};

  useEffect(() => {
    setMounted(true);
  }, []);

  const ThemeToggle = () => {
    if (!mounted) return null;

    const handleThemeChange = () => {
      setTheme(theme === "dark" ? "light" : "dark");
      animateThemeChange();
    };

    return theme === "light" ? (
      <Button
        color='default'
        className='bg-default-100'
        onPress={handleThemeChange}
        startContent={<PiMoonStarsLight className='text-xl' />}
      >
        星夜
      </Button>
    ) : (
      <Button
        onPress={handleThemeChange}
        startContent={<PiSunLight className='text-xl' />}
      >
        白昼
      </Button>
    );
  };

  useEffect(() => {
    setCircles(generateInitialCircles());

    const interval = setInterval(() => {
      updateCircleValues();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <section
      className="flex flex-col items-center justify-center w-full h-[100dvh] -mt-20 gap-4  md:py-4 relative overflow-hidden"
    >
      <div className="inline-block max-w-lg text-center justify-center absolute z-0  ">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${circle.className}`}
          >
            <ArcCircle
              scale={circle.scale}
              rotations={circle.rotations}
              values={circle.values}
              color={circle.color}
            />
          </div>
        ))}
      </div>

      <div className='w-full h-full flex flex-col-reverse sm:flex-row justify-center items-center md:gap-16 z-10'>
        <div className=' flex flex-col gap-4 md:gap-8 items-center md:items-end '>

            <div className={`flex flex-col text-5xl md:text-6xl lg:text-7xl items-center md:items-end  full overflow-hidden ${theme === "dark" ? "backdrop-blur-sm" : "bg-background"}`}>
              <motion.h2
                className='font-medium text-primary tracking-wide translate-x-full'
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.1
                }}
              >
                TWINBLADES
              </motion.h2>
              <motion.h2
                className='tracking-widest font-light translate-x-full'
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.3
                }}
              >
                DEVELOP
              </motion.h2>
            </div>

        
          <div className=' flex flex-row gap-4 md:gap-8 '>
            <ThemeToggle />

            <Button color='primary' startContent={<RxChevronDown className='text-xl' />}>成就</Button>
          </div>
        </div>
        <div className=' max-w-72 md:max-w-[450px]'>
          <NextImage
            className=' hidden md:flex mb-8'
            src={require("@/pages/comps/asset/tb-logov3.svg")}
            alt="logo"

          />
        </div>
      </div>


    </section>
  );
}
