import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import useStyles from "./styles";
const AuthForm = () => {
  const [isSignUp, SetIsSignUp] = useState(false);
  const classes = useStyles();

  const handleIsSignUpClick = () =>
    SetIsSignUp((prevIsSignUp) => !prevIsSignUp);
  return (
    <Container className={classes.container} align="center">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5" className={classes.signInLabel} align="center">
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

          <Button
            fullWidth
            className={classes.buttonG}
            color="secondary"
            variant="contained"
          >
            Log in with Google
          </Button>

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
  );
};

export default AuthForm;
