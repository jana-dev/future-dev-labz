import { Grid, Typography } from "@mui/material";

import { useStyles } from "./Hero.styles";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.heroContainer} direction="column">
      <Grid item className={classes.heroContent}>
        <Grid item className={classes.heroSlogan}>
          <Typography>
            Seu filho programando com
            <br />
            <span>
              roblox studio
              <img
                src="assets/roblox-studio-logo.png"
                alt="rblox studio logo"
              />
            </span>
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
        <Grid className={classes.heroButton}>
          <StyledButton
            buttonText="comece agora!"
            handleClick={() => alert("teste")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
