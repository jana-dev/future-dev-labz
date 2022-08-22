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
    // position: "relative",
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
    // position: "absolute",
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
  robloxLogo: {
    width: "80%",
    position: "relative",
    "&:hover": {
      animation: "$shake 0.8s infinite",
      // "animation-direction": "alternate",
      "animation-iteration-count": "both infinite",
    },
  },
  "@keyframes shake": {
    "0%": {
      transform: "translate(1px, 1px) rotate(0deg)",
    },
    "10%": {
      transform: "translate(-1px, -2px) rotate(-1deg)",
    },
    "20%": {
      transform: "translate(-3px, 0px) rotate(1deg)",
    },
    "30%": {
      transform: "translate(3px, 2px) rotate(0deg)",
    },
    "40%": {
      transform: "translate(1px, -1px) rotate(1deg)",
    },
    "50%": {
      transform: "translate(-1px, 2px) rotate(-1deg)",
    },
    "60%": {
      transform: "translate(-3px, 1px) rotate(0deg)",
    },
    "70%": {
      transform: "translate(3px, 1px) rotate(-1deg)",
    },
    "80%": {
      transform: "translate(-1px, -1px) rotate(1deg)",
    },
    "90%": {
      transform: "translate(1px, 2px) rotate(0deg)",
    },
    "100%": {
      transform: "translate(1px, -2px) rotate(-1deg)",
    },
  },
  "@-webkit-keyframes shake": {
    "0%": {
      "-webkit-transform": "translate(1px, 1px) rotate(0deg)",
    },
    "10%": {
      "-webkit-transform": "translate(-1px, -2px) rotate(-1deg)",
    },
    "20%": {
      "-webkit-transform": "translate(-3px, 0px) rotate(1deg)",
    },
    "30%": {
      "-webkit-transform": "translate(3px, 2px) rotate(0deg)",
    },
    "40%": {
      "-webkit-transform": "translate(1px, -1px) rotate(1deg)",
    },
    "50%": {
      "-webkit-transform": "translate(-1px, 2px) rotate(-1deg)",
    },
    "60%": {
      "-webkit-transform": "translate(-3px, 1px) rotate(0deg)",
    },
    "70%": {
      "-webkit-transform": "translate(3px, 1px) rotate(-1deg)",
    },
    "80%": {
      "-webkit-transform": "translate(-1px, -1px) rotate(1deg)",
    },
    "90%": {
      "-webkit-transform": "translate(1px, 2px) rotate(0deg)",
    },
    "100%": {
      "-webkit-transform": "translate(1px, -2px) rotate(-1deg)",
    },
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
