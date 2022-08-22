import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  cardContainer: {
    width: 210,
    height: 210,
    padding: 20,
    minHeight: 120,
    borderRadius: 20,
    backgroundColor: "white"
  },
  cardIcon: {
    display: "flex",
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    "& > svg": {
      fontSize: 84,
      color: "#918E8E",
    },
  },
  cardText: {
    display: "flex",
    color: "#707070",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    "& > p:nth-of-type(1)": {
      fontSize: 20,
      letterSpacing: -1,
      lineHeight: "28px",
      textAlign: "center",
    },
    "& > p:nth-of-type(2)": {
      fontSize: 32,
      fontWeight: 900,
      letterSpacing: -1,
      lineHeight: "28px",
    },
  },
}))

export {useStyles}