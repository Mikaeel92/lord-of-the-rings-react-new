const Favorites = require('../model/Favorites')

const getFavorites =  async (req, res) => {
    try {
       const favorites = await Favorites.find()
       res.json(favorites) 
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `server error while getting favorites ${error.message}`})
    }
}

const addFavorites = async (req, res) => {
  try {
    const { characterId } = req.body

    const exists = await Favorites.findOne({ characterId })
    if (exists) {
      return res.status(400).json({ message: 'Already in favorites' })
    }

    const newFavorite = await Favorites.create({ characterId })
    res.status(201).json(newFavorite)

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteFavorite = async (req, res) => {
    try {
        const {id} = req.params
        await Favorites.findOneAndDelete({characterId: id})
        res.json({message: "Removed"})
    } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
    }
}


module.exports = { getFavorites, addFavorites, deleteFavorite }