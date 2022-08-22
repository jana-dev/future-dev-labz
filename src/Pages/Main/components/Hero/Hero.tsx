import { Grid, Typography } from "@mui/material";

import { useStyles } from "./Hero.styles";

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.heroContainer} direction="column">
      <Grid item className={classes.heroContent}>
        <Grid item className={classes.heroSlogan}>
          <Typography>
            Seu filho programando com
            <br />
            <img
              alt="roblox studio logo"
              src="assets/roblox-studio.png"
              className={classes.robloxLogo}
            />
            <br />
            do zero ao primeiro jogo!
          </Typography>
          <Typography>
            Se seu filho passa muito tempo jogando roblox{" "}
            <span>faça disso um aprendizado.</span>
            <br />
            Sabemos que a <span>programação é o futuro</span>, e o roblox pode
            proporcionar a porta de entrada para que seu filho venha a adquirir
            conhecimentos e desenvolver
            <span> habilidades na programação!</span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
