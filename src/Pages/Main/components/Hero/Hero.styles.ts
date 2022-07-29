import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  heroContainer: {
    backgroundSize: "cover",
    backgroundColor: "#F2F2F2",
    height: "calc(100vh - 40px)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(assets/roblox-wallpaper.jpg)",
  },
  heroContent: {
    height: "100%",
    display: "flex",
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backdropFilter: "blur( 2px )",
    backgroundColor: "rgba( 0, 0, 0, 0.70 )",
  },
  heroSlogan: {
    top: 120,
    width: "70%",
    display: "flex",
    flexWrap: "wrap",
    position: "absolute",
    justifyContent: "center",
    marginTop: "24px!important",
    "& > p:nth-of-type(1)": {
      fontSize: 44,
      color: "#E3E3E3",
      lineHeight: "52px",
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase",
      textShadow: "0px 2px 5px rgb(0 0 0 / 85%)",
      "& > span": {
        fontSize: 56,
        color: "#009FFF",
        lineHeight: "64px",
        "& > img": {
          width: 50,
          marginLeft: 24,
          filter: "drop-shadow(0px 2px 5px rgba(0 0 0 / 85%))",
        },
      },
    },
    "& > p:nth-of-type(2)": {
      fontSize: 20,
      marginTop: 20,
      fontWeight: 400,
      color: "#E3E3E3",
      lineHeight: "28px",
      textAlign: "center",
      textShadow: "0px 2px 5px rgb(0 0 0 / 50%)",
      "& > span": {
        fontWeight: 600,
        color: "#C77A44",
      },
    },
  },
  heroButton: {
    bottom: 120,
    position: "absolute",
  },
  heroImage: {
    bottom: 10,
    width: "100%",
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "60px!important",
    "& > img": {
      width: "60%",
    },
  },
}));

export { useStyles };
