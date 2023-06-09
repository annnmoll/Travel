import React from 'react'
//import Logo from '../Header/Logo.jpeg'
//import GoogleIcon from '@mui/icons-material/Google' ; 
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
    <div class='signin__container'>
       <div>
      <button onClick = {signin}>Login With Google</button>
      </div>
    </div>

 
  )
}

export default SignIn
