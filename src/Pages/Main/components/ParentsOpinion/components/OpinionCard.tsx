import { Grid, Typography } from "@mui/material";
import { useStyles } from "./OpinionCard.styles";

interface OpinionCardProps {
  name: string;
  photo: string;
  opinion: string;
}

const OpinionCard = ({ name, opinion, photo }: OpinionCardProps) => {
  const classes = useStyles({photo});
  return (
    <Grid container direction="column" className={classes.opinionCard}>
      <Grid item className={classes.parentPhoto} />
      <Grid item className={classes.parentText}>
        <Typography>{name}</Typography>
        <Typography>{opinion}</Typography>
      </Grid>
    </Grid>
  );
};

export default OpinionCard;
