import { Grid } from "@mui/material";
import ContentCard from "./components/ContentCard";

import { useStyles } from "./CourseContent.styles";
import { FirstModule, SecondModule, ThirdModule } from "./utils";

const CourseContent = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.courseContentContainer}
      direction="column"
    >
      <Grid item>
        <ContentCard title="Módulo 1 - Introdução" items={FirstModule} />
        <ContentCard
          title="Módulo 2 - Criando um Obby com Scripts"
          items={SecondModule}
        />
        <ContentCard
          title="Módulo 3 - Projeto Individual"
          items={ThirdModule}
        />
      </Grid>
    </Grid>
  );
};

export default CourseContent;
