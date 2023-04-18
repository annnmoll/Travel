import React , {useState} from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar,Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Logo from './Logo.jpeg'
import './Header.css' ; 
const Header = ({setCoordinates}) => {
  
  const [autocomplete , setAutocomplete] = useState(null) ; //autocompletes when we search for a location
  
  const onLoad = (autoC)=> setAutocomplete(autoC) ;
   
  const onPlaceChanged =()=>{
   const lat = autocomplete.getPlace().geometry.location.lat() ;
   const lng = autocomplete.getPlace().geometry.location.lng() ; 
   setCoordinates({lat , lng}) ; 
                        }


  return (
    <div className = 'header__container'>
      <AppBar position="static" color="primary" sx={{marginBottom:'10px'}}>   
        <Toolbar>
          <img className=  'header__logo'  src ={Logo}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , display :{ xs :'block'} }}>
            EasoVenture-Make your adventure easy
          </Typography>
            
          <Autocomplete onLoad={onLoad}onPlaceChanged={onPlaceChanged}> 
            <div className='header__search'>
              <div className='header__searchIcon'>
                <SearchIcon/>
              </div>
                <input className='header__input' type='text' placeholder='Search.' />
            </div>
          </Autocomplete> 
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header ; 
