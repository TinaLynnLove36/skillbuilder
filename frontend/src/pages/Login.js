import { StyledContainer } from "./../components/Styles2";
import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Link,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { 
    Formik,
    Form,
    Field,
    ErrorMessage
} from "formik";
import {auth, provider} from './../components/Firebase'


import * as Yup from 'yup';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [presentUser, setPresentUser] = useState(null);
  const paperStyle = { padding: 20, height: "70vh", width: 400 };
  const avatarStyle = { backgroundColor: "#160D42" };
  const textStyle = { bottom: 20 };
  const btnStyle = { margin: "35px 0" };
  const checkboxStyle = { top: "15px" };
  const validationSchema=Yup.object().shape({
      email: Yup.string().email('Please enter valid email.'),
      password: Yup.string()
  })
  const initialValues={
      email: '',
      password: '',
      remember: false
  }

    const [login, setLogin] = useState({
       
        userEmail: '',
        userPassword: ''
    })
    
     const { userEmail, userPassword } = login;

  const validate = () => {
    let temp = {};
  };

const changeHandler = e => {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(userEmail, userPassword).then(user =>
        console.log(user)).catch(err => console.log(err))
    }

  const handleCheck = (e) => {
    setRememberMe(e.target.checked);
  };


  const onSubmit=(values, props) => {
     // console.log(values)
      props.resetForm();
   
  }



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
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {(props) => (
                <Form>
                  <Field as={TextField}
                    label="Email"
                    placeholder="Enter email"
                    onChange={changeHandler}
                    name='userEmail'
                    value={userEmail}
                    fullWidth
                      required
                    helperText={<ErrorMessage name='email' />}
                  />
                  <Field as={TextField}
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                   onChange={changeHandler}
                    name='userPassword'
                    value={userPassword}
                    fullWidth
                    required
                    helperText={<ErrorMessage name='password' />}
                  />
                  <Field as={FormControlLabel}
                   
                    name='remember'
                    control={
                      <Checkbox
                        color="primary"
                        style={checkboxStyle}
                        onChange={(e) => handleCheck(e)}
                      />
                    }
                    label=<div className="remember">Remember me</div>
                  />
                  <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    variant="contained"
                    style={btnStyle}
                    onClick={signIn}
                    disabled={props.isSubmitting}
                  >
                    <h3>SIGN IN</h3>
                  </Button>
                </Form>
              )}
            </Formik>
            <Typography>
              <Link href="#">
                <div className="forgot">Forgot Password?</div>
              </Link>
            </Typography>
            <Typography>
              {" "}
              <div className="letters">
                {" "}
                Don't you have an account? &nbsp;
                <Link href="http://localhost:3000/signup">Sign up</Link>
              </div>
            </Typography>
          </Paper>
        </Grid>
      </StyledContainer>
    </>
  );
}
