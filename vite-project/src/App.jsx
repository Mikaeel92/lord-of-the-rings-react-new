import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Characters from './Components/Characters.JSX'
import Story from './Components/Story'

const App = () => {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
        <Link to='/story'>Ring's Story</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='characters' element={<Characters/>}/>
        <Route path='story' element={<Story/>}/>
      </Routes>
    </Router>
  )
}

export default App