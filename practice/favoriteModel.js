const mongoose = require('mongoose')

const favoriteSchma = mongoose.schema({
    characterId: {
        type: mongoose.schema.Types.objectId,
        ref: "Character",
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('Favorite', favoriteSchma)