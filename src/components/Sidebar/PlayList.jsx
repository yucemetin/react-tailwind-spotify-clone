import React from 'react'

export default function PlayList() {
    return (
        <nav className='ml-6 mt-2 py-2 flex-auto overflow-auto '>
            <ul className='mr-6 border-t border-white border-opacity-20'>
                {new Array(40).fill(<li className='text-sm text-link hover:text-white flex h-8 items-center'>
                    <a href="/">
                        22. Çalma Listem
                    </a>
                </li>)}
            </ul>
        </nav>
    )
}
