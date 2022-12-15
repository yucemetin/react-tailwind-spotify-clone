import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import iconMix from "../img/icons/playerMix.svg"
import iconPrev from "../img/icons/playerPrev.svg"
import iconPlay from "../img/icons/play.svg"
import iconNext from "../img/icons/playerNext.svg"
import iconAgain from "../img/icons/playerAgain.svg"
import iconPause from "../img/icons/pause.svg"
import iconVolumeFull from "../img/icons/volumeFull.svg"
import iconVolumeNormal from "../img/icons/volumeNormal.svg"
import iconVolumeMute from "../img/icons/volumeMute.svg"
import iconVolumeLow from "../img/icons/volumeLow.svg"
import iconSpotify from "../img/icons/spotify-logo.svg"
import iconPlayerHeart from "../img/icons/playerHeart.svg"
import iconSmallScreen from "../img/icons/smallscreen.svg"
import CustomRange from 'components/CustomRange'
import { secondsToMinute } from "../utils"

export default function FullScreenPlayer({ toggle, state, controls }) {

    const { current } = useSelector(state => state.player)

    const volumeIcon = useMemo(() => {
        if (state.volume === 0 || state.muted) {
            return iconVolumeMute
        }

        if (state.volume > 0 && state.volume < 0.33) {
            return iconVolumeLow
        }

        if (state.volume >= 0.33 && state.volume < 0.66) {
            return iconVolumeNormal
        }

        if (state.volume >= 0.66) {
            return iconVolumeFull
        }


    }, [state.volume, state.muted])

    return (
        <div className='h-full relative' onClick={e => {
            e.stopPropagation()
            controls[state?.playing ? 'pause' : 'play']()
        }}>
            <div className='absolute inset-0 bg-center bg-cover blur-md opacity-40' style={{ backgroundImage: `url(${current.image})` }}></div>
            <div className='absolute top-12 left-8 flex items-center gap-x-4'>
                <img src={iconSpotify} alt="" />
                <div className='text-xs'>
                    <p className='text-link opacity-80'>PLAYING FROM PLAYLIST</p>
                    <h6 className='text-link font-semibold'>{current.title}</h6>
                </div>
            </div>
            <div className='absolute bottom-44 left-8 flex items-center gap-x-4'>
                <img src={current.image} alt="" className='w-24 h-24 object-cover' />
                <div className='self-end'>
                    <h3 className='text-3xl font-bold text-white'>{current.title}</h3>
                    <p className='text-link text-sm font-medium'>{current.artist}</p>
                </div>
            </div>
            <div className='flex flex-col w-full absolute bottom-4 items-center px-8'>
                <div className='w-full flex items-center gap-x-5 mb-4 '>
                    <div className='text-base text-white'>
                        {secondsToMinute(state?.time)}
                    </div>
                    <CustomRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />
                    <div className='text-base text-white'>
                        {secondsToMinute(state?.duration)}
                    </div>
                </div>
                <div onClick={e => {
                            e.stopPropagation()
                        }} className='flex items-center w-full justify-between mb-8'>
                    <div className='flex items-center justify-start w-1/3'>
                        <button className='flex items-center justify-center opacity-70 hover:opacity-100'>
                            <img src={iconPlayerHeart} alt="" className='w-6 h-6' />
                        </button>
                    </div>
                    <div className='flex items-center justify-center gap-x-8 w-1/3'>
                        <button className='flex items-center justify-center opacity-70 hover:opacity-100'>
                            <img src={iconMix} alt="" className='h-6 w-6' />
                        </button>
                        <button className='flex items-center justify-center opacity-70 hover:opacity-100'>
                            <img src={iconPrev} alt="" className='h-6 w-6' />
                        </button>
                        <button onClick={e => {
                            e.stopPropagation()
                            controls[state?.playing ? 'pause' : 'play']()
                        }} className='w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-[1.06]'>
                            <img src={state?.playing ? iconPause : iconPlay} alt="" className='h-8 w-8' />
                        </button>
                        <button className='flex items-center justify-center opacity-70 hover:opacity-100'>
                            <img src={iconNext} alt="" className='h-6 w-6' />
                        </button>
                        <button className='flex items-center justify-center opacity-70 hover:opacity-100'>
                            <img src={iconAgain} alt="" className='h-6 w-6' />
                        </button>
                    </div>
                    <div className='flex items-center justify-end gap-x-4 w-1/3'>
                        <div className='flex gap-x-1'>
                            <button onClick={e => {
                                e.stopPropagation()
                                controls[state.muted ? 'unmute' : 'mute']()
                            }} className='w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100'>
                                <img src={volumeIcon} alt="" />
                            </button>
                            <div className='w-[5.813rem] w-max-full'>
                                <CustomRange
                                    step={0.01}
                                    min={0}
                                    max={1}
                                    value={state.muted ? 0 : state?.volume}
                                    onChange={value => {
                                        controls.unmute()
                                        controls.volume(value)

                                    }}
                                />
                            </div>
                        </div>
                        <button onClick={e => {
                            e.stopPropagation()
                            toggle()
                        }} className='flex items-center justify-center opacity-70 hover:opacity-100'>
                            <img src={iconSmallScreen} alt="" className='w-6 h-6' />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}
