import React from 'react'


export default function FavoriteCategory({ category }) {
    return (

        <div
            style={{ 'background': category.background }}
            className="rounded-lg relative w-[27.375rem] h-[13.75rem] flex flex-shrink-0"
        >
            <div className='absolute inset-0 overflow-hidden'>
                <h3 className='p-4 text-[2.5rem] text-white tracking-tighter font-bold'>
                    {category.title}
                </h3>
                <img src={category.image} alt="" className='w-32 h-32 shadow-spotify rotate-[25deg] translate-x-[18%] translate-y-[-5%] absolute bottom-0 right-0' />
            </div>
        </div>

    )
}
