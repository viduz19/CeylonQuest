import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Team from './pages/Team';
import TeamSection from './components/team/TeamMembers';




const App = () => {
  return (
    <div className="overflow-x-hidden" >

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/teamMembers' element={<TeamSection />} />
      </Routes>
    </div>
  )
}

export default App