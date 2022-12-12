import React from 'react'
import Navbar from "components/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from 'pages/Home';
import Search from 'pages/Search';
import Collection from 'pages/Collection';

export default function Content() {
    return (
        <main className='flex-auto'>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/collection' element={<Collection/>}/>
            </Routes>
        </main>
    )
}
