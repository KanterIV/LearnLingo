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

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

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

    &:hover,
    &:focus {
      transform: scale(1);
    }

    &:active {
      transform: scale(1);
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

    @media screen and (min-width: 768px) {
      width: 230px;
      margin: 0;
    }

    @media screen and (min-width: 1440px) {
      width: 267px;
      font-size: 18px;
    }
  }

  &.bookBtn {
    @media screen and (max-width: 767px) {
      font-size: 16px;
      width: 210px;
      height: 54px;
    }
    background-color: var(--accent-color);
    width: 232px;
    height: 60px;
  }

  &.loadMoreBtn {
    @media screen and (max-width: 767px) {
      width: 160px;
      height: 54px;
      font-size: 16px;
    }

    width: 183px;
    height: 60px;
    margin: 0 auto;
    background-color: var(--accent-color);
  }

  &.readMoreBtn {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    background-color: transparent;
    margin-bottom: 32px;

    &:hover,
    &:focus {
      transform: scale(1);
    }

    &:active {
      transform: scale(1);
    }
  }

  &.form-btn {
    width: 100%;
    height: 60px;
    margin-top: 40px;
    line-height: 1.56;
    background-color: var(--accent-color);

    @media screen and (max-width: 1439px) {
      font-size: 16px;
    }
  }
`;
