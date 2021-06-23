import React from 'react';
import './Button.css';
 import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {auth} from './Firebase'
import dispatch from 'react-redux'

export default function LogoutButton() {

const signOut = () => {
    firebase.auth().signOut().then(function() {
        
    }).catch(function(error) {

    });
}
 
    return (
    <>
        
       
        <Link to='/'><button className='btn' onClick={signOut}>Logout</button></Link>
      
       
    </>
    );
}

