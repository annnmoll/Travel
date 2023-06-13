import React, { useEffect, useState } from 'react' ; 
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen' ; 
import About from './screens/About';
import Contact from './screens/Contact';

const App = () => {
 
  
  return (
      <Router>
              <Routes >
                 
                <Route path ='/profile' element={<ProfileScreen /> }/>
                <Route path ='/' element = {<HomeScreen /> } />
                <Route path ='/about' element = {<About />} />
                <Route path ='/contact' element ={<Contact />} />


              </Routes>

        </Router>
    )
}

export default App ; 

