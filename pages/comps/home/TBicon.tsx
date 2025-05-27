const TbLogo = ({ 
  primaryColorClass = "fill-primary-500", 
  defaultColorClass = "fill-[#3f3f46]",
  className = "" 
}) => {
  return (
    <svg 
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 733.6 961.15"
    >
      <path 
        className={primaryColorClass}
        d="M299.85,552.8,1033.45,99C868,250.6,716.53,391.45,621.57,488.53Z" 
        transform="translate(-299.85 -98.99)"
      />
      <polygon 
        className={defaultColorClass}
        points="225.61 408.63 321.73 389.55 426.53 286.81 390.56 286.78 225.61 408.63"
      />
      <polygon 
        className={`${primaryColorClass} stroke-primary-500`}
        strokeMiterlimit="10"
        strokeWidth="2"
        points="286.36 429.99 97.71 471.58 89.7 476.86 279.15 435.01 286.36 429.99"
      />
      <path 
        className={defaultColorClass}
        d="M523.59,636.39s130.86-70.48,206.73-106.7l168.33-37.36s-176.71,60.47-215.3,85.61c-47.08,25.84-102.41,65.1-103.53,69.65Z" 
        transform="translate(-299.85 -98.99)"
      />
      <path 
        className={primaryColorClass}
        d="M729.67,530,382.11,607.53l142.38,28.38C536.09,629.67,657.39,564.55,729.67,530Z" 
        transform="translate(-299.85 -98.99)"
      />
      <polygon 
        className={primaryColorClass}
        points="86.03 600.8 297.35 961.15 257.34 742.12 86.03 600.8"
      />
    </svg>
  );
};

export default TbLogo;
