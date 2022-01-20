import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  container: {
    marginTop: "20px",
    maxWidth: "50%",
  },
  paper: {
    padding: "20px",
  },
  grid: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  link: {
    textDecoration: "none",
  },
}));
