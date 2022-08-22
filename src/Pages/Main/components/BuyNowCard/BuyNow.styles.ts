import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  buwnowContainer: {
    padding: 32,
    maxWidth: 330,
    color: "#E3E3E3",
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#483258",
    boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.75)",
    "-moz-box-shadow": "0px 0px 15px 0px rgba(0,0,0,0.75)",
    "-webkit-box-shadow": "0px 0px 15px 0px rgba(0,0,0,0.75)",
  },
  buynowText: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "24px!important",
    "& > p": {
      fontSize: 18,
      lineHeight: "28px",
      textAlign: "center",
      "& > span": {
        fontSize: 36,
        letterSpacing: 1,
        fontFamily: "fantasy!important",
      },
    },
  },
  buynowPrice: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "42px!important",
    "& > p": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  priceOf: {
    fontSize: "24px!important",
    "& > span": {
      fontSize: 28,
      color: "#EB3939",
      textDecoration: "line-through",
    },
  },
  priceBy: {
    lineHeight: "1!important",
    textAlign: "center",
    fontSize: "32px!important",
  },
  priceBig: {
    fontSize: 92,
    fontWeight: 900,
  },
  installment: {
    lineHeight: "28px",
    textAlign: "center",
    fontSize: "18px!important",
    "& > span": {
      color: "#02EF77",
      fontWeight: 900,
    },
  },
}));

export { useStyles };
