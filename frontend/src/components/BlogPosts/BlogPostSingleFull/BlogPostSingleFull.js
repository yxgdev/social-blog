import { Container, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import useStyles from "./styles";

const BlogPostSingleFull = () => {
  const params = useParams();
  const dispatch = useDispatch();

  console.log(params);
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h3">Title</Typography>
        <Typography variant="h6">Author</Typography>
        <Typography variant="h6">3 Days ago</Typography>
        <Typography className={classes.paragraph} variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit a laudantium consectetur maiores sint, eveniet quam
          atque, assumenda temporibus quos esse placeat veniam, architecto
          perferendis ab error odit sed hic.
        </Typography>
      </Paper>
    </Container>
  );
};

export default BlogPostSingleFull;
