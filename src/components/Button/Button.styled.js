import styled from "styled-components";

export const StyledButton = styled.button`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  border: none;
  border-radius: 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.registerBtn {
    width: 166px;
    height: 48px;
    font-size: 16px;
    color: var(--primary-white);
    background-color: var(--primary-black);
  }

  &.loginBtn {
    display: flex;
    align-items: center;
    gap: 8px;

    background-color: transparent;
    & svg {
      path {
        stroke: var(--accent-color);
      }
      width: 20px;
      height: 20px;
    }
  }
`;
