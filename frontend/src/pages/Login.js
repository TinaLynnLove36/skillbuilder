import {StyledContainer} from './../components/Styles2';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function Login({  token }) {

    useEffect(()=> {
        if (token) {
            fetchData(token);
        }
    }, [token]);

    const fetchData = async() => {
        const res = await axios.get('http://localhost:5000/api/skills', {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        console.log(res.data);
    }
    return (
        <>
            <StyledContainer>
                <div className='login'></div>
            </StyledContainer>
       
        </>
    );
}