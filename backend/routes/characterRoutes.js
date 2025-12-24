const express = require('express')
const { getCharacters } = require('../controller/characterController')
const router = express.Router()

router.get('/', getCharacters)

module.exports = router