const express = require('express')
const router = express.Router()

router.get('/', getFav)
router.post('/', postFav)
router.delete('/:id', deleteFav)