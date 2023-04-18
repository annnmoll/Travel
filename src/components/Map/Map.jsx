import React , {useState}from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper,Typography,useMediaQuery}  from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import Rating from '@mui/lab/Rating'
import useStyles from './MapStyles'

const Map = ({setCoordinates , setBounds , coordinates ,places , setChildClicked}) => {
  const classes=useStyles();
  const isDesktop=useMediaQuery('(min-width:600px)')     
 
  

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
          bootstrapURLKeys={{key:'AIzaSyB9zXqU-Ep0Xa6ub8YkvnRHrI14Hb2DLkw'}} 
          defaultCenter={coordinates} 
          center={coordinates} 
          defaultZoom={14} 
          margin={[50,50,50,50]} 
          options={''} 
          onChange={(e)=>{ 
                           setCoordinates({lat : e.center.lat , lng : e.center.lng}) ;
                           setBounds({ne :e.marginBounds.ne , sw: e.marginBounds.sw }) ; 
                          }} 
          onChildClick={(child)=>setChildClicked(child)} 
        >
          {   places?.map((place , i )=>(
              <div className={classes.markerContainer}
                lat ={ Number(place.latitude)}
                lng= {Number(place.longitude)}
                key ={i}>
               {
                 !isDesktop ? (<LocationOnOutlinedIcon color ='primary' fontSize='large'/>)
                            : (<Paper elevation={3} className ={classes.paper}>
                                <Typography className = {classes.typography} variant="subtitle2" gutterBottom>
                                  {place.name}     
                                </Typography>
                                <img className = {classes.pointer} src= {place.photo? place.photo.images.large.url : 'https://imgs.search.brave.com/guY-tVNNhi4QPJrxeCSfkfAU-Snz2mZKisQMVZl3m40/rs:fit:1200:1170:1/g:ce/aHR0cHM6Ly9yZWxp/YWJsZXdhdGVyMjQ3/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8wNS9ob3Rl/bC1yZXN0YXVyYW50/LWZlYXR1cmVkLmpw/Zw'}
                                alt ={place.name} />
                               <Rating size ='small' value ={Number(place.rating)} readOnly/>
                              </Paper>)
                }
                  
                </div>))
          }
      </GoogleMapReact>
    </div>
  )
}

export default Map
