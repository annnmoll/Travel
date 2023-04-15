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
     <AppBar position="static"  sx = {{bgcolor :'#c14ac1' , marginBottom : '10px'}}enableColorOnDark>
        <Toolbar>
          <img className=  'header__logo'  src ={Logo}/>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 , display :{xs : 'none' , sm :'block'} }}>
        EasoVenture-Make your adventure easy
          </Typography>
                
                
              
        </Toolbar>

     </AppBar>
    </div>
  )
}

export default Header
