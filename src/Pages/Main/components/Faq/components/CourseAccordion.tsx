import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";

import { useStyles } from "./CourseAccordion.styles";

interface AccordionProps {
  title: string;
  content: string;
}

const CourseAccordion = ({ title, content }: AccordionProps) => {
  const classes = useStyles();

  return (
    <Accordion
      classes={{root: classes.accordion}}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CourseAccordion;
