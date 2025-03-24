import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <nav>
        <Link to=''>Home</Link>
        <Link to=''>Characters</Link>
        <Link to=''>Ring's Story</Link>
      </nav>

      <Routes>
        <Route path='' element={}/>
        <Route path='' element={}/>
        <Route path='' element={}/>
      </Routes>
    </Router>
  )
}

export default App