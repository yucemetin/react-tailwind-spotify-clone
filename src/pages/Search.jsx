import React, { useEffect, useRef, useState } from 'react'
import categories from 'data/categories'
import Category from 'components/Category'
import favoriteCategories from 'data/favorites'
import FavoriteCategory from 'components/FavoriteCategory'
import ScrollContainer from 'react-indiana-drag-scroll'
import iconLeftArrow from 'img/icons/slider-left-arrow.svg'
import iconRightArrow from 'img/icons/slider-right-arrow.svg'

export default function Search() {

  const favoriteRef = useRef()

  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)

  useEffect(() => {

    if (favoriteRef.current) {

      const scrollHandle = () => {

        const isEnd = favoriteRef.current.scrollLeft + favoriteRef.current.offsetWidth === favoriteRef.current.scrollWidth
        const isBegin = favoriteRef.current.scrollLeft === 0
        setPrev(!isBegin)
        setNext(!isEnd)
      }
      scrollHandle()
      favoriteRef.current.addEventListener('scroll', scrollHandle)


      return () => {
            // eslint-disable-next-line
        favoriteRef?.current?.removeEventListener('scroll', scrollHandle)
      }
    }
    
  }, [favoriteRef])

  const slideNext = () => {
    favoriteRef.current.scrollLeft += favoriteRef?.current?.offsetWidth -400;
  }

  const slidePrev = () => {
    favoriteRef.current.scrollLeft -= favoriteRef?.current?.offsetWidth - 400;
  }


  return (
    <div className='flex flex-col gap-y-10'>
      <section>
        <header className='flex items-center justify-between mb-4'>
          <h3 className='font-bold text-2xl text-white tracking-tight'>En çok dinlediğin türler</h3>
        </header>
        <div className='relative'>
          {prev && <button className='absolute hover:scale-[1.06] -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full z-20 bg-white flex items-center justify-center' onClick={slidePrev}><img src={iconLeftArrow} alt="" /></button>}
          {next && <button className='absolute hover:scale-[1.06] -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full z-20 bg-white flex items-center justify-center' onClick={slideNext}><img src={iconRightArrow} alt="" /></button>}
          <ScrollContainer className="flex scrollable overflow-x gap-x-6 z-0" innerRef={favoriteRef}>
            {favoriteCategories.map((category, index) => <FavoriteCategory key={index} category={category} />)}
          </ScrollContainer>
        </div>
      </section>
      <section>
        <header className='flex items-center justify-between mb-4'>
          <h3 className='font-bold text-2xl text-white tracking-tight'>Hepsine göz at</h3>
        </header>
        <div className='grid grid-cols-5 gap-6'>
          {categories.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </section>
    </div>

  )
}
