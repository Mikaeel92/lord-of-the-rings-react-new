import React from 'react'

const Story = () => {
  return (
    <div className='flex flex-col w-screen h-screen items-center gap-4'>
              <h1 className='font-bold text-2xl text-red-800 mt-4'>"Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk agh burzum-ishi krimpatu"</h1>
              <h2 className='text-xl text-gray-900 font-bold'>One Ring to find them, One Ring to bring them all and in the darkness bind them</h2>
        <img src='/public/ring-of-power.png' className='w-[600px] h-[600px] rounded-md shadow-lg object-cover'/>
    </div>
  )
}

export default Story