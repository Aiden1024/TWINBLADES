import { useCallback, useEffect, useMemo, useState } from 'react';
import ArcCircle from './ArcCircle';
import NextImage from 'next/image';
import { Button } from '@heroui/button';
import { useTheme } from 'next-themes';
import { RxMoon, RxSun, RxChevronDown, RxStar } from "react-icons/rx";
import { PiMoonStarsLight, PiSunLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { scroller } from 'react-scroll';
export default function Home() {
  const [circles, setCircles] = useState<Array<any>>([]);
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  // 使用 useMemo 缓存辅助函数
  const getRandomValue = useMemo(() => (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min,
    []);

  // 使用 useMemo 缓存生成rotation的函数
  const generateRotations = useMemo(() => (count: number) => {
    const baseRotations = Array(count).fill(0)
      .map((_, i) => (360 / count) * i);
    return baseRotations.map(base =>
      base + getRandomValue(-15, 15)
    );
  }, [getRandomValue]);

  // 使用 useMemo 缓存生成values的函数
  const generateValues = useMemo(() => (count: number) =>
    Array(count).fill(0).map(() => getRandomValue(15, 22)),
    [getRandomValue]);

  // 使用 useMemo 缓存初始圆环配置生成函数
  const generateInitialCircles = useMemo(() => () => {
    return Array(12).fill(0).map((_, index) => {
      const count = Math.random() > 0.5 ? 4 : 5;
      return {
        scale: 3.5 - (index * 0.28),
        rotations: generateRotations(count),
        values: generateValues(count),
        color: index % 2 === 0 ? 'danger' : 'default',
        className: index % 2 === 0 ? "animate-spin-pulse" : ""
      };
    });
  }, [generateRotations, generateValues]);

  // 使用 useCallback 优化更新函数
  const updateCircleValues = useCallback(() => {
    setCircles(prevCircles =>
      prevCircles.map(circle => ({
        ...circle,
        values: generateValues(circle.rotations.length)
      }))
    );
  }, [generateValues]);

  // 使用 useCallback 优化设置零值函数
  const setAllValuesToZero = useCallback(() => {
    setCircles(prevCircles =>
      prevCircles.map(circle => ({
        ...circle,
        values: Array(circle.rotations.length).fill(0)
      }))
    );
  }, []);

  // 使用 useCallback 优化主题切换动画函数
  const animateThemeChange = useCallback(async () => {
    setAllValuesToZero();
    await new Promise(resolve => setTimeout(resolve, 500));
    updateCircleValues();
  }, [setAllValuesToZero, updateCircleValues]);

  // 改回函数组件形式
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
        深夕映繁星
      </Button>
    ) : (
      <Button
        onPress={handleThemeChange}
        className=' group'
        startContent={<PiSunLight className='text-xl ' />}
      >
        晨光初映时
      </Button>
    );
  };


  // 优化 useEffect
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCircles(generateInitialCircles());

    const interval = setInterval(updateCircleValues, 3000);
    return () => clearInterval(interval);
  }, [generateInitialCircles, updateCircleValues]);

  // 使用 useMemo 优化圆环渲染
  const circleElements = useMemo(() =>
    circles.map((circle, index) => (
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
    )),
    [circles]);

  return (
    <section
      id='home'
      className="flex flex-col items-center justify-center w-full h-[100dvh] -mt-20 gap-4  md:py-4 relative overflow-hidden"
    >
      <div className="inline-block max-w-lg text-center justify-center absolute z-0 ">
        {circleElements}
      </div>

      <div className='w-full h-full flex flex-col-reverse sm:flex-row justify-center items-center md:gap-16 z-10'>
        <div className=' flex flex-col gap-4 md:gap-6 items-center md:items-end '>

          <div className={`flex flex-col text-5xl md:text-6xl lg:text-7xl items-center md:items-end overflow-hidden `}>
            <motion.h2
              className={`font-medium text-primary tracking-wide  ${theme === "dark" ? "backdrop-blur-sm" : "bg-background"} px-2`}
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
              className={`tracking-widest font-light ${theme === "dark" ? "backdrop-blur-sm" : "bg-background"} px-2`}
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

            <Button
              color='primary'
              className='group'
              startContent={
                <RxChevronDown className='text-xl -rotate-90 group-hover:rotate-0 duration-150 ease-in-out' />
              }
              onPress={() => {
                scroller.scrollTo('projects', {
                  duration: 800,
                  smooth: true,
                  offset: -50,
                });
              }}
            >
              成就与作品
            </Button>
          </div>
        </div>
        <div className=' max-w-72 md:max-w-[450px]'>
          <motion.div
            initial={{ y: 0, opacity: 0.9 }}
            animate={{
              y: [-6, 6, -6],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <NextImage
              className='hidden md:flex mb-8'
              src={require("@/pages/comps/asset/tb-logov3.svg")}
              alt="logo"
            />
          </motion.div>


        </div>
      </div>


    </section>
  );
}
