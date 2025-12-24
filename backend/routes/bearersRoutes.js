const express = require('express')
const getBearers = require('../controller/bearersController')
const router = express.Router()

router.get('/', getBearers)


module.exports = router