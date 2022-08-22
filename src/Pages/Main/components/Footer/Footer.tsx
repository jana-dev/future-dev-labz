import { Divider, Grid, Typography } from "@mui/material";

import { useStyles } from "./Footer.styles";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.footerContainer}>
      <Grid className={classes.footerTitle}>
        <Typography>
          Como criar jogos com
          <br />
          <span>Roblox Studio</span>
        </Typography>
      </Grid>
      <Divider orientation="vertical" color="#E3E3E3"/>
      <Grid className={classes.footerPrice}>
        <Typography className={classes.price}>
          de <span className={classes.priceRed}>R$549,90</span> por 
          <span className={classes.priceGreen}>R$289,90</span>
        </Typography>
        <Typography className={classes.installments}>
          em até 12x sem juros!
        </Typography>
      </Grid>
      <Divider orientation="vertical" color="#E3E3E3" />
      <StyledButton
        buttonText="Comprar agora!"
        handleClick={() => alert("comprar")}
      />
    </Grid>
  );
};

export default Footer;
