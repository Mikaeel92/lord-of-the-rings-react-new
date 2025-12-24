const mongoose = require('mongoose')

const bearerSchema = mongoose.Schema(
{
name: {type: String},
duration: {type: String},
description: {type: String},
image: {type: String}
})

module.exports = mongoose.model('Bearer', bearerSchema)