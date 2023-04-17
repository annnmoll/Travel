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
            'X-RapidAPI-Key': 'e0ec14edb1msh01330812efef0d9p167e5bjsn4ca3c2429bbe',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }) ; 

        return data ; 
    }
    catch(error){
      console.log(error);

    }
}