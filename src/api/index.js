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
            'X-RapidAPI-Key': 'c920942cabmsh645f750433241dep1f91b3jsncc79c81dfdd0',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }) ; 

        return data ; 
    }
    catch(error){
      console.log(error);

    }
}