import { Grid, Typography } from "@mui/material";
import { useStyles } from "./ContentCard.styles";

interface ContentCardProps {
  title: string;
  items: string[];
}

const ContentCard = ({ title, items }: ContentCardProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.contentContainer}>
      <Grid item className={classes.contentTitle}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item className={classes.contentItems}>
        {items.map((item, i) => {
          return <Typography key={i}>{item}</Typography>;
        })}
      </Grid>
    </Grid>
  );
};

export default ContentCard;
