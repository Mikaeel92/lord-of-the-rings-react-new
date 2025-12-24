import React, { useEffect, useState } from 'react'
import Card from './Card'

const Favorites = () => {
    const [characters, setCharacters] = useState([])
    const [favoritesId, setFavoritesId] = useState([])
    const [loading, setLoading] = useState(false)

    const API_URL = import.meta.env.VITE_API_URL

    const fetchCharacter = async () => {
        try {
        setLoading(true)
        const res = await fetch(`${API_URL}/api/characters`)
        const data = await res.json()
        setCharacters(data)
        setLoading(false) 
        } catch (error) {
        console.log(error)
        setLoading(false)
        }
    }

    const fetchFavorites = async () => {
        try {
        setLoading(true)
        const res = await fetch(`${API_URL}/api/favorite`)
        const data = await res.json()
        setFavoritesId(data.map(item => item.characterId))      
        setLoading(false)   
        } catch (error) {
        console.log(error)
        setLoading(false)
        }
    }

    useEffect(() => {
        fetchCharacter()
        fetchFavorites()
    }, [])

    if(loading) {
        return <p>Loading...</p>
    }

    const favoriteCharacters = characters.filter(item => favoritesId.includes(item._id))

    const removeFavorite = async (id) => {
        try {
            await fetch(`${API_URL}/api/favorite/${id}`, {
                method: "DELETE"
            })
            setFavoritesId(prev => prev.filter(item => item !== id))
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="grid grid-cols-5 gap-4 p-4">
{favoriteCharacters.length === 0 ? (
  <div className="flex items-center justify-center h-full min-h-[60vh]">
  <p className="text-3xl font-bold text-gray-500">
    No favorites yet 🤍
  </p>
</div>
) : (
  favoriteCharacters.map(item => (
    <Card
      key={item._id}
      item={item}
      isFavorite={true}
      onToggle={() => removeFavorite(item._id)}
    />
  ))
)}
    </div>
  )
}

export default Favorites