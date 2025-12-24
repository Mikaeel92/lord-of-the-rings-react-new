import React from 'react'

const Card = ({ item, actionForPassData, isFavorite, onToggle }) => {

    const API_URL = import.meta.env.VITE_API_URL

  return (
    <div className="bg-gray-200 shadow-lg rounded-lg p-4 gap-2 m-4 w-64 text-center flex flex-col" onClick={actionForPassData}>

      <h1 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h1>

      <img src={`${API_URL}${item.image}`} className='w-full h-100 object-cover rounded-md'/>

      <p className="text-gray-700"><span className="font-semibold">Race:</span> {item.race}</p>

      <p><span className="font-semibold">Age:</span> {item.age}</p>

      <p><span className="font-semibold">Weapon:</span> {item.weapon}</p>

      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.description}</p>

      <button onClick={(e) => {
        e.stopPropagation()
        onToggle()
      }}>{isFavorite ? "❤️" : "🤍"}</button>

    </div>
  )
}

export default Card