import { useEffect, useState } from 'react';
import ArcCircle from './components/ArcCircle';

export default function DocsPage() {
  const [circles, setCircles] = useState<Array<any>>([]);

  // 辅助函数：生成随机值
  const getRandomValue = (min: number, max: number) => 
    Math.floor(Math.random() * (max - min + 1)) + min;

  // 辅助函数：生成4或5个随机rotation
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

  // 生成圆环配置的函数
  const generateCircles = () => {
    return Array(10).fill(0).map((_, index) => {  // 改为20个
      const count = Math.random() > 0.5 ? 4 : 5;
      return {
        // 起始scale更大，递减值也更大
        scale: 3.0 - (index * 0.28),  // 从6.0开始，每次减少0.28
        rotations: generateRotations(count),
        values: generateValues(count),
        color: index % 2 === 0 ? 'danger' : 'default',
        className: index % 2 === 0 ? "animate-spin-pulse" : "" // 动态生成动画时间

      };
    });
  };

  // 只在客户端生成随机值
  useEffect(() => {
    setCircles(generateCircles());
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center relative ">
        {circles.map((circle, index) => (
          <div 
            key={index}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${circle.className} `}
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
