import React, { useEffect, useState } from 'react'
import './App.css';
import { Grid , useMediaQuery} from '@mui/material';
import  Header from './components/Header/Header'
import List from './components/List/List';
import Map from './components/Map/Map';
import CssBaseline from '@mui/material/CssBaseline' ;
import { getPlacesData } from './api';


const App = () => {
 const [places , setPlaces] = useState([]) ; 
 const [filteredPlaces , setFilteredPlaces] =  useState([]) ;
 const [coordinates , setCoordinates] = useState({}) ;
const [bounds , setBounds] = useState({}) ;
const[childClicked , setChildClicked] = useState(null) ;
 const[isLoading , setIsLoading] =  useState(false) ; 
 const [type,setType]=useState('restaurants')
 {/**type is the object and setTypemodifies the  state of object  */}
 const [rating,setRating]=useState('') ;
 const isDesktop=useMediaQuery('(min-width:600px)')     
useEffect(()=>{
  navigator.geolocation.getCurrentPosition(({coords :{latitude , longitude}})=>{
    setCoordinates({lat : latitude , lng : longitude }) ; 
    
  }
  ) ;
              } , []) ; 


useEffect(()=>{
  const filteredPlaces = places?.filter((place)=> place.rating > rating)
  setFilteredPlaces(filteredPlaces) ;
} , [rating]) ;              
  useEffect(()=>{    
     if(bounds.sw && bounds.ne){
      setIsLoading(true) ; 
    getPlacesData(type , bounds?.sw , bounds?.ne).then((data)=>{
      setPlaces(data) ;
      setFilteredPlaces([])
      setIsLoading(false) ; 
      console.log('data',data);
    })  }
  } , [type  , bounds]) ; 
  return (
    <div>
    <Header setCoorddinates = {setCoordinates}/>
     {
      !isDesktop ?(<div>   <Grid   container spacing ={2} style = {{overflow : 'auto'}} >
             <Grid item xs={12} sm={8}>
       <Map  setCoordinates = {setCoordinates} 
              setBounds = {setBounds}
              coordinates = {coordinates}
              places={filteredPlaces.length ? filteredPlaces  : places}
              setChildClicked = {setChildClicked}
              />{/**on the  right most corner displayed the map */}

   
   </Grid>

      <Grid  item xs={12} sm={4} > 
        <List
              places={filteredPlaces.length ? filteredPlaces : places} 
              childClicked={childClicked}
               isLoading = {isLoading} 
             type = {type}     
             setType = {setType}
             rating = {rating}
             setRating = {setRating}
          
         /> 

       
     </Grid>
     

   </Grid>      
</div>) 
      :(<div> 
           <Grid   container spacing ={2} style = {{overflow : 'auto'}} >
         <Grid  item xs={12} sm={4} > 
           <List
                 places={filteredPlaces.length ? filteredPlaces : places} 
                 childClicked={childClicked}
                  isLoading = {isLoading} 
                type = {type}     
                setType = {setType}
                rating = {rating}
                setRating = {setRating}
             
            /> 
 
          
        </Grid>
        

        <Grid item xs={12} sm={8}>
          <Map  setCoordinates = {setCoordinates} 
                 setBounds = {setBounds}
                 coordinates = {coordinates}
                 places={filteredPlaces.length ? filteredPlaces  : places}
                 setChildClicked = {setChildClicked}
                 />{/**on the  right most corner displayed the map */}

      
      </Grid>
      </Grid>      
   
      </div>)
     }      
    </div>
  )
}

export default App ; 

