import React , {useState ,useEffect} from 'react'
import {Grid} from '@mui/material';
import  Header from '../components/Header/Header' ; 
import  List from '../components/List/List';
import  Map from '../components/Map/Map';
import { getPlacesData } from '../api';


function HomeScreen() {
    const [places , setPlaces] = useState([]) ;  // to store the list of places
 const [filteredPlaces , setFilteredPlaces] =  useState([]) ;   //to store the list of filtered places based on ratings
 
 const [coordinates , setCoordinates] = useState({}) ; // to set coordinates from map
 const [bounds , setBounds] = useState({}) ;  // to set boundarries from map

 const[isLoading , setIsLoading] =  useState(false) ; //if data is not loaded
 
 
 const [type,setType]=useState('restaurants')  ; //to search for a particular type
 const [rating,setRating]=useState('') ; //to see filtered data on the basis of ratings
 

 useEffect( () => {
    navigator.geolocation.getCurrentPosition(({coords :{latitude , longitude}})=>{
    setCoordinates({lat : latitude , lng : longitude });
  
  }
                                            ) ;
              } , []) ; 

  useEffect(()=>{    
    if(bounds.sw || bounds.ne){
           setIsLoading(true) ; 
           getPlacesData(type , bounds?.sw , bounds?.ne).then((data)=>{
           setPlaces(data?.filter((place)=> place.name && place.num_reviews > 0)) ;
           setFilteredPlaces([])
           setIsLoading(false)})}
                 } , [type  , bounds]) ; 
    //this useEffect will rum when the type or bounds of map changes
    
useEffect(()=>{
  const filteredPlaces = places?.filter((place)=> place.rating > rating)
  setFilteredPlaces(filteredPlaces) ;
               } , [rating]) ;              
//This useEffect will run when the user searches for data for particular ratings
  
  return (
    <div>
         <Header setCoordinates = {setCoordinates}/> 
     
     <Grid container spacing={2} style={{overflow : 'auto' , width      :'100%'}} >
       <Grid item xs={12} sm={4} > 
         <List
               places={filteredPlaces.length ? filteredPlaces : places} 
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
              
        />
      </Grid>

    </Grid>      
   
    </div>
  )
}

export default HomeScreen  ; 