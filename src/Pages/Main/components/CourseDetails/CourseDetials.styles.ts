import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  courseDetailsContainer: {
    padding: "40px 60px",
    width: "100%",
    // display: "flex",
    // alignItems: "center",
    backgroundSize: "cover",
    // justifyContent: "center",
    backgroundColor: "#B0EEFF",
    height: "calc(100vh - 40px)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.50)",
    backgroundImage: "url(assets/hero-background.png)",
    "-moz-box-shadow": "0px 0px 30px 0px rgba(0,0,0,0.50)",
    "-webkit-box-shadow": "0px 0px 30px 0px rgba(0,0,0,0.50)",
  }
}));

export { useStyles };
