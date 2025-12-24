const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const mongoose = require('mongoose')
const characterRoutes = require('./routes/characterRoutes')
const path = require('path')
const favoriteRoutes = require('./routes/favoriteRoutes')
const bearersRoutes = require('./routes/bearersRoutes')


app.use(cors())
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, './images')))

app.use('/api/characters', characterRoutes)
app.use('/api/favorite', favoriteRoutes)
app.use('/api/bearers', bearersRoutes)


const port = process.env.PORT || 8800 

const connectDB = async () => {
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('DB is connected')
} catch (error) {
    console.log(`mongoose connection error: ${error}`)
    process.exit(1)
}}

connectDB()

app.listen(port, () => {
console.log(`server is running on port ${port}`)
})