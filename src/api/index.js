import axios from 'axios' ;
import { useState } from 'react';



export const getPlacesData = async(type , sw , ne)=>{
    try{
        const {data :{data}}= await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary` , {  params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
         
          },
          headers: {
            'x-rapidapi-key': '0c768a5badmsha89d6aaffc3715dp155e9djsnf84344b37ede',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
          }
        }) ; 

        return data ; 
    }
    catch(error){
      console.log(error);

    }
}