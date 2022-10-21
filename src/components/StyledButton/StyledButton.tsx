import { Button } from "@mui/material";
import { useStyles } from "./StyledButton.styles";

interface ButtonProps {
  buttonText: string;
  handleClick: () => void;
  color?: string;
}

const StyledButton = ({ buttonText, handleClick }: ButtonProps) => {
  const classes = useStyles();
  return (
    <Button className={classes.buttonStyle} onClick={handleClick}>
      <div className={classes.buttonTextStyle}>{buttonText}</div>
    </Button>
  );
};

StyledButton.defaultProps = {
  buttonText: "Botão"
}

export default StyledButton;
