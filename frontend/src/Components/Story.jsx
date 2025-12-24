import React from 'react'
import AccordionStory from './AccordionStory'
import BearersSlider from './BearersSlider'

const Story = () => {
  return (
    <div className='flex flex-col w-screen h-screen items-center gap-4'>
              <h1 className='font-bold text-2xl text-red-800 mt-4'>"Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk agh burzum-ishi krimpatu"</h1>
              <h2 className='text-xl text-gray-900 font-bold'>One Ring to find them, One Ring to bring them all and in the darkness bind them</h2>
              <div className='flex gap-8 mt-2'>
              <img src='/ring-of-power.png' className='w-[700px] h-[630px] rounded-md shadow-lg object-fill'/>
              <div className='flex flex-col gap-8'>
              <AccordionStory/>
              <BearersSlider/>
              </div>
              </div>
    </div>
  )
}

export default Story