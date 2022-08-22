import { Divider, Grid, Typography } from "@mui/material";

import { useStyles } from "./BuyNow.styles";
import StyledButton from "../../../../components/StyledButton/StyledButton";

interface BuyNowProps {
  priceOf: string;
  priceBy: string;
}

const BuyNow = ({ priceOf, priceBy }: BuyNowProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.buwnowContainer}>
      <Grid item className={classes.buynowText}>
        <Typography>
          Como criar jogos com
          <br />
          <span>Roblox Studio</span>
        </Typography>
      </Grid>
      <Grid item className={classes.buynowPrice}>
        <Typography className={classes.priceOf}>de <span>R${priceOf},90</span> por</Typography>
        <Divider />
        <Typography className={classes.priceBy}>
          R$<span className={classes.priceBig}>{priceBy}</span>,90
        </Typography>
        <Typography className={classes.installment}>
        em até <span>12x</span> sem juros!
        </Typography>
      </Grid>
      <StyledButton
        buttonText="Comprar agora!"
        handleClick={() => alert("comprar")}
      />
    </Grid>
  );
};

export default BuyNow;
