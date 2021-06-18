import React from 'react';
import './Button.css';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {auth} from './Firebase'
import dispatch from 'react-redux'

export default function LogoutButton() {

    return (
    <>
        
       
        <Link to='/'><button className='btn' onClick={() => auth.signOut()}>Logout</button></Link>
      
       
    </>
    );
}