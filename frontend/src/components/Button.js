import firebase from "firebase/app";
import "firebase/auth";
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Button() {


    return (
    <>
        
   
        <Link to='login'>
        <button className='btn'>Login</button>
        </Link>
     
    </>
    );
}


