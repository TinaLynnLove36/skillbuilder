
import React from 'react';
import './Button.css';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {auth} from './Firebase'
import dispatch from 'react-redux'
import LogoutButton from './LogoutButton'



export default function Button() {

    const [presentUser, setPresentUser] = useState(null);



useEffect(() => {
    auth.onAuthStateChanged(user => {
        if (user) {
        setPresentUser({
            uid: user.uid,
            email: user.email
        })
    }
    else {
        setPresentUser(null);
    }
    })
}, [presentUser])


    return (
    <>
        
        {presentUser ? <LogoutButton /> : (
        <Link to='login'><button className='btn'>Login</button></Link>
        )}
    </>
    
    )}



