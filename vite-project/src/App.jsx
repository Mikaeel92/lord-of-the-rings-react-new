import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Characters from './Components/Characters.JSX'
import Story from './Components/Story'
import CharacterProfile from './Components/CharacterProfile'

const App = () => {
  return (
    <Router>
      <nav className='flex gap-4 text-2xl font-bold bg-gray-700 text-white p-4 items-center'>
        <Link className='hover:text-amber-300' to='/'>Home</Link>
        <Link className='hover:text-amber-300' to='/characters'>Characters</Link>
        <Link className='hover:text-amber-300' to='/story'>Ring's Journey</Link>
        <Link className='hover:text-amber-300' to='/images'>Character's Images</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='characters' element={<Characters/>}/>
        <Route path='story' element={<Story/>}/>
        <Route path='images' element={<CharacterProfile/>}/>
      </Routes>
    </Router>
  )
}

export default App