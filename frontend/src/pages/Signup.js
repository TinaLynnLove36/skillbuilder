import { StyledContainer } from "./../components/Styles2";
import React, { useRef } from 'react';
//import { useAuth } from './../components/AuthContext'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export default function SignUp() {
    const paperStyle={padding: '30px 20px', width: 450}
    const headerStyle={margin: '15px'}
    const avatarStyle={backgroundColor: "#160D42"}
     const btnStyle = {margin: '35px 0'}

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
                       <form>
                        <TextField fullWidth label='Name' placeholder='Enter your name'/>
                        <TextField fullWidth label='Email' placeholder='Enter your email'/>
                        <TextField fullWidth label='Password' placeholder='Create a password'/>
                        <TextField fullWidth label='Confirm Password' placeholder='Confirm your password'/>
                        <Button type='submit' variant='contained' color='primary' fullWidth style={btnStyle}>Sign Up</Button>
                       </form>
                    </Paper>
                </Grid>
            </StyledContainer>
        </>
    );
}