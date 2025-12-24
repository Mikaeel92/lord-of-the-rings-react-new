const Character = require("../model/character")

const getCharacters = async (req, res) => {
  try {
    let characters = await Character.find()

    if (characters.length === 0) {
const seed = [
  {
    name: 'Frodo Baggins',
    image: '/images/characters/Frodo.webp',
    race: 'Hobbit',
    age: 50,
    weapon: 'Sting (short sword)',
    description:
      'Frodo Baggins is a brave Hobbit from the Shire who is chosen to carry the One Ring. Despite his small size, he shows immense courage, resilience, and inner strength in the face of overwhelming darkness.'
  },
  {
    name: 'Samwise Gamgee',
    image: '/images/characters/Sam.webp',
    race: 'Hobbit',
    age: 38,
    weapon: 'Sword and cooking tools',
    description:
      'Samwise Gamgee is Frodo’s loyal companion and closest friend. His unwavering loyalty, kindness, and determination make him one of the true heroes of Middle-earth.'
  },
  {
    name: 'Gandalf',
    image: '/images/characters/Gandalf.jpg',
    race: 'Maia (Wizard)',
    age: 2019,
    weapon: 'Staff and sword (Glamdring)',
    description:
      'Gandalf is a wise and powerful wizard sent to Middle-earth to oppose Sauron. Through wisdom, sacrifice, and leadership, he unites the free peoples against the forces of evil.'
  },
  {
    name: 'Bilbo Baggins',
    image: '/images/characters/Bilbo.webp',
    race: 'Hobbit',
    age: 111,
    weapon: 'Sting (short sword)',
    description:
      'Bilbo Baggins is the first bearer of the One Ring and Frodo’s uncle. Curious and adventurous, Bilbo’s journey sets the stage for the events of The Lord of the Rings.'
  },
  {
    name: 'Aragorn II',
    image: '/images/characters/Aragorn.webp',
    race: 'Human (Dúnedain)',
    age: 87,
    weapon: 'Sword (Andúril)',
    description:
      'Aragorn is the rightful heir to the throne of Gondor. A skilled warrior and natural leader, he embodies honor, humility, and the return of the true king.'
  },
  {
    name: 'Meriadoc Brandybuck',
    image: '/images/characters/Merry.webp',
    race: 'Hobbit',
    age: 36,
    weapon: 'Short sword',
    description:
      'Meriadoc Brandybuck, known as Merry, grows from a carefree Hobbit into a courageous warrior. He plays a crucial role in the defeat of the Witch-king.'
  },
  {
    name: 'Peregrin Took',
    image: '/images/characters/Pippin.webp',
    race: 'Hobbit',
    age: 28,
    weapon: 'Short sword',
    description:
      'Peregrin Took, or Pippin, starts as a playful and curious Hobbit but matures through hardship. His journey leads him to serve as a Guard of Gondor.'
  },
  {
    name: 'Legolas',
    image: '/images/characters/Legolas.webp',
    race: 'Elf',
    age: 2931,
    weapon: 'Bow and arrows',
    description:
      'Legolas is an Elven prince and an exceptional archer. His agility, sharp senses, and friendship with Gimli symbolize unity among the free peoples.'
  },
  {
    name: 'Gimli',
    image: '/images/characters/Gimli.jpg',
    race: 'Dwarf',
    age: 139,
    weapon: 'Battle axe',
    description:
      'Gimli is a fierce Dwarf warrior with a strong sense of honor. His bravery in battle and deep friendship with Legolas break ancient rivalries.'
  },
  {
    name: 'Boromir',
    image: '/images/characters/Boromir.jpg',
    race: 'Human (Gondorian)',
    age: 41,
    weapon: 'Sword and shield',
    description:
      'Boromir is a noble warrior of Gondor who struggles against the temptation of the One Ring. His final sacrifice proves his courage and loyalty.'
  }
]
      characters = await Character.insertMany(seed)
    }

    res.status(200).json(characters)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getCharacters }