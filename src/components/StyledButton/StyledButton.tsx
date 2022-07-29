import { Button } from "@mui/material";
import { useStyles } from "./StyledButton.styles";

interface ButtonProps {
  buttonText: string;
  handleClick: () => void;
}

const StyledButton = ({ buttonText, handleClick }: ButtonProps) => {
  const classes = useStyles();
  return (
    <Button className={classes.buttonStyle} onClick={handleClick}>
      <div className={classes.buttonTextStyle}>{buttonText}</div>
    </Button>
  );
};

export default StyledButton;
