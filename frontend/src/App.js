import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Search from './components/pages/search/search';
import About from './components/pages/about';
import Services from './components/pages/services';
import Home from './components/pages/home';

const App = () => {
  return (
    <Router>
    <Navbar />
 
       <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />}component={Search} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
         
          
       </Routes>
   
   </Router>
  )
}

export default App;
