import React , {useState} from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar,Typography,InputBase,Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Logo from './Logo.jpeg'
//import  useStyles  from './HeaderStyles';
import './Header.css' ; 
const Header = ({setCoordinates}) => {
   // const classes=useStyles();
   const [autocomplete , setAutocomplete] = useState(null) ; 
  const onLoad = (autoC)=> setAutocomplete(autoC) ;
  const onPlaceChanged =()=>{
     const lat = autocomplete.getPlace().geometry.location.lat() ;
     const lng = autocomplete.getPlace().geometry.location.lng() ; 
     setCoordinates({lat , lng}) ; 
  }
  return (
    <div className = 'header__container'>
     <AppBar position="static"  color="primary" sx = {{ marginBottom : '10px'}}enableColorOnDark>
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
                    {/**classes take object as an input theerefore we use  double curly braces */}

                </div>
             </Autocomplete> 

                
              
        </Toolbar>

     </AppBar>
    </div>
  )
}

export default Header
