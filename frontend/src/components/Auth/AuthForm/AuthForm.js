import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AUTH } from "../../../constants/actionTypes";
import useStyles from "./styles";
const AuthForm = () => {
  console.log();
  const [isSignUp, SetIsSignUp] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onGoogleSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    dispatch({ type: AUTH, payload: { result, token } });

    // redirect
    navigate("/");
  };
  const onGoogleFailure = () => {};

  const handleIsSignUpClick = () =>
    SetIsSignUp((prevIsSignUp) => !prevIsSignUp);

  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(user);

  return (
    !user && (
      <Container className={classes.container} align="center">
        <Paper className={classes.paper} elevation={3}>
          <Typography
            variant="h5"
            className={classes.signInLabel}
            align="center"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Typography>
          <form className={classes.form} action="">
            {isSignUp && (
              <>
                <TextField
                  fullWidth
                  className={classes.textField}
                  name="firstName"
                  type="firstName"
                  placeholder="First Name"
                  required
                  label="First Name"
                ></TextField>
                <TextField
                  fullWidth
                  name="lastName"
                  type="lastName"
                  placeholder="LastName"
                  required
                  label="LastName"
                  className={classes.textField}
                ></TextField>
              </>
            )}
            <TextField
              fullWidth
              className={classes.textField}
              name="email"
              type="email"
              placeholder="Email"
              required
              label="Email"
            ></TextField>
            <TextField
              className={classes.textField}
              fullWidth
              name="password"
              type="password"
              placeholder="Password"
              required
              label="Password"
            ></TextField>
            <Button
              fullWidth
              className={classes.button}
              color="secondary"
              variant="contained"
            >
              {isSignUp ? "sign up" : "sign in"}
            </Button>
            <GoogleLogin
              onSuccess={onGoogleSuccess}
              onFailure={onGoogleFailure}
              clientId={process.env.REACT_APP_GOOGLE_ID}
              cookiePolicy="single_host_origin"
              render={(renderProps) => (
                <Button
                  fullWidth
                  className={classes.buttonG}
                  color="secondary"
                  variant="contained"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Log in with Google
                </Button>
              )}
            ></GoogleLogin>

            <Button
              onClick={handleIsSignUpClick}
              fullWidth
              className={classes.buttonS}
              variant="outlined"
            >
              {isSignUp
                ? "have an account? sign in"
                : "dont have an  account? sign up"}
            </Button>
          </form>
        </Paper>
      </Container>
    )
  );
};

export default AuthForm;
