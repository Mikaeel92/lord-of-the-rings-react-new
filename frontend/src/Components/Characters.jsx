import React, { useEffect, useState } from 'react'
import Card from './Card'
import CharacterModal from './CharacterModal'

const Characters = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [favorite, setFavorite] = useState([])

  const API_URL = import.meta.env.VITE_API_URL

  const fetchApi = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/api/characters`)
      const data = await res.json()
      setData(data)
      setFilteredData(data)
    } catch (err) {
      setErrorMsg(err.message)
    } finally {
      setLoading(false)
    }
  }

  const fetchFavorites = async () => {
    const res = await fetch(`${API_URL}/api/favorite`)
    const data = await res.json()
    setFavorite(data.map(item => item.characterId))
  }

  useEffect(() => {
    fetchApi()
    fetchFavorites()
  }, [])

  const handleSearch = () => {
    if (!input.trim()) {
      setFilteredData(data)
    } else {
      setFilteredData(
        data.filter(item =>
          item.name.toLowerCase().includes(input.toLowerCase())
        )
      )
    }
  }

const toggleFavorite = async (id) => {
  if (favorite.includes(id)) {
    await fetch(`${API_URL}/api/favorite/${id}`, {
      method: "DELETE"
    })
    setFavorite(prev => prev.filter(item => item !== id))
  } else {
    const res = await fetch(`${API_URL}/api/favorite`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ characterId: id })
    })

    if (res.ok) {
      setFavorite(prev => [...prev, id])
    }
  }
}
  return (
    <div className="flex flex-col">
      <div className="mt-6 p-4">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          className="p-2 bg-gray-200 rounded-md"
          placeholder="Search Character..."
        />
        <button
          onClick={handleSearch}
          className="bg-green-700 p-2 rounded-md text-white ml-2"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4 p-4">
        {loading && <p>Loading...</p>}
        {errorMsg && <p>{errorMsg}</p>}

        {filteredData.map(item => (
          <Card
            key={item._id}
            item={item}
            actionForPassData={() => setSelectedCharacter(item)}
            isFavorite={favorite.includes(item._id)}
            onToggle={() => toggleFavorite(item._id)}
          />
        ))}
      </div>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          actionToCloseData={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  )
}

export default Characters