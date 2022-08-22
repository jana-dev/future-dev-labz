import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  contentContainer: {
    marginBottom: 20,
    maxWidth: "100%",
  },
  contentTitle: {
    height: 60,
    padding: 22,
    width: "100%",
    color: "#FFFFFF",
    backgroundColor: "#423D3D",
  },
  contentItems: {
    padding: 22,
    width: "100%",
    color: "#FFFFFF",
    backgroundColor: "#272222",
  }
}));

export { useStyles };
