import { Grid, Typography } from "@mui/material";

import { useStyles } from "./CardDetails.styles";

interface CardDetailProps {
  icon: React.ReactNode;
  text: string;
  textStrong?: string;
}

const CardDetail = ({ icon, text, textStrong }: CardDetailProps) => {
  const classes = useStyles();
  return (
    <Grid className={classes.cardContainer}>
      <Grid className={classes.cardIcon}>
        {icon}
      </Grid>
      <Grid className={classes.cardText} direction="column">
        <Typography>{text}</Typography>
        {textStrong && <Typography>{textStrong}</Typography>}
      </Grid>
    </Grid>
  );
};

export default CardDetail;
