import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  whichIsContainer: {
    display: "flex",
    height: "100vh",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundSize: "cover",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(assets/hero-background.png)",
  },
  whichIsVideo: {
    width: "47%",
  },
  whichIsTitle: {
    marginBottom: "24px!important",
  },
  titleContent: {
    color: "#585858",
    fontSize: "18px!important",
  },
  title: {
    fontWeight: 500,
    color: "#3C3C3C",
    fontSize: "36px!important",
  },
  buyNow: {
    width: "48%",
  },
}));

export { useStyles };
