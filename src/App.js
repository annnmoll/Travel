import React, { useEffect, useState } from 'react' ; 
import './App.css';
import {Grid} from '@mui/material';
import  Header from './components/Header/Header' ; 
import  List from './components/List/List';
import  Map from './components/Map/Map';
import { getPlacesData } from './api';


const App = () => {
 const [places , setPlaces] = useState([]) ;  // to store the list of places
 const [filteredPlaces , setFilteredPlaces] =  useState([]) ;   //to store the list of filtered places based on ratings
 
 const [coordinates , setCoordinates] = useState({}) ; // to set coordinates from map
 const [bounds , setBounds] = useState({}) ;  // to set boundarries from map

 const[isLoading , setIsLoading] =  useState(false) ; //if data is not loaded
 
 
 const [type,setType]=useState('restaurants')  ; //to search for a particular type
 const [rating,setRating]=useState('') ; //to see filtered data on the basis of ratings
 

 const [childClicked , setChildClicked] = useState(null) ;

useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords :{latitude , longitude}})=>{
    setCoordinates({lat : latitude , lng : longitude });}
                                            ) ;
              } , []) ; 
//This useEffect only runs one 
//It is used to detect the current location of the user


useEffect(()=>{
  const filteredPlaces = places ?.filter((place)=> place.rating > rating)
  setFilteredPlaces(filteredPlaces) ;
               } , [rating]) ;              
//This useEffect will run when the user searches for data for particular ratings


useEffect(()=>{    
  if(bounds.sw || bounds.ne){
         setIsLoading(true) ; 
         getPlacesData(type , bounds?.sw , bounds?.ne).then((data)=>{
         setPlaces(data?.filter((place)=> place.name && place.num_reviews > 0)) ;
         setFilteredPlaces([])
         setIsLoading(false)})}
               } , [type  , bounds]) ; 

  //this useEffect will rum when the type or bounds of map changes
  
  return (
    <div>
       <Header setCoordinates = {setCoordinates}/> 
     
       <Grid   container spacing ={2} style = {{overflow : 'auto'}} >
         <Grid  item xs={12} sm={4} > 
           <List
                 places={filteredPlaces.length ? filteredPlaces : places} 
                 childClicked = {childClicked}
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
          />
        </Grid>
  
      </Grid>      
          
    </div>
  )
}

export default App ; 

