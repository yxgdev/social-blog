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
    console.log(state, "ah");
    return state.singlePost;
  });

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h3">{post.title}</Typography>
        <Typography variant="h6">{post.author}</Typography>
        <Typography variant="h6">{moment(post.createdAt).fromNow()}</Typography>
        <Typography className={classes.paragraph} variant="body1">
          {post.content}
        </Typography>
      </Paper>
    </Container>
  );
};

export default BlogPostSingleFull;
