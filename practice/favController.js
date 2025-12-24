const favoriteModel = require("./favoriteModel")

const getFav = async (req, res) => {
const favorites = await favoriteModel.find()
res.json()

}

const postFav = async (req, res) => {
const {characterId} = req.body
const exist = await favoriteModel.findOne({characterId})
if(exist) {
    return res
}
const newFavorite = await favoriteModel.create({characterId})
res.json(newFavorite)
}

const deleteFav = async (req, res) => {
const {id} = req.params
await favoriteModel.findOneAndDelete({characterId: id})
}