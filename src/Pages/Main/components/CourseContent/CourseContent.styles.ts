import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  courseContentContainer: {
    padding: 80,
    display: "flex",
    alignItems: "center",
    backgroundSize: "cover",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(assets/hero-background.png)",
  }
}));

export { useStyles };
