import React from 'react'
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Navigation from './Navbar/Navigation'
import Auth from "./Navbar/Auth"



export default function Navbar() {



  const timeline = gsap.timeline({
    repeat: false,
    defaults: { duration: 1, ease: "easeInOut" }
  })

  const r1 = useRef()

  useEffect(() => {

    timeline.from(r1.current, { y: "-100%", }).to(r1.current, { y: "0%" })

  })
  return (
    <nav ref={r1} className="h-[3.75rem] flex items-center justify-between px-8 top-0 w-full z-50">
      <Navigation/>
      <Auth/>
    </nav>
  )
}
