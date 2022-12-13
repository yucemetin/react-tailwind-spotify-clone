import React from 'react'
import { NavLink } from 'react-router-dom'
import iconSpoti from "../../img/icons/spotify.svg"

export default function Section({ title, more = false, items }) {

  return (
    <div>
      <section className='relative z-1'>
        <header className='flex items-center justify-between mb-4'>
          <NavLink to={more}>
            <h3 className='font-bold text-2xl text-white tracking-tight hover:underline'>{title}</h3>
          </NavLink>
          
          {more && (
            <NavLink to={more} className={"text-[12px] font-semibold uppercase opacity-70 hover:underline z-0 tracking-wider"}>
              TÜMÜNÜ GÖSTER
            </NavLink>
          )}
        </header>
        <div className='grid grid-cols-5 gap-x-6 z-0'>
          {items.map(item => (
            <NavLink key={item.id} to="/" className={"bg-footer p-4 rounded-lg group hover:bg-active"}>
              <div className='relative'>
                {item.type === 'album' && (
                  <img src={item.image} alt="" className='aspect-square mb-4 w-full rounded-md shadow-custom' />
                )}
                {item.type === 'artist' && (
                  <img src={item.image} alt="" className='aspect-square mb-4 w-full rounded-full shadow-custom' />
                )}

                <button className='w-12 h-12 rounded-full bg-secondary absolute right-2 bottom-2 group-hover:opacity-100 opacity-0 flex transition-opacity items-center justify-center shadow-custom'>
                  <img src={iconSpoti} alt="" />
                </button>
              </div>

              <div className='overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold'>
                {item.title}
              </div>
              <p className='line-clamp-2 text-sm text-link mt-1'>
                {item.description}
              </p>

            </NavLink>
          ))}
        </div>
      </section>
    </div>
  )
}
