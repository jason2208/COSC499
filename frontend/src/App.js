import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Navbar from './components/navbar/Navbar';
import Search from './components/pages/search/search';
import About from './components/pages/about';
import Services from './components/pages/services';
import Home from './components/pages/home';


import SignIn from './components/account/signin';
import SignUp from './components/account/signup';

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


          //account
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
         
          
       </Routes>
   
   </Router>

  )
}
export default App;
