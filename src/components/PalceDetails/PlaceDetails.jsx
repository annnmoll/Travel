import React from 'react'
import {Box , Typography , Button , Card , CardMedia , CardContent , CardActions} from '@mui/material'
import Chip from '@mui/material/Chip'
import LocationOnIcon from '@mui/icons-material/LocationOn' ;
import PhoneIcon from '@mui/icons-material/Phone'
import Rating from '@mui/lab/Rating'
import useStyles from './PlaceDetailsStyles' ;

function PlaceDetails({place , selected , refProp}) {
 
 const classes = useStyles() ;

 if(selected) 
 refProp?.current?.scrollIntoView({behavior : 'smooth' , block :'start'})
  
 return(
    <Card elevation= {6}>
      <CardMedia style = {{height : 350}}
                 image = {place.photo? place.photo.images.large.url : 'https://imgs.search.brave.com/guY-tVNNhi4QPJrxeCSfkfAU-Snz2mZKisQMVZl3m40/rs:fit:1200:1170:1/g:ce/aHR0cHM6Ly9yZWxp/YWJsZXdhdGVyMjQ3/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8wNS9ob3Rl/bC1yZXN0YXVyYW50/LWZlYXR1cmVkLmpw/Zw' } 
                 title={place.name} />
        <CardContent>
          <Typography gutterBottom variant = "h5" >
            {place.name}
          </Typography>
        
          <Box display='flex' justifyContent = 'space-between'>
            <Typography variant='subtitle1'>Price</Typography>
            <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
          </Box>

          <Box display='flex' justifyContent = 'space-between'>
            <Typography variant='subtitle1'>Ranking</Typography>
            <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
          </Box>

          <Box display='flex' justifyContent = 'space-between'>
            <Typography variant='subtitle1'>Rating</Typography>
            <Rating  value ={Number(place.rating)} readOnly/>
          </Box>
        
          {place?.cuisine?.map(({key , name})=>(
              <Chip key ={key} 
                    size ='small' 
                    label={name} 
                    className = {classes.chip} 
              />))}


          { place?.address && (
            <Typography gutterBottom variant='body2' color= 'textSecondary' className = {classes.subtitle}>
              <LocationOnIcon />{place.address}
            </Typography>)
          }

        {
           place?.phone && (
            <Typography gutterBottom variant='subtitle2' color= 'textSecondary' className = {classes.spacing}>
              <PhoneIcon />{place.phone} 
            </Typography>
          )
        }


        <CardActions>
          <Button size='small' color='primary' onClick={()=>window.open(place.web_url , '_blank')}>
            Trip Advisor
          </Button>
          <Button size='small' color='primary' onClick={()=>window.open(place.website , '_blank')}>
            Website
          </Button>
        </CardActions>
       </CardContent>
    </Card>
  )
}

export default PlaceDetails