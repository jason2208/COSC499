import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Search from './components/pages/search/search';
import About from './components/pages/about';
import Services from './components/pages/services';
import Home from './components/pages/home';
import Login from './components/pages/account/login';
import Register from './components/pages/account/register';

const App = () => {
  return (
    <Router>
    <Navbar />
 
       <Routes>
          <Route path='/' element={<App />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
       </Routes>
   
   </Router>
  )
}

export default App;
