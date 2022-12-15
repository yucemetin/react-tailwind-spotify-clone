import React from 'react'
import Navbar from "components/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from 'pages/Home';
import Search from 'pages/Search';
import { useEffect, useRef } from "react"
import gsap from "gsap"
import PlayList from 'pages/PlayList';
import Podcast from 'pages/Podcast';
import Artists from "pages/Artists"
import Albums from 'pages/Albums';


export default function Content() {

    const timeline = gsap.timeline({
        repeat: false,
        defaults: { duration: 2, ease: "easeInOut" }
    })

    const r1 = useRef()

    useEffect(() => {

        timeline.from(r1.current, { opacity: 0 }).to(r1.current, { opacity: 1 })

    })

    return (
        <main className='flex-auto z-0 overflow-auto'>
            <Navbar />
            <div ref={r1} className="px-8 py-5 mt-20">
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/collection/playlist' element={<PlayList />} />
                    <Route path='/collection/podcast' element={<Podcast />} />
                    <Route path='/collection/artists' element={<Artists />} />
                    <Route path='/collection/albums' element={<Albums />} />
                </Routes>
            </div>

        </main>
    )
}
