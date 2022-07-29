import { Grid } from "@mui/material";
import { useStyles } from "./WhichIsRoblox.styles";

const WhichIsRoblox = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.wichIsContainer}>
      <Grid item>
        <p>olá mundo</p>
      </Grid>
    </Grid>
  );
};

export default WhichIsRoblox;
