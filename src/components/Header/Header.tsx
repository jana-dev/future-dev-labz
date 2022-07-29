import React from "react";
import { Grid } from "@mui/material";
import { useStyles } from "./Header.styles";

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.headerContainer}>
      <Grid item className={classes.logoContainer}>
        <img src="/assets/logo-full.png" alt="Logo future dev labz" />
      </Grid>
    </Grid>
  );
};

export default Header;
