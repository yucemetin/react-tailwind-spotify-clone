import React, { useEffect, useMemo } from 'react'
import iconMix from "../../img/icons/playerMix.svg"
import iconPrev from "../../img/icons/playerPrev.svg"
import iconPlay from "../../img/icons/play.svg"
import iconNext from "../../img/icons/playerNext.svg"
import iconAgain from "../../img/icons/playerAgain.svg"
import iconPause from "../../img/icons/pause.svg"
import iconQueue from "../../img/icons/queue.svg"
import iconDevice from "../../img/icons/device.svg"
import iconVolumeFull from "../../img/icons/volumeFull.svg"
import iconVolumeNormal from "../../img/icons/volumeNormal.svg"
import iconVolumeMute from "../../img/icons/volumeMute.svg"
import iconVolumeLow from "../../img/icons/volumeLow.svg"
import iconFullScreen from "../../img/icons/fullScreen.svg"
import iconScreen from "../../img/icons/screenInScreen.svg"
import iconPlayerHeart from "../../img/icons/playerHeart.svg"
import iconUpperArrow from "../../img/icons/upperArrow.svg"
import { useAudio } from "react-use"
import { secondsToMinute } from "../../utils"
import CustomRange from 'components/CustomRange'
import { useDispatch, useSelector } from "react-redux"
import { setControls, setSidebar, setPlaying } from 'stores/player'

export default function Player() {

    const dispatch = useDispatch()
    const { current, sidebar } = useSelector(state => state.player)

    const [audio, state, controls] = useAudio({
        src: current?.src
    });

    useEffect(() => {
        controls.play()
        dispatch(setPlaying(true))
    }, [current])

    useEffect(()=> {
        dispatch(setPlaying(state.playing))
    },[state.playing])

    useEffect(() => {
        dispatch(setControls(controls))
    }, [])

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
        <div className='flex justify-between items-center h-full px-4'>
            <div className='min-w-[11.25rem] w-[30%] '>
                {current && (
                    <div className='flex items-center '>
                        <div className='flex items-center mr-3'>
                            {!sidebar && (
                                <div className='w-14 h-14 mr-3 flex-shrink-0 relative group'>
                                    <img src={current.image} alt="" />
                                    <button onClick={() => dispatch(setSidebar(true))} className='w-6 h-6 bg-black bg-opacity-80 flex items-center justify-center rounded-full absolute top-1 right-1 group-hover:opacity-100 opacity-0 hover:scale-[1.06]'>
                                        <img src={iconUpperArrow} alt="" />
                                    </button>
                                </div>
                            )}
                            <div>
                                <h6 className='text-sm line-clamp-1'>{current.title}</h6>
                                <p className='text-[0.688rem] text-link'>{current.artist}</p>
                            </div>
                        </div>
                        <button className='w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100'>
                            <img src={iconPlayerHeart} alt="" />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100'>
                            <img src={iconScreen} alt="" />
                        </button>
                    </div>

                )}
            </div>
            <div className='flex flex-col max-w-[45.125rem] w-[40%] items-center px-4'>
                <div className='flex items-center gap-x-2'>
                    <button className='w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100'>
                        <img src={iconMix} alt="" />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100'>
                        <img src={iconPrev} alt="" />
                    </button>
                    <button onClick={controls[state?.playing ? 'pause' : 'play']} className='w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-[1.06]'>
                        <img src={state?.playing ? iconPause : iconPlay} alt="" />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100'>
                        <img src={iconNext} alt="" />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100'>
                        <img src={iconAgain} alt="" />
                    </button>
                </div>
                <div className='w-full flex items-center gap-x-2'>
                    {audio}
                    <div className='text-[0.688rem] text-link'>
                        {secondsToMinute(state?.time)}
                    </div>
                    <CustomRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />
                    <div className='text-[0.688rem] text-link'>
                        {secondsToMinute(state?.duration)}
                    </div>
                </div>
            </div>
            <div className='min-w-[11.25rem] w-[30%] flex items-center justify-end'>
                <button className='w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100'>
                    <img src={iconQueue} alt="" />
                </button>
                <button className='w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100'>
                    <img src={iconDevice} alt="" />
                </button>
                <button onClick={controls[state.muted ? 'unmute' : 'mute']} className='w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100'>
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
                <button className='w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100'>
                    <img src={iconFullScreen} alt="" />
                </button>
            </div>
        </div>
    )
}
