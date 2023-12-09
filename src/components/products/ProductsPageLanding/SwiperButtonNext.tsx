"use client"

import { useSwiper } from "swiper/react"

export default function SwiperButtonNext() {
  const swiper = useSwiper()

  return (
    <button
      className="
              absolute left-[55%] top-[10%]
              z-10 flex items-center
              justify-center rounded-full border-[3px] border-black
              bg-bc-primary transition-all
              [filter:drop-shadow(4px_4px_0px_#000)] active:scale-[0.9]
            "
      onClick={() => swiper.slideNext()}
    >
      <div
        className="
                   relative h-[20vw]  
                  w-[20vw] 
                  font-bold text-white 
                  lg:h-[10vw] lg:w-[10vw]
                "
      >
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
        <p
          className="
                  absolute left-1/2 top-1/2 
                  translate-x-[-50%] translate-y-[-50%] 
                  text-h3
                "
        >
          🐶
        </p>
      </div>
    </button>
  )
}
