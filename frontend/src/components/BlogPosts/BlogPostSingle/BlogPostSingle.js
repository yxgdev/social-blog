import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
  CardContent,
  Button,
} from "@material-ui/core";

import React from "react";

import { useDispatch } from "react-redux";
import { deletePost, updateViewCount } from "../../../actions";
import useStyles from "./styles";
import Visibility from "@material-ui/icons/Visibility";

const BlogPostSingle = ({ post, handleActionArea }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleButtonClick = (id) => {
    console.log(id);
    dispatch(deletePost(id));
  };

  return (
    <Grid item className={classes.gridItem} xs={12} md={6} lg={4}>
      <Card className={classes.card}>
        <CardActionArea
          onClick={() => handleActionArea(post._id)}
          className={classes.actionArea}
        >
          <CardContent className={classes.cardContent}>
            <CardMedia
              className={classes.media}
              component="img"
              height="150"
              src={post.selectedFile}
            ></CardMedia>
            <Typography variant="h6"> {post.title}</Typography>
            <Typography variant="subtitle1"> {post.content}</Typography>
          </CardContent>
        </CardActionArea>
        <div className={classes.views}>
          <Visibility />
          <Typography className={classes.viewsWord} variant="subtitle2">
            {post.views} Views
          </Typography>
        </div>

        <Button
          className={classes.button}
          onClick={() => handleButtonClick(post._id)}
          variant="contained"
          color="secondary"
        >
          DELETE
        </Button>
      </Card>
    </Grid>
  );
};

export default BlogPostSingle;
