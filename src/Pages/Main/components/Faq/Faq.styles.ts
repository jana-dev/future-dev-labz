import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  faqContainer: {
    display: "flex",
    marginBottom: 80,
    padding: "40px 120px",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(assets/hero-background.png)",
  },
  accordionContainer: {
    width: "100%",
  },
}));

export { useStyles };
