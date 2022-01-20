import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import useStyles from "./styles";
const AuthPrompt = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Grid className={classes.grid} container direction="row">
          <Grid item>
            <Typography variant="h5" className={classes.typography}>
              Sign in to create post
            </Typography>
          </Grid>
          <Grid item>
            <Link className={classes.link} to="/auth">
              <Button variant="contained" color="secondary">
                SIGN IN
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AuthPrompt;
