import React ,{useEffect, useState , createRef}from 'react'
import { CircularProgress, Grid, Paper , Typography, InputLabel, MenuItem,FormControl,Select } from '@mui/material'
import './List.css' ; 
import PlaceDetails from '../PalceDetails/PlaceDetails' ;


const List = ({places,isLoading ,type ,setType , rating , setRating}) => {
        
  return (
    <Paper style = {{maxHeight : '100vh' , overflow :'auto' }}>
      <h4  style={{marginLeft : '10px'}}>RESTRAUNTS,HOTELS AND ATTRACTIONS NEARBY </h4>
      { isLoading ? 
        (<div className = "loading" style = {{marginLeft : '20px'}}>
         <CircularProgress size = '5rem'/>  </div> ) 
         :
         (<div className = 'list__container'>
          <>
           <FormControl  className='list__formControl'>
             <InputLabel className='list__type'>Type</InputLabel>
             <Select  value={type} onChange={(e)=>setType(e.target.value)}>{/**e is the eevent and ther is a callback func.that set the value */}
              <MenuItem value='restaurants'>RESTRAUNTS</MenuItem>
              <MenuItem value='attractions'>ATTRACTIONS</MenuItem>
             </Select>
           </FormControl>


           <FormControl className='list__formControl'>
             <InputLabel className = 'list__type'>Rating</InputLabel>
             <Select   className = 'select'value={rating} onChange={(e)=>setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>above 4.0</MenuItem>
             </Select>
           </FormControl>
          </>
    
          <Grid container spacing = {1} className = 'List__places'>
           {  places?.map((place , i ) =>(
             <Grid item key ={i} xs= {12}>
             <PlaceDetails  place = {place}  />
          </Grid>
      ))}
       </Grid>
       
      </div> )}
      
    </Paper>
  )
}

export default List
