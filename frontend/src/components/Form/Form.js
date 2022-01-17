import React from "react";

import useStyles from "./style";
import { Paper, Container, AppBar, Typography } from "@material-ui/core";
const Form = () => {
  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <AppBar>
        <Typography className={classes.brand} variant="h3">
          {" "}
          What sups
        </Typography>
      </AppBar>
      <Container>wd</Container>
    </Paper>
  );
};

export default Form;
