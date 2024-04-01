import { StyledButton } from "./Button.styled";

const Button = ({ children, styledClass, buttonType }) => {
  return (
    <StyledButton className={`${styledClass}`} type={`${buttonType}`}>
      {children}
    </StyledButton>
  );
};

export default Button;
