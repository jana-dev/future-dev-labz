import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  wichIsContainer: {
    height: "calc(100vh - 40px)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(assets/hero-background.png)",
  },
}));

export { useStyles };
