import React from 'react'
import logoHome from "img/icons/home.svg"
import logoSearch from "img/icons/search.svg"
import logoCollection from "img/icons/collection.svg"
import { NavLink } from "react-router-dom"

export default function Menu() {

    let activeClassName = "bg-active text-white h-10 flex gap-x-4 items-center text-sm font-semibold rounded px-4";
    let unActiveClassName = "h-10 flex gap-x-4 items-center text-sm font-semibold rounded text-link hover:text-white px-4";

    return (
        <nav className='px-2'>
            <ul className='flex flex-col'>
                <li className='group'>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeClassName : unActiveClassName
                    }
                        to="/"
                    >
                        <span className='group-hover:text-white'>
                            <img src={logoHome} alt="" />
                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeClassName : unActiveClassName
                    }
                        to="/search"
                    >
                        <span>
                            <img src={logoSearch} alt="" />
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeClassName : unActiveClassName
                    }
                        to="/collection/playlist"
                    >
                        <span>
                            <img src={logoCollection} alt="" />
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
