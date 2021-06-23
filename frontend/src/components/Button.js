import React from 'react';
import './Button.css';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {auth} from './Firebase'
import dispatch from 'react-redux'
import LogoutButton from './LogoutButton'



export default function Button() {

     const [currentUser, setCurrentUser] = useState(null);



 useEffect(() => {
     auth.onAuthStateChanged(user => {
         if (user) {
         setCurrentUser({
             uid: user.uid,
            email: user.email})
     }
     else {
         setCurrentUser(null);
     }
    })
 }, [currentUser])


    return (
    <>
        
        {currentUser ? <LogoutButton /> : (
        <Link to='/login'><button className='btn'>Login</button></Link>
        )}
    </>
    
    )}

    //    {presentUser ? <LogoutButton /> : (
    //     <Link to='login'><button className='btn'>Login</button></Link>
    //     )}

// useEffect(() => {
//     auth.onAuthStateChanged(currentUser => {
//         if (currentUser) {
//         setPresentUser({
//             uid: user.uid,
//             email: user.email
//         })
//     }
//     else {
//         setPresentUser(null);
//     }
//     })
// }, [presentUser])


