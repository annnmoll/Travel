import React , {useState} from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar,Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Logo from './Logo.jpeg'
import './Header.css' ; 
import { useSelector } from 'react-redux';
import { logout ,selectUser } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';
const Header = ({setCoordinates}) => {
  const user = useSelector(selectUser) ; 
  const navigate = useNavigate() ; 
  const [autocomplete , setAutocomplete] = useState(null) ; //autocompletes when we search for a location
  
  const onLoad = (autoC)=> setAutocomplete(autoC) ;
   
  const onPlaceChanged =()=>{
   const lat = autocomplete.getPlace().geometry.location.lat() ;
   const lng = autocomplete.getPlace().geometry.location.lng() ; 
   setCoordinates({lat , lng}) ; 
                        }


  return (
    <div className = 'header__container'>
      <AppBar position="static" color="primary" sx={{marginBottom:'10px' , backgroundColor : 'cadetblue'}}>   
        <Toolbar>
          <img className=  'header__logo'  src ={Logo}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , display :{ xs :'none' , md : 'block  '} }}>
            EasoVentures - Make your adventures easy
          </Typography>
            
          <Autocomplete onLoad={onLoad}onPlaceChanged={onPlaceChanged}> 
            <div className='header__search'>
              <div className='header__searchIcon'>
                <SearchIcon/>
              </div>
                <input className='header__input' type='text' placeholder='Search.' />
              </div>
            
          </Autocomplete> 
          <div className='header__right' onClick = {()=> navigate('/profile')}>
                
                <img src = {'https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png'} alt='User' />
                <h4>{user?.displayName}</h4>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header ; 
