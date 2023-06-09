import React from 'react';
import Logo from '../Header/Logo.jpeg' ; 
import { AppBar,Toolbar,Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom'

function Nav() {
    const navigate = useNavigate() ; 
  return (
    <div>
          <AppBar position="static" color="primary" sx={{  backgroundColor : 'cadetblue'}}>   
    <Toolbar>
      <img className=  'header__logo'  src ={Logo} onClick = {()=>{navigate('/')}}/>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 , display :{ xs :'none' , md : 'block  '} }}>
        EasoVentures - Make your adventures easy
      </Typography>
        
      <div className = 'header__buttons'>
        <button onClick = {()=>{navigate('/')}}>Home</button>
        <button onClick ={()=>{navigate('/about')}}>About Us</button>
        <button onClick={()=>{navigate('/contact')}}>Contact</button>
      </div>

    </Toolbar>
  </AppBar>
    </div>
  )
}

export default Nav