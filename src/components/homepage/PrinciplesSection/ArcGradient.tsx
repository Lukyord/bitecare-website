import React from "react"

type ArcGradientProps = {
  vwSize: string // in vw
  radius: number // in vw
  vwHeight: string // in vw
  direction: "up" | "down"
}

export default function ArcGradient({
  vwSize,
  radius,
  vwHeight,
  direction,
}: ArcGradientProps) {
  const vwRadius = radius + "vw"
  const centerY = direction === "up" ? radius : radius - 171
  const vwCenterY = centerY + "vw"

  return (
    <div className="relative h-[30vw] w-screen">
      <svg
        height={vwHeight}
        width={vwSize}
        xmlns="http://www.w3.org/2000/svg"
        className="
                absolute left-1/2 top-1/2 
                translate-x-[-50%] 
                translate-y-[-50%]
              "
      >
        <defs>
          <radialGradient id="linearGradientFromCenter">
            <stop
              offset="92.5%"
              style={{
                stopColor: "rgba(157, 214, 125, 1)",
                stopOpacity: 1,
              }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#9DD67D", stopOpacity: 0.15 }}
            />
          </radialGradient>
        </defs>
        <circle
          cx="100vw"
          cy={vwCenterY}
          r={vwRadius}
          fill="url(#linearGradientFromCenter)"
        />
      </svg>
    </div>
  )
}
