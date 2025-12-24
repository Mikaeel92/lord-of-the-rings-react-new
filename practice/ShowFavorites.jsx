import React, { useEffect, useState } from 'react'

const ShowFavorites = () => {
    const [allCharacters, setAllCharacters] = useState([])
    const [favoritId, setFavoriteId] = useState([])

    const API_URL = import.meta.env.VITE_API_URL

    const fetchFavoriteId = async () => {
        const res = await fetch(`$${API_URL}/api/favorite`)
        const data = await res.json()
        setFavoriteId(data.map((item) => item.CharacterId))
    }

    const fetchCharacter = async () => {
        const res = await fetch(`${API_URL}/api/characters`)
        const data = await res.json()
        console.log(data)
        setAllCharacters(data)
    }

    useEffect(() => {
        fetchCharacter()
        fetchFavoriteId()
    }, [])

    const favorited = allCharacters.filter((item) => favoritId.includes(item._id))

    const removeFav = async (id) => {
        await fetch(`${API_URL}/api/favorite/:${id}`, {
            method: "DELETE"
        })
        setFavoriteId((prev) => prev.filter((item) => item !== id))
    }

  return (
    <div>
        {favorited.map((item) => (
            <Card onToggle={() => removeFav(item._id)} isFavorite={true} item={item}/>
        ))}
    </div>
  )
}

export default ShowFavorites