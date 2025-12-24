import React from 'react'

const CharacterProfile = () => {

    const characterImage = [
        {
          name: 'Frodo Baggins',
          id: 1,
          image: '/public/images/characters/Frodo.webp'
        }, {
          name: 'Samwise Gamgee',
          id: 2,
          image: '/public/images/characters/Sam.webp'
        },{
          name: 'Gandalf',
          id: 3,
          image: '/public/images/characters/Gandalf.jpg'
        },{
          name: 'Bilbo Baggins',
          id: 4,
          image: '/public/images/characters/Bilbo.webp'
        }, {
          name: 'Aragorn II',
          id: 5,
          image: '/public/images/characters/Aragorn.webp'
        }, {
          name: 'Meriadoc Brandybuck',
          id: 6,
          image: '/public/images/characters/Merry.webp'
        }, {
          name: 'Peregrin Took',
          id: 7,
          image: '/public/images/characters/Pippin.webp'
        }, {
          name: 'Legolas',
          id: 8,
          image: '/public/images/characters/Legolas.webp'
        }, {
          name: 'Gimli',
          id: 9,
          image: '/public/images/characters/Gimli.jpg'
        }, {
          name: 'Boromir',
          id: 10,
          image: '/public/images/characters/Boromir.jpg'
        }]

  return (
    <div className='grid grid-cols-5 gap-6 p-6'>
        {characterImage.map((item) => (
            <div key={item.id} className='bg-white shadow-lg rounded-lg p-4 text-center'>
            <img src={item.image} className='w-full h-100 object-cover rounded-md'/>
            <p>{item.name}</p>
            </div>
        ))}
    </div>
  )
}

export default CharacterProfile