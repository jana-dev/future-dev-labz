import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  opinionContainer: {
    width: "100%",
    marginBottom: 80,
    padding: "40px 60px",
    backgroundSize: "cover",
    backgroundColor: "#B0EEFF",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    justifyContent: "space-between",
    boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.50)",
    backgroundImage: "url(assets/hero-background.png)",
    "-moz-box-shadow": "0px 0px 30px 0px rgba(0,0,0,0.50)",
    "-webkit-box-shadow": "0px 0px 30px 0px rgba(0,0,0,0.50)",
  },
}));

export { useStyles };
