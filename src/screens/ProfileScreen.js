import React from 'react' ;
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logout , selectUser } from '../features/userSlice';
import Nav from '../components/Nav/Nav';
import './ProfileScreen.css' ; 
  
function ProfileScreen() {

    const dispatch = useDispatch() ;
    const navigate = useNavigate() ; 
    
  
    const user = useSelector(selectUser) ;

    const signOut = () =>{
      auth.signOut().then( dispatch(logout()))
   }
  


  return (
    <div>
  
      <Nav/>

    <div className = 'profileScreen'>
        <div className='profileScreen__body'>
        <div className='profileScreen__info'>
        <img 
           src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'/>
           <div className='profileScreen__details'>
           <h2>{user?.displayName}</h2>
               <h2>{user?.email}</h2>
               
             
                <button onClick = {()=> { navigate('/')} }className='profileScreen__signOut'>Back To Homepage</button>
                <button onClick = {()=> {signOut() ; navigate('/')} }className='profileScreen__signOut'>Sign Out</button>
             
           </div>
        </div>
        </div>
      </div>

      </div>  
    
  )
}

export default ProfileScreen;