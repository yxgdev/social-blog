import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
  CardContent,
} from "@material-ui/core";

import React from "react";
import useStyles from "./styles";

const BlogPostSingle = ({ post }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.gridItem} xs={12} md={6} lg={4}>
      <Card className={classes.card}>
        <CardActionArea className={classes.actionArea}>
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
      </Card>
    </Grid>
  );
};

export default BlogPostSingle;
