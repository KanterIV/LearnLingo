import { useDispatch } from "react-redux";
import { StyledButton } from "./Button.styled";

const Button = ({ children, styledClass, buttonType, onClickFunction }) => {
  const dispatch = useDispatch();

  return (
    <StyledButton
      className={`${styledClass}`}
      type={`${buttonType}`}
      onClick={() => dispatch(onClickFunction(true))}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
