import React , {useState} from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar,Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Logo from './Logo.jpeg'
import './Header.css' ; 
import { useNavigate } from 'react-router-dom';
const Header = ({setCoordinates}) => {

  const navigate = useNavigate() ; 
  

  return (
    <div className = 'header__container'>
      <AppBar position="static" color="primary" sx={{marginBottom:'10px' , backgroundColor : 'cadetblue'}}>   
        <Toolbar>
          <img className=  'header__logo'  src ={Logo}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , display :{ xs :'none' , md : 'block  '} }}>
            EasoVentures - Make your adventures easy
          </Typography>
            
{ // <Autocomplete onLoad={onLoad}onPlaceChanged={onPlaceChanged}> }
            <div className='header__search'>
              <div className='header__searchIcon'>
                <SearchIcon/>
              </div>
                <input className='header__input' type='text' placeholder='Search.' />
              </div>
            
{ // </Autocomplete> }
          <div className='header__right' >
                
                <img src = {'https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png'} alt='User' />
                <h4>{user?.displayName}</h4>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header ; 
