import React from 'react'
import logo from "img/logo.svg"
import Menu from './Sidebar/Menu'
import iconPlus from "../img/icons/plus.svg"
import iconHeart from "../img/icons/heart.svg"
import iconSave from "../img/icons/save.svg"
import PlayList from './Sidebar/PlayList'
import DownloadApp from './Sidebar/DownloadApp'
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Sidebar() {
  const timeline = gsap.timeline({
    repeat: false,
    defaults: { duration: 1, ease: "easeInOut" }
  })

  const r1 = useRef()

  useEffect(() => {

    timeline.from(r1.current, { x: "-100%", }).to(r1.current, { x: "0%" })

  }, [])
  
  return (
    <aside className='w-60 pt-6 flex flex-col bg-black' ref={r1}>
      <div className='mb-7 px-6'>
        <a href="/" >
          <img src={logo} alt="side logo" className='h-10' />
        </a>
      </div>

      <Menu />

      <nav className='mt-6'>
        <a href="/" className='group py-2 px-6 flex items-center text-sm text-link hover:text-white font-semibold gap-4'>
          <span className='group w-6 h-6 flex items-center justify-center bg-link rounded-sm text-black group-hover:bg-white'>
            <img src={iconPlus} alt="" />
          </span>
          Çalma Listesi Oluştur
        </a>

        <a href="/" className='group py-2 px-6 flex items-center text-sm text-link hover:text-white font-semibold gap-4'>
          <span className='w-6 h-6 flex items-center justify-center group-hover:opacity-100 opacity-80 bg-gradient-to-br from-[#330EAA] to-[#829B99] rounded-sm'>
            <img src={iconHeart} alt="" />
          </span>
          Beğenilen Şarkılar
        </a>

        <a href="/" className='group py-2 px-6 flex items-center text-sm text-link hover:text-white font-semibold gap-4'>
          <span className='w-6 h-6 flex items-center justify-center group-hover:opacity-100 opacity-80 bg-[#056852] rounded-sm'>
            <img src={iconSave} alt="" />
          </span>
          Bölümlerin
        </a>

      </nav>

      <PlayList/>
      <DownloadApp/>
    </aside>
  )
}
