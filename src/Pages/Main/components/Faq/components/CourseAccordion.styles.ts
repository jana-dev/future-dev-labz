import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  accordion: {
    "&.MuiAccordion-root": {
      margin: 20,
      color: "white",
      borderRadius: 0,
      backgroundColor: "#423D3D",
      "&.Mui-expanded": {
        margin: 20
      },
    },
  },
  accordionDetails: {
    backgroundColor: "#272222",
  },
}));

export { useStyles };
