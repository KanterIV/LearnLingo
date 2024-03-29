import { StyledButton } from "./Button.styled";

const Button = ({ children, styledClass }) => {
  return <StyledButton className={`${styledClass}`}>{children}</StyledButton>;
};

export default Button;
