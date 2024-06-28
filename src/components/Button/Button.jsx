import { StyledButton } from "./Button.styled";

const Button = ({
  children,
  styledClass,
  buttonType,
  onClickFunction,
  tooltipAnchor,
}) => {
  return (
    <StyledButton
      className={
        tooltipAnchor ? `${styledClass} ${tooltipAnchor}` : `${styledClass}`
      }
      type={`${buttonType}`}
      onClick={onClickFunction ? () => onClickFunction() : null}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
