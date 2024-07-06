import styled from "styled-components";

export const StyledButton = styled.button`
  display: block;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  border: none;
  border-radius: 12px;
  color: var(--primary-black);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.registerBtn {
    width: 166px;
    height: 48px;
    font-size: 16px;
    color: var(--primary-white);
    background-color: var(--primary-black);
  }

  &.login-logout-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    background-color: transparent;

    & svg {
      path {
        stroke: var(--accent-color);
      }
      width: 20px;
      height: 20px;
    }
  }

  &.logout-btn {
    & svg {
      path {
        fill: var(--accent-color);
      }
    }
  }

  &.navbar-register-btn {
    font-size: 18px;
    width: 170px;
    height: 52px;
  }

  &.navbar-login-logout-btn {
    font-size: 20px;
    gap: 10px;
    & svg {
      path {
        stroke: var(--accent-color);
      }
      width: 32px;
      height: 32px;
    }
  }

  &.logaut-navbar-centering {
    margin: 0 auto;

    & svg {
      path {
        fill: var(--accent-color);
      }
    }
  }

  &.get-started-btn {
    width: 100%;
    height: 60px;
    margin: 0 auto;

    border-radius: 12px;
    background-color: var(--accent-color);
    font-size: 16px;
    line-height: 1.56;
  }

  &.form-btn {
    width: 100%;
    height: 60px;
    line-height: 1.56;
    background-color: var(--accent-color);
  }
`;
