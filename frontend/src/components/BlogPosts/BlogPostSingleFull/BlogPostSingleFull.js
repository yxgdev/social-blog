import { Container, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getSinglePost } from "../../../actions";
import moment from "moment";
import useStyles from "./styles";

const BlogPostSingleFull = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getSinglePost(params.postId));
  }, [dispatch]);

  const post = useSelector((state) => {
    return state.singlePost;
  });

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography className={classes.title} variant="h3">
          {post.title}
        </Typography>
        <Typography className={classes.author} variant="h6">
          by {post.author}
        </Typography>
        <Typography className={classes.date} variant="subtitle1">
          {moment(post.createdAt).fromNow()}
        </Typography>
        <img className={classes.image} src={post.selectedFile} alt="some" />
        <Typography className={classes.paragraph} variant="body1">
          {post.content}
        </Typography>
      </Paper>
    </Container>
  );
};

export default BlogPostSingleFull;
