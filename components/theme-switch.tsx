import { FC, useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { useTheme } from "next-themes";
import { PiMoonStars, PiSun} from "react-icons/pi";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-6 h-6" />;

  return theme === "light" ? (
    <Button
      variant="light"
      radius="full"
      isIconOnly
      className={`${className}`}
      onPress={() => setTheme('dark')}
    >
      <PiMoonStars className='text-xl' />
    </Button>
  ) : (
    <Button
      variant="light"
      radius="full"
      isIconOnly
      onPress={() => setTheme('light')}
      className={`group ${className}`}

    >
      <PiSun className='text-xl' />
    </Button>
  );
};
