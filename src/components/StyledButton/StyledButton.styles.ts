import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  buttonStyle: {
    "&.MuiButton-root": {
      height: 40,
      padding: 0,
      minWidth: 220,
      borderRadius: 16,
      transition: "transform .2s",
      animation: "$pulse 0.7s infinite",
      "animation-direction": "alternate",
    },
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
    },
    "100%": {
      transform: "scale(1.1)",
    },
  },
  "@-webkit-keyframes pulse": {
    "0%": {
      "-webkit-transform": "scale(1)",
    },
    "100%": {
      "-webkit-transform": "scale(1.1)",
    },
  },
  buttonTextStyle: {
    fontSize: 20,
    width: "100%",
    height: "100%",
    fontWeight: 500,
    display: "flex",
    borderRadius: 16,
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    textShadow: "0px 2px 5px rgb(0 0 0 / 50%)",
    background: "linear-gradient(to right, #FB7A1E 0%, #9f0ad4 100%)",
  },
}));

export { useStyles };
