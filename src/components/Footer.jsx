import React from 'react'
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Footer() {
    const timeline = gsap.timeline({
        repeat: false,
        defaults: { duration: 1, ease: "easeInOut" }
      })
    
      const r2 = useRef()
    
      useEffect(() => {
    
        timeline.from(r2.current, { y: "100%", }).to(r2.current, { y: "0%" })
    
      })

    return (
        <div className='h-24 bg-footer border-t border-white border-opacity-5' ref={r2}>
            Footer
        </div>
    )
}
