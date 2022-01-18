import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import BlogPostSingle from "./BlogPostSingle/BlogPostSingle";

import useStyles from "./styles";
const BlogPosts = () => {
  const classes = useStyles();
  return (
    <Container align="center">
      <Grid
        className={classes.grid}
        direction="row"
        container
        justifyContent="flex-start"
      >
        <BlogPostSingle></BlogPostSingle>
        <BlogPostSingle></BlogPostSingle>
        <BlogPostSingle></BlogPostSingle>
        <BlogPostSingle></BlogPostSingle>
        <BlogPostSingle></BlogPostSingle>
        <BlogPostSingle></BlogPostSingle>
      </Grid>
    </Container>
  );
};

export default BlogPosts;
