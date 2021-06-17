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
import * as Yup from 'yup';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const paperStyle = { padding: 20, height: "70vh", width: 400 };
  const avatarStyle = { backgroundColor: "#160D42" };
  const textStyle = { bottom: 20 };
  const btnStyle = { margin: "35px 0" };
  const checkboxStyle = { top: "15px" };
  const validationSchema=Yup.object().shape({
      email: Yup.string().email('Please enter valid email.').required('Required'),
      password: Yup.string().required('Required')
  })
  const initialValues={
      email: '',
      password: '',
      remember: false
  }

  const validate = () => {
    let temp = {};
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCheck = (e) => {
    setRememberMe(e.target.checked);
  };

  const onSubmit=(values, props) => {
      console.log(values)
      setTimeout(() => {
             props.resetForm()
             props.setSubmitting(false)
      }, 1000)
   
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
                //    onChange={handleEmail}
                    name='email'
                    fullWidth
                    required
                    helperText={<ErrorMessage name='email' />}
                  />
                  <Field as={TextField}
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                //    onChange={handlePassword}
                    name='password'
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
