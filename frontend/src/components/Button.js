import firebase from "firebase/app";
import "firebase/auth";
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Button() {

const [auth, setAuth] = useState(false || window.localStorage.getItem("auth")==='true');
const [token, setToken] = useState('');


useEffect(() => {
    firebase.auth().onAuthStateChanged((userCred) => {
        if (userCred) {
            setAuth(true);
            window.localStorage.setItem('auth', 'true');
            userCred.getIdToken().then((token) => {
                setToken(token);
            });
        }
    });
}, []);

    const loginWithGoogle = () => {
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((userCred) => {
            if(userCred) {
                setAuth(true);
                window.localStorage.setItem('auth', 'true');
        }
    });
};

    const logoutWithGoogle = () => {
        firebase.auth().signOut()
        .then((userCred) => {
            if(userCred) {
                setAuth(false);
                window.localStorage.setItem('auth', 'true');
        }
    });
};

    return (
    <>
        
   
        <Link to='login'>
        <button className='btn' onClick={loginWithGoogle}>Login</button>
        </Link>
     
    </>
    );
}


