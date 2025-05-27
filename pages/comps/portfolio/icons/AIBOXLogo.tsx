const AIBOXLogo = ({ 
  className = "",
  lightBlueClass = "fill-secondary-300",  // 浅蓝色部分
  blueClass = "fill-secondary-400",       // 中蓝色部分
  darkBlueClass = "fill-secondary-700"    // 深蓝色部分
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={lightBlueClass}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 7.5C33 3.35315 36.3531 0 40.5 0C44.6469 0 48 3.35315 48 7.5V22.5C48 26.6469 44.6469 30 40.5 30C36.3531 30 33 26.6469 33 22.5V7.5Z"
      />
      <path
        className={darkBlueClass}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58.5 21C57.6669 21 57 21.6669 57 22.5V24H58.5C59.3331 24 60 23.3331 60 22.5C60 21.6669 59.3331 21 58.5 21ZM51 22.5C51 18.3531 54.3531 15 58.5 15C62.6469 15 66 18.3531 66 22.5C66 26.6469 62.6469 30 58.5 30H54C52.3431 30 51 28.6569 51 27V22.5Z"
      />
      <path
        className={lightBlueClass}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 43.5C18 39.3531 21.3531 36 25.5 36C29.6469 36 33 39.3531 33 43.5V58.5C33 62.6469 29.6469 66 25.5 66C21.3531 66 18 62.6469 18 58.5V43.5Z"
      />
      <path
        className={darkBlueClass}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 42C6.66685 42 6 42.6669 6 43.5C6 44.3331 6.66685 45 7.5 45C8.33315 45 9 44.3331 9 43.5V42H7.5ZM0 43.5C0 39.3531 3.35315 36 7.5 36H12C13.6569 36 15 37.3431 15 39V43.5C15 47.6469 11.6469 51 7.5 51C3.35315 51 0 47.6469 0 43.5Z"
      />
      <path
        className={blueClass}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 40.5C36 36.3531 39.3531 33 43.5 33H58.5C62.6469 33 66 36.3531 66 40.5C66 44.6469 62.6469 48 58.5 48H43.5C39.3531 48 36 44.6469 36 40.5Z"
      />
      <path
        className={darkBlueClass}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 54C36 52.3431 37.3431 51 39 51H43.5C47.6469 51 51 54.3531 51 58.5C51 62.6469 47.6469 66 43.5 66C39.3531 66 36 62.6469 36 58.5V54ZM42 57V58.5C42 59.3331 42.6669 60 43.5 60C44.3331 60 45 59.3331 45 58.5C45 57.6669 44.3331 57 43.5 57H42Z"
      />
      <path
        className={blueClass}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 25.5C0 21.3531 3.35315 18 7.5 18H22.5C26.6469 18 30 21.3531 30 25.5C30 29.6469 26.6469 33 22.5 33H7.5C3.35315 33 0 29.6469 0 25.5Z"
      />
      <path
        className={darkBlueClass}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 7.5C15 3.35315 18.3531 0 22.5 0C26.6469 0 30 3.35315 30 7.5V12C30 13.6569 28.6569 15 27 15H22.5C18.3531 15 15 11.6469 15 7.5ZM22.5 6C21.6669 6 21 6.66685 21 7.5C21 8.33315 21.6669 9 22.5 9H24V7.5C24 6.66685 23.3331 6 22.5 6Z"
      />
    </svg>
  );
};

export default AIBOXLogo;
