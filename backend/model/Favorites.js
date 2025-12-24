const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
  characterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character',
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Favorite', favoriteSchema)
