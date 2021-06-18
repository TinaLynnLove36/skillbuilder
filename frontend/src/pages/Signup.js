import { StyledContainer } from "./../components/Styles2";
import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {auth} from './../components/Firebase'

export default function SignUp() {
    const paperStyle = { padding: "30px 20px", width: 450 };
    const headerStyle = { margin: "15px" };
    const avatarStyle = { backgroundColor: "#160D42" };
    const btnStyle = { margin: "35px 0" };
    const [data, setData] = useState({
       
        email: '',
        password: ''
    })

    const { email, password} = data;
    const changeHandler = e => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(user =>
        console.log(user)).catch(err => console.log(err))
    }

    return (
        <>
            <StyledContainer>
              <Grid className='grid'>
                    <Paper elevation={20} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}>
                                <AddCircleOutlineOutlinedIcon />
                            </Avatar>
                             <h2 style={headerStyle}>Sign Up</h2>
                             <Typography variant='caption'>Please fill this form to create an account.</Typography>
                       </Grid>
                       <form id='signup-form'>
                        <TextField fullWidth label='Email' name='email' placeholder='Enter your email' id='signup-email' onChange={changeHandler} value={email}/>
                        <TextField fullWidth label='Password' name='password' placeholder='Create a password' id='signup-password' onChange={changeHandler} value={password}/>
                        <TextField fullWidth label='Confirm Password' placeholder='Confirm your password' id='signup-confirm'/>
                        <Button type='submit' variant='contained' color='primary' fullWidth style={btnStyle} onClick={signUp}>Sign Up</Button>
                       </form>
                    </Paper>
                </Grid>
            </StyledContainer>
        </>
    );
}

