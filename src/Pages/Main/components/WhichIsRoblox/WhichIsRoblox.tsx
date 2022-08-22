import { Grid, Typography } from "@mui/material";

import Player from "./components/Player";
import { useStyles } from "./WhichIsRoblox.styles";

const WhichIsRoblox = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.whichIsContainer}>
      <Grid item className={classes.whichIsVideo}>
        <Grid item className={classes.whichIsTitle}>
          <Typography className={classes.titleContent}>
            <span className={classes.title}>
            O que é Roblox Studio?
            </span>
            <br />
            Neste vídeo a prof Jana explica tudo o que você precisa saber sobre Roblox Studio!
          </Typography>
        </Grid>
        <Player urlVideo="https://youtu.be/sarhXsTKxwU" />
      </Grid>
    </Grid>
  );
};

export default WhichIsRoblox;
