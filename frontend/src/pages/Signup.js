import { StyledContainer } from "./../components/Styles2";
import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { auth } from "./../components/Firebase";
import { useHistory } from "react-router-dom";
import {registerUser} from "./../components/User/UserSlice"
import { useDispatch } from 'react-redux';







export default function SignUp() {
  const paperStyle = { padding: "30px 20px", width: 450 };
  const headerStyle = { margin: "15px" };
  const avatarStyle = { backgroundColor: "#160D42" };
  const btnStyle = { margin: "35px 0"};
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  //const { name, email, password, passwordConfirmation } = userInfo;
  const changeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(userInfo)
  };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserInfo((currentState) => ({
            ...currentState,
            [id]: value,
        }));
    };

//   const signUp = (e) => {
//     e.preventDefault();
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((user) => history.push("/dashboard"))
//       .catch((err) => console.log(err));
//   };
const dispatch = useDispatch();
const handleSubmit = () => {
    dispatch(registerUser(userInfo));
};

  return (
    <>
      <StyledContainer>
        <Grid className="grid">
          <Paper elevation={20} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <AddCircleOutlineOutlinedIcon />
              </Avatar>
              <h2 style={headerStyle}>Sign Up</h2>
              <Typography variant="caption">
                Please fill this form to create an account.
              </Typography>
            </Grid>
            <form id="signup-form">
                <TextField
                fullWidth
                label="Name"
              name="name"
                placeholder="Enter your name"
                id="name"
                onChange={changeHandler}
               // value={name}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                placeholder="Enter your email"
                id="signup-email"
                onChange={changeHandler}
              //  value={email}
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                placeholder="Create a password"
                id="signup-password"
                onChange={changeHandler}
             //   value={password}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                placeholder="Confirm your password"
                id="signup-confirm"
                name="passwordConfirmation"
                onChange={changeHandler}
              //  value={passwordConfirmation}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={btnStyle}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            </form>
          </Paper>
        </Grid>
      </StyledContainer>
    </>
  );
}
