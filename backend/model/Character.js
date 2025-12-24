const mongoose = require('mongoose')

const characterSchema = mongoose.Schema(
    {
    name: { type: String, required: true },
    image: { type: String, required: true },
    race: { type: String, required: true },
    age: { type: Number, required: true },
    weapon: { type: String, required: true },
    description: { type: String, required: true }
    }, {timstamps: true})

    module.exports = mongoose.model('Character', characterSchema)