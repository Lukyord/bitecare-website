"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

type HeaderProps = {
  children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
  const navbarRef = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const showNav = gsap
      .fromTo(
        navbarRef.current,
        { y: "-110%", duration: 0.2, transition: "ease-out" },
        { y: "0%", duration: 0.2, transition: "ease-out" }
      )
      .progress(1)

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showNav.play() : showNav.reverse()
      },
    })
  }, [])

  return (
    <header
      ref={navbarRef}
      className={`
              fixed z-50 flex  w-full
              flex-col items-center
              transition-all duration-300
            `}
    >
      {children}
    </header>
  )
}

export default Header
