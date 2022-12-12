import React from 'react'
import Navbar from "components/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from 'pages/Home';
import Search from 'pages/Search';
import Collection from 'pages/Collection';
import { useEffect, useRef } from "react"
import gsap from "gsap"


export default function Content() {

    const timeline = gsap.timeline({
        repeat: false,
        defaults: { duration: 2, ease: "easeInOut" }
    })

    const r1 = useRef()

    useEffect(() => {

        timeline.from(r1.current, { opacity: 0 }).to(r1.current, { opacity: 1 })

    }, [])

    return (
        <main className='flex-auto'>
            <Navbar />
            <div ref={r1}>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/collection' element={<Collection />} />
                </Routes>
            </div>

        </main>
    )
}
