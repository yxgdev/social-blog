import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
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
  console.log(blogPosts, "ahh");
  return (
    <Container align="center">
      <Grid
        className={classes.grid}
        direction="row"
        container
        justifyContent="flex-start"
      >
        {blogPosts.map((post) => {
          console.log(post);
          console.log("hi");
          return <BlogPostSingle key={post._id} post={post}></BlogPostSingle>;
        })}
      </Grid>
    </Container>
  );
};

export default BlogPosts;
