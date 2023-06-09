import React from 'react'
import { WhatsApp  , Instagram , Email} from '@mui/icons-material'
import './Contact.css'
import Nav from '../components/Nav/Nav'
import './Contact.css'

function Contact() {
    
  return (
    <div>
     <Nav />
    <div className='container'>
        
     <div className='mail'>
        <span>
        <Email /> <h2>anmolahuja250@gmail.com</h2>
        </span>
        <span>
        <Email /> <h2>malikliza2524@gmail.com</h2>
        </span>
        
        
     </div>

     <div className='instagram'>
        <span>
        
        <Instagram /> <h2>anmol_._ahuja</h2>
        </span>
        <span>
        <Instagram /> <h2>l_malik252</h2>
        </span>
        
     </div>

     <div className='whatsapp'>
        <span>
        <WhatsApp /> <h2>9728405909</h2>
       
        </span>
        
     </div>

    </div>
    </div>
  )
}

export default Contact