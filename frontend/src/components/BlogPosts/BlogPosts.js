import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import BlogPostSingle from "./BlogPostSingle/BlogPostSingle";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { getBlogPosts } from "../../actions";
const BlogPosts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogPosts());
  }, [dispatch]);

  const blogPosts = useSelector((state) => state.blogPosts);
  return (
    <Container align="center">
      {blogPosts.length == 0 ? (
        <CircularProgress className={classes.loading} />
      ) : (
        <Grid
          className={classes.grid}
          direction="row"
          container
          justifyContent="flex-start"
        >
          {blogPosts.map((post) => {
            return <BlogPostSingle key={post._id} post={post}></BlogPostSingle>;
          })}
        </Grid>
      )}
    </Container>
  );
};

export default BlogPosts;
