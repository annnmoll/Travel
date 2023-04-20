import React from 'react'
import Logo from '../Header/Logo.jpeg'
import GoogleIcon from '@mui/icons-material/Google' ; 
import './SignIn.css' ;
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth , provider } from '../../firebase';
function SignIn() {
 
    const dispatch = useDispatch() ;
    const signin = ()=>{
        auth.signInWithPopup(provider).then(({user}) =>{ dispatch( login({
                                                         displayName : user.displayName ,
                                                         email : user.email ,
                                                         photoUrl : user.photoURL,})
                                                                 ) ;
                                                        }).catch(error => alert(error))
                       }

  return (
    <div className = 'signin__container'>
     <img className='signin__image' src={Logo}/>
     <h2 className = 'signin__text'>EasoVentures - Make Your Adventures Easy </h2>
     <div onClick={signin}className='signin__button'>
      <GoogleIcon />
      <h4>Login With Google </h4>
     </div>  
   
    </div>
  )
}

export default SignIn
