import { Grid } from "@mui/material";
import {
  ChildCare,
  AccessTime,
  TaskOutlined,
  QuizOutlined,
  SchoolOutlined,
  SportsEsportsOutlined,
  QuestionAnswerOutlined,
  SentimentVerySatisfiedOutlined,
} from "@mui/icons-material";

import CardDetail from "./components/CardDetails";
import { useStyles } from "./CourseDetials.styles";

const CourseDetails = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      className={classes.courseDetailsContainer}
    >
      <Grid item container justifyContent="center" alignItems="center">
        <Grid item>
          <CardDetail
            icon={<AccessTime />}
            text="duração de"
            textStrong="8 horas"
          />
        </Grid>
        <Grid item>
          <CardDetail
            icon={<SchoolOutlined />}
            text="total de"
            textStrong="30 aulas"
          />
        </Grid>
        <Grid item>
          <CardDetail
            icon={<ChildCare />}
            text="a partir de"
            textStrong="8 anos"
          />
        </Grid>
        <Grid item>
          <CardDetail
            icon={<QuizOutlined />}
            text="questionário para garantir a aprendizagem"
          />
        </Grid>
      </Grid>
      <Grid item container justifyContent="center">
        <Grid item>
          <CardDetail
            icon={<SentimentVerySatisfiedOutlined />}
            text="garantia de"
            textStrong="satisfação"
          />
        </Grid>
        <Grid item>
          <CardDetail
            icon={<SportsEsportsOutlined />}
            text="projeto final com avaliação e feedback"
          />
        </Grid>
        <Grid item>
          <CardDetail
            icon={<TaskOutlined />}
            text="certificado de"
            textStrong="conclusao"
          />
        </Grid>
        <Grid item>
          <CardDetail
            icon={<QuestionAnswerOutlined />}
            text="suporte via whatsapp e discord"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CourseDetails;
