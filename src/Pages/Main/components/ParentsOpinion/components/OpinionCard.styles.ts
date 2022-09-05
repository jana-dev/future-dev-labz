import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  opinionCard: {
    padding: 20,
    display: "flex",
    alignItems: "center",
    width: "290px!important",
  },
  parentPhoto: {
    width: 100,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > img": {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      marginBottom: "20px!important",
    },
  },
  parentText: {
    textAlign: "center",
    "& > p:nth-of-type(1)": {
      fontSize: 20,
      color: "#4A4A4A",
      fontWeight: "bold",
    },
    "& > p:nth-of-type(2)": {
      color: "#3A3A3A",
      fontStyle: "italic",
    }
  },
}));

export { useStyles };
