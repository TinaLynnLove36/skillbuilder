import { StyledContainer } from "./../components/Styles2";
import React, { useState, useContext, useEffect } from "react";
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
import { useHistory } from "react-router-dom";
//import { Formik, Form, Field, ErrorMessage } from "formik";
import { auth, provider, fire } from "./../components/Firebase";
import { AuthContext } from "./../components/Authentication/AuthProvider"; 
import * as Yup from "yup";
import firebase from 'firebase/app';


export default function Login(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [presentUser, setPresentUser] = useState(null);
  const paperStyle = { padding: 20, height: "70vh", width: 400 };
  const avatarStyle = { backgroundColor: "#160D42" };
  const textStyle = { bottom: 20 };
  const btnStyle = { margin: "35px 0" };
  const checkboxStyle = { top: "15px" };
  const history = useHistory();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email."),
    password: Yup.string(),
  });
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = login;

  const validate = () => {
    let temp = {};
  };

  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const { user } = useContext(AuthContext);
  console.log(user);

  // useEffect(() => {
  //     if (user) {
  //       history.push('/dashboard')
  //     }
  // }, [user, history])


// const signIn = (e) => {
//   e.preventDefault();
//   fire.auth().signInWithEmailAndPassword(email, password).then(res => {
//     history.push("/dashboard")
//   })
//   .catch((err) => console.log(err));
// }


    const onSubmit = (e) => {
    e.preventDefault();
    auth
       .signInWithEmailAndPassword(email, password)
      .then(res => {
      history.push("/dashboard")
      console.log(res)      })
       .catch((err) => console.log(err));
 };

  const handleCheck = (e) => {
    setRememberMe(e.target.checked);
  };

  const signIn = (values, props) => {
    props.resetForm();
  };

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
 
                <form onSubmit={onSubmit}>
                  <TextField
                    as={TextField}
                    label="Email"
                    placeholder="Enter email"
                    onChange={changeHandler}
                    name='email'
                     value={email}
                    fullWidth
                    required
                  />
                  <TextField
                    as={TextField}
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    onChange={changeHandler}
                   name='password'
                   value={password}
                    fullWidth
                    required
                  />
                  <FormControlLabel
                    name="remember"
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
                    onClick={onSubmit}
                    disabled={props.isSubmitting}
                  >
                    <h3>SIGN IN</h3>
                  </Button>
                </form>
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
