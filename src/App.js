import React, { useEffect, useState } from 'react' ; 
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn/SignIn'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login } from './features/userSlice';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen' ; 
import About from './screens/About';
import Contact from './screens/Contact';

const App = () => {
 const user = useSelector(selectUser) ;
 const dispatch = useDispatch() ;
 
 useEffect(()=>{
  auth.onAuthStateChanged( user =>{  if (user){
    dispatch(login({
      displayName : user.displayName,
      email : user.email ,
      photoUrl : user.photoURL ,
    })
       )}
                        }) }  , [])

  
  return (
      <Router>
              <Routes >
                 
                <Route path ='/profile' element={<ProfileScreen /> }/>
                <Route path ='/' element = { !user ?  <SignIn />  : <HomeScreen />} />
                <Route path ='/about' element = {<About />} />
                <Route path ='/contact' element ={<Contact />} />


              </Routes>

        </Router>
    )
}

export default App ; 

