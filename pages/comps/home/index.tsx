import { useEffect, useState } from 'react';
import ArcCircle from './ArcCircle';
import NextImage from 'next/image';
import { Button } from '@heroui/button';
import { useTheme } from 'next-themes';
import { RxMoon, RxSun, RxChevronDown, RxStar } from "react-icons/rx";
export default function Home() {
  const [circles, setCircles] = useState<Array<any>>([]);
  const { theme, setTheme } = useTheme()

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

  // 初始化和设置定时器
  useEffect(() => {
    // 初始生成包含rotations的circles
    setCircles(generateInitialCircles());

    // 设置定时器只更新values
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
      className="flex flex-col items-center justify-center w-full h-[100dvh] -mt-20 gap-4 py-8 md:py-10 relative overflow-hidden"
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

      <div className='w-full h-full flex flex-row justify-center items-center gap-16 z-10'>
        <div className=' flex flex-col gap-8 items-end'>
          <div className={`flex flex-col text-7xl items-end ${theme === "dark" ? "backdrop-blur-sm" : "bg-background"}`}>
            <h2 className='font-medium text-primary tracking-wide'>TWINBLADES</h2>
            <h2 className='tracking-widest font-light'>DEVELOP</h2>
          </div>
          <div className=' flex flex-row gap-8 '>
            { theme === "light" && <Button className=' bg-default-300' onPress={() => setTheme("dark")} startContent={<RxStar  className='text-xl'/>}>仰望星辰</Button>}
            { theme === "dark" && <Button onPress={() => setTheme("light")} startContent={<RxSun className='text-xl'/>}>追逐朝阳</Button>}
            <Button color='primary' startContent={<RxChevronDown className='text-xl'/>}>作品成就</Button>
          </div>
        </div>
        <NextImage
          src={require("@/pages/comps/asset/tb-logov3.svg")}
          alt="logo"
          width={450}
          height={450}
        />
      </div>


    </section>
  );
}
