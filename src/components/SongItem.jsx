import React from 'react'
import { NavLink } from 'react-router-dom'
import iconSpoti from "../img/icons/spotify.svg"
import iconPause from "../img/icons/pause2.svg"
import { useDispatch, useSelector } from "react-redux"
import { setCurrent } from 'stores/player'

export default function SongItem({ item }) {

    const dispatch = useDispatch()
    const { current, playing, controls } = useSelector(state => state.player)

    const updateCurrent = () => {
        if (current.id === item.id) {
            if (playing) {
                controls.pause()
            } else {
                controls.play()
            }
        } else {
            dispatch(setCurrent(item))
        }


    }

    return (
        <NavLink key={item.id} to="/" className={"bg-footer p-4 rounded-lg group hover:bg-active"}>
            <div className='relative'>
                {item.type === 'album' && (
                    <img src={item.image} alt="" className='aspect-square mb-4 w-full rounded-md shadow-custom' />
                )}
                {item.type === 'artist' && (
                    <img src={item.image} alt="" className='aspect-square mb-4 w-full rounded-full shadow-custom' />
                )}

                <button onClick={updateCurrent} className={` w-12 h-12 rounded-full bg-secondary absolute right-2 bottom-2 group-hover:opacity-100 flex transition-opacity items-center justify-center shadow-custom hover:scale-[1.07] ${!(current?.id === item.id && playing) ? 'opacity-0' : 'opacity-100'}`}>
                    <img src={(current?.id === item.id && playing) ? iconPause : iconSpoti} alt="" />
                </button>
            </div>

            <div className='overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold'>
                {item.title}
            </div>
            <p className='line-clamp-2 text-sm text-link mt-1'>
                {item.description}
            </p>

        </NavLink>
    )
}
