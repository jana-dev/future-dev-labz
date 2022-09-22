import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  footerContainer: {
    bottom: 0,
    height: 80,
    zIndex: 9999,
    width: "100%",
    display: "flex",
    color: "#E3E3E3",
    position: "fixed",
    alignItems: "center",
    padding: "12px 80px",
    backgroundColor: "#250f36",
    justifyContent: "space-between",
    background:
      "radial-gradient(circle, #411D5C 0%, #411D5C 30%, #411D5C 25%, rgba(0,0,0,1) 150%)",
    boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.75)",
    "-moz-box-shadow": "0px 0px 15px 0px rgba(0,0,0,0.75)",
    "-webkit-box-shadow": "0px 0px 15px 0px rgba(0,0,0,0.75)",
  },
  footerTitle: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
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
  footerPrice: {
    display: "flex",
    flexWrap: "wrap",
    width: "min-content",
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px!important",
    fontWeight: "100!important",
    lineHeight: "32px!important",
  },
  priceRed: {
    color: "#EB3939",
    fontWeight: 500,
    textDecoration: "line-through",
  },
  priceGreen: {
    fontSize: 30,
    fontWeight: 500,
    color: "#02EF77",
  },
  installments: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export { useStyles };
