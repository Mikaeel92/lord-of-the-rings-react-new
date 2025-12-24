const express = require('express')
const router = express.Router()
const { getFavorites, addFavorites, deleteFavorite } = require('../controller/favoriteController')


router.get('/', getFavorites)

router.post('/', addFavorites)

router.delete('/:id', deleteFavorite)


module.exports = router