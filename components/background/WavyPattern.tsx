const WavyPattern = ({
  color,
  className
} : {
  color?: string
  className?: string
}) => {
  return (
    <svg
      className={
        className
        ? className
        : "absolute bottom-0 w-full h-auto dark:hidden"
      }
      id="wavy"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-300 0 950 270"
    >
      <path
        d="M-314,267 C105,364 400,100 812,279"
        fill={color ? color : "white"}
        stroke={color ? color : "white"}
        strokeWidth="120"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default WavyPattern;
