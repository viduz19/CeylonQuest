import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import FoodService from './pages/FoodService';
import HotelService from './pages/HotelService';
import SafariService from './pages/SafariService';
import BeachService from './pages/BeachService';




const App = () => {
  return (
    <div className="overflow-x-hidden" >

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path="/services/food" element={<FoodService />} /> 
         <Route path="/services/hotels" element={<HotelService />} />
         <Route path="/services/safari" element={<SafariService />} />
         <Route path="/services/beach" element={<BeachService />} />
      </Routes>
    </div>
  )
}

export default App