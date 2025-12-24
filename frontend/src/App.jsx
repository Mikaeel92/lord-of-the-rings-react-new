import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Components/Home'
import Characters from './Components/Characters.JSX'
import Story from './Components/Story'
import Favorites from './Components/Favorites'

const App = () => {
  return (
    <Router>
      <nav className='flex gap-4 text-2xl font-bold bg-gray-700 text-white p-4 items-center'>
        <img src='../../backend/images/lord_of_the_rings_logo_by_haleyhss_d6yi9hz-fullview.png' alt='logo'/>
        <NavLink className={({isActive}) => isActive ? 'text-amber-500' : 'hover:text-amber-300'} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-amber-500' : 'hover:text-amber-300'} to='/characters'>Characters</NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-amber-500' : 'hover:text-amber-300'} to='/story'>Ring's Journey</NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-amber-500' : 'hover:text-amber-300'} to='/favorites'>Favorite Characters</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </Router>
  )
}

export default App