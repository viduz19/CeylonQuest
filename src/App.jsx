import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Team from './pages/Team';
import TeamSection from './components/team/TeamMembers';
import About from './components/About';




const App = () => {
  return (
    <div className="overflow-x-hidden" >

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  )
}

export default App