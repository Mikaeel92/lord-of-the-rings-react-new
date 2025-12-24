const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Bearer = require('../model/Bearers')
dotenv.config()

const seedBearers = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongo db connected for seeding')

        const existingBearers = await Bearer.find()
        if(existingBearers.length > 0) {
            return console.log('bearer already exists')
        }
        const seed = [
    {
    name: "Sauron",
    duration: "~1,800 years",
    image: "/image/bearers/sauron.jpg",
    description:
      "Forged the One Ring in the fires of Mount Doom and poured much of his power into it. Though he survived after losing the Ring, his strength was greatly diminished."
  },
  {
    name: "Isildur",
    duration: "~2 years",
    image: "/image/bearers/isildur.jpg",
    description:
      "Cut the Ring from Sauron’s hand but was corrupted by its power and failed to destroy it."
  },
  {
    name: "Déagol",
    duration: "Seconds",
    image: "/image/bearers/deagol.jpg",
    description:
      "Discovered the Ring in the River Anduin and was immediately murdered by Sméagol."
  },
  {
    name: "Gollum (Sméagol)",
    duration: "~478 years",
    image: "/image/bearers/gollum.jpg",
    description:
      "Kept the Ring beneath the Misty Mountains for centuries, becoming deeply corrupted."
  },
  {
    name: "Bilbo Baggins",
    duration: "~60 years",
    image: "/image/bearers/bilbo.jpg",
    description:
      "Found the Ring by chance and was the only bearer to willingly give it up."
  },
  {
    name: "Frodo Baggins",
    duration: "~17 years",
    image: "/image/bearers/frodo.jpg",
    description:
      "Carried the Ring to Mount Doom but ultimately could not resist its power."
  },
  {
    name: "Samwise Gamgee",
    duration: "Hours",
    image: "/image/bearers/sam.jpg",
    description:
      "Carried the Ring briefly in Mordor to save Frodo, resisting its corruption."
  },
  {
    name: "Gollum (again)",
    duration: "Minutes",
    image: "/image/bearers/gollum.jpg",
    description:
      "Recovered the Ring one last time and perished with it in Mount Doom."
  }
        ]

    await Bearer.insertMany( seed )
    console.log('Bearer seeded successfully')

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

seedBearers()