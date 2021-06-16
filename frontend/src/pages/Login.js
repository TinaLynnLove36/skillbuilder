import { StyledContainer } from "./../components/Styles2";
import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Link, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Login() {
  const paperStyle = { padding: 20, height: "70vh", width: 400 };
  const avatarStyle = { backgroundColor: "#160D42" };
  const textStyle = {bottom: 20}
  const btnStyle = {margin: '35px 0'}
  const checkboxStyle = {top: '15px'}

  return (
    <>
      <StyledContainer>
        <Grid className="grid">
          <Paper style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2 className="signIn">Sign In</h2>
            </Grid>
            <TextField
              label="Username"
              placeholder="Enter username"
              fullWidth
              required
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              
              fullWidth
              required
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                  style={checkboxStyle}
               
                />
              }
              label= <div className='remember'>Remember me</div>
            />
            <Button type='submit' color='primary' fullWidth variant='contained' style={btnStyle}><h3>SIGN IN</h3></Button>
            <Typography>
                <Link href="#">
                <div className='forgot'>Forgot Password?</div>
                </Link>
            </Typography>
                  <Typography> <div className='letters'> Don't you have an account? &nbsp;
                <Link href="#">
                  Sign up
                </Link></div>
            </Typography>
          </Paper>
        </Grid>
      </StyledContainer>
    </>
  );
}
