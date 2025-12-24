const Bearer = require('../model/Bearers')

const getBearers = async (req, res) => {
    try {
     const bearers = await Bearer.find()
     res.status(200).json(bearers)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: `server error while getting bearers ${error.message}`})
    }
}

module.exports = getBearers