import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  buttonStyle: {
    "&.MuiButton-root": {
      height: 60,
      minWidth: 220,
      borderRadius: 20,
      padding: "0 24px",
      backgroundColor: "#ffffff",
      transition: "transform .2s",
      "&:hover": {
        transform: "scale(1.05)",
        backgroundColor: "#ffffff",
      },
    },
  },
  buttonTextStyle: {
    fontSize: 24,
    width: "100%",
    height: "100%",
    fontWeight: 900,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to right, #FB7A1E 0%, #9f0ad4 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
  },
}));

export { useStyles };
