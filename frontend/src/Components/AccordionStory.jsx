import React, { useState } from 'react'

const AccordionStory = () => {

    const [show, setShow] = useState(false)

    // const handleClick = () => {
    //     setShow((prev) => !prev)
    // }

  return (
    <div className='max-w-md space-y-2'>
        <p className='text-gray-800 leading-7'>
        <strong className='text-amber-500'>The One Ring was forged by the Dark Lord Sauron in the fires of Mount Doom.</strong>
        <br/>
        Into this Ring he poured his cruelty, his malice, and his will to dominate all life.
        Though it was lost for ages, the Ring endured & passing from one bearer to another,
        corrupting minds and bending destinies.
        <button className='font-bold rounded-md hover:shadow-xl transition text-amber-400' 
        onClick={() => setShow(!show)}>{show ? 'Silence the Ring' : 'The Ring whispers'}</button>
        </p>
        {show && <div className='bg-black/80 text-white p-4 rounded-lg shadow-2xl animate-fadeIn'>
        <p className='leading-7'>
        The Ring has a will of its own.
        It abandons masters, tempts the weak, and destroys the powerful.
        Every bearer believes they can control it.
        <br />
        <span className="font-bold text-red-500">Every bearer is wrong.</span>
        </p>
        </div>}
    </div>
  )
}

export default AccordionStory