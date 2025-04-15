// components/ArcCircle.tsx
import React from 'react';
import { CircularProgress } from '@heroui/react';

interface ArcCircleProps {
  rotations?: number[];
  values?: number[];
  scale?: number;
  color?: 'default' | 'danger';  // 添加颜色属性
}

const ArcCircle: React.FC<ArcCircleProps> = ({
  rotations = [0, 100, 200, 270],
  values = [20, 25, 15, 14],
  scale = 1.05,
  color = 'default'  // 默认颜色
}) => {
  // 定义颜色映射
  const colorClasses = {
    default: 'stroke-foreground',
    danger: 'stroke-primary-500'
  };

  return (
    <div 
      className="flex items-center justify-center w-full h-full relative"
      style={{ transform: `scale(${scale})` }}
    >
      {rotations.map((rotation, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            transform: `rotate(${rotation}deg)`
          }}
        >
          <CircularProgress
            classNames={{
              svg: "w-48 h-48",
              track: "stroke-transparent",
              indicator: colorClasses[color]  // 使用颜色类
            }}
            className=''
            strokeWidth={0.15}
            value={values[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default ArcCircle;
