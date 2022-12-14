import SongItem from 'components/SongItem'
import React from 'react'
import { NavLink } from 'react-router-dom'

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
          {items.map(item => <SongItem item={item} key={item.id}/>)}
        </div>
      </section>
    </div>
  )
}
