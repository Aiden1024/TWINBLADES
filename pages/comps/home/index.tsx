import { useEffect, useState } from 'react';
import ArcCircle from './ArcCircle';

export default function Home() {
  const [circles, setCircles] = useState<Array<any>>([]);
  
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
    return Array(10).fill(0).map((_, index) => {
      const count = Math.random() > 0.5 ? 4 : 5;
      return {
        scale: 3.0 - (index * 0.28),
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

  return (
    <section 
      className="flex flex-col items-center justify-center w-full h-screen gap-4 py-8 md:py-10"
    >
      <div className="inline-block max-w-lg text-center justify-center relative">
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
    </section>
  );
}
