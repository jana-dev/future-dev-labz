import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  videoContainer: {
    width: "100%",
    position: "relative",
    paddingTop: "56.25%",
  },
  videoPlayer: {
    top: 0,
    left: 0,
    position: "absolute",
  },
}));

export { useStyles };
