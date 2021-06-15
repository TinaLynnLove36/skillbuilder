import {useAuth0} from '@auth0/auth0-react';
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = () => {

const login = async () => {
    const domain = "skillbuilder.us.auth0.com";
    const audience = "https://skillbuilder.com";
    const scope = "read:skills";
    const clientId = "MwMk5YHG9M7V1kaI5Zpt777gzOjq1kQs";
    const responseType = "code";
    const redirectUri = "http://localhost:3000/dashboard";

    const response = fetch(
        `https://${domain}/authorize?` +
        `audience=${audience}&` +
        `scope=${scope}&` +
        `response_type=${responseType}&` +
        `client_id=${clientId}&` +
        `redirect_uri=${redirectUri}`, {
            redirect: "manual"
        }
    );

    window.location.replace(response.url);
};
    return (
    <>
        <Link to='login'>
        <button className='btn' onClick={() => login()}>Login</button>
        </Link>
  
    </>
    );
}

export default Button;