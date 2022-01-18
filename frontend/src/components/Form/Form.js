import React, { useEffect, useState } from "react";
import {
  Paper,
  Container,
  AppBar,
  Typography,
  SvgIcon,
  Grid,
  TextField,
  Collapse,
  Button,
} from "@material-ui/core";

import FileBase64 from "react-file-base64";
import useStyles from "./styles";

const initialState = {
  title: "",
  content: "",
  selectedFile: "",
  author: "",
  createdAt: "",
};
const Form = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);

  const [state, setState] = useState(initialState);

  const handleCollapseButton = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Container className={classes.container} align="center">
      <Paper className={classes.paper} elevation={10}>
        <form action="" className={classes.form}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={6}>
              <Typography variant="h6" align="left">
                Make a New Blog
              </Typography>
            </Grid>
            <Grid item>
              <Button
                color={collapsed ? "secondary" : "primary"}
                onClick={handleCollapseButton}
                variant="contained"
              >
                {collapsed ? "cancel" : "Create Post"}
              </Button>
            </Grid>
          </Grid>
          <Collapse in={collapsed}>
            <Grid
              direction="row"
              justifyContent="flex-start"
              container
              className={classes.grid}
            >
              <Grid className={classes.textField} item xs={12}>
                <TextField fullWidth label="Title"></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  label="Content"
                ></TextField>

                <Grid className={classes.fileBase} item xs={12}>
                  <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setState({ ...state, image: base64 })
                    }
                  ></FileBase64>
                </Grid>
              </Grid>
            </Grid>
          </Collapse>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;

// title: String,
//   content: String,
//   selectedFile: String,
//   author: String,
//   createdAt: {
//     type: Date,
//     required: true,
