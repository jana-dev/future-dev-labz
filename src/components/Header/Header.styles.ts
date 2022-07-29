import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  headerContainer: {
    top: 0,
    height: 40,
    zIndex: 9999,
    display: "flex",
    position: "sticky",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CDCDCD",
    // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    // background: "rgb(52,52,52)",
    // background: "linear-gradient(80deg, rgba(37,15,54,1) 0%, rgba(242,242,242,1) 30%, rgba(242,242,242,1) 70%, rgba(37,15,54,1) 100%)",
    background: "radial-gradient(circle, rgba(176,238,255,1) 0%, rgba(176,238,255,1) 30%, rgba(176,238,255,1) 25%, rgba(0,0,0,1) 150%)",
  },
  logoContainer: {
    width: 280,
    height: 110,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B0EEFF",
    borderRadius: "0 0 35px 35px",
    // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    "& > img": {
      width: "85%"
    },
  }
}));

export { useStyles };
