import { useSelector, useDispatch } from "react-redux"
import { setSidebar } from 'stores/player'
import iconUpperArrow from "../../img/icons/upperArrow.svg"

export default function SidebarCover() {
    const dispatch = useDispatch()
    const current = useSelector(state => state.player.current)


    return (
        <div className='pt-[100%] relative group'>
            <img src={current.image} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
            <button onClick={() => dispatch(setSidebar(false))} className='w-6 h-6 bg-black bg-opacity-80 flex items-center justify-center rounded-full absolute top-1 right-1 group-hover:opacity-100 opacity-0 hover:scale-[1.06]'>
                <img src={iconUpperArrow} alt="" className='rotate-180' />
            </button>
        </div>
    )
}
