import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {
  photo: string;
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  opinionCard: {
    display: "flex",
    alignItems: "center",
    width: "290px!important",
  },
  parentPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    marginBottom: "20px!important",
    backgroundImage: "url(/assets/profiles/1.jpg)",
    // backgroundImage: (props: Props) => `url(${props.photo})`,
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
