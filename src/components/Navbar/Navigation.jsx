import React, { useState } from 'react'
import iconLeft from "../../img/icons/left-row.svg"
import iconRight from "../../img/icons/right-row.svg"
import iconX from "../../img/icons/x.svg"
import iconInputsearch from "../../img/icons/inputsearch.svg"
import { createBrowserHistory } from "history"
import { useMatch, NavLink } from "react-router-dom"

export default function Navigation() {

    const history = createBrowserHistory()
    const isSearch = useMatch("/search")
    const isCollection = useMatch("/collection/*")

    const [inputval, setInputval] = useState("")

    let activeClassName = "px-4 py-3 text-sm font-bold rounded bg-active";
    let unActiveClassName = "px-4 py-3 text-sm font-bold rounded";


    const inputHandle = (e) => {
        setInputval(e.target.value)
    }
    return (
        <nav className='flex items-center gap-x-4 justify-center'>
            <button onClick={() => history.back()} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
                <img src={iconLeft} alt="" />
            </button>
            <button onClick={() => history.forward()} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
                <img src={iconRight} alt="" className='opacity-60' />
            </button>
            {isSearch && (
                <div className='items-center h-10 w-[364px] relative'>
                    <input autoFocus={true} value={inputval} onChange={inputHandle} type="text" className='h-10 w-[364px] bg-white rounded-3xl px-12 placeholder:text-black placeholder:opacity-60 outline-none text-black text-sm' placeholder='Ne dinlemek istiyorsun?' />
                    {inputval !== "" && (
                        <button onClick={() => setInputval("")} className='absolute top-2 right-3'>
                            <img src={iconX} alt="" />
                        </button>
                    )}
                    <img src={iconInputsearch} alt="" className='absolute top-2 left-3' />
                </div>
            )}
            {isCollection && (
                <nav >
                    <ul className='flex gap-x-2'>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : unActiveClassName
                            }
                                to="/collection/playlist"
                            >
                                Çalma Listeleri
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : unActiveClassName
                            }
                                to="/collection/podcast"
                            >
                                Podcast'ler
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : unActiveClassName
                            }
                                to="/collection/artists"
                            >
                                Sanatçılar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : unActiveClassName
                            }
                                to="/collection/albums"
                            >
                                Albümler
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </nav>
    )
}
