export default function RotatingCircularSwiperButtonText() {
  return (
    <div className="relative h-[20vw] max-h-[200px] w-[20vw] max-w-[200px] font-bold text-white lg:h-[10vw] lg:w-[10vw]">
      <svg viewBox="0 0 100 100" className="animate-full-rotate">
        <path
          id="textPath"
          d="M 35,0 A 35,35 0 0 1 -35,0 A 35,35 0 0 1 35,0"
          transform="translate(50,50)"
          fill="none"
          strokeWidth="0"
        ></path>
        <g fontSize="16.7px">
          <text fill="white">
            <textPath
              className="coloring"
              xlinkHref="#textPath"
              startOffset="0%"
            >
              Click me to see more products • BiteCare •
            </textPath>
          </text>
        </g>
      </svg>
      <p className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-paragraph sm:text-h3">
        🐶
      </p>
    </div>
  )
}
