import React from 'react'

const CharacterModal = ({ character, actionToCloseData }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[500px] relative">

        <button
          onClick={actionToCloseData}
          className="absolute top-2 right-2 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">{character.name}</h2>

        <p><b>Race:</b> {character.race}</p>
        <p><b>Age:</b> {character.age}</p>
        <p><b>Weapon:</b> {character.weapon}</p>

        <p className="mt-4 text-gray-700">
          {character.description}
        </p>
      </div>
    </div>
  )
}

export default CharacterModal