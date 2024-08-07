import styled from "styled-components";

export const StyledHeader = styled.header`
  &.header-background {
    background-color: var(--secondary-white);
  }

  @media screen and (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-nav {
    display: flex;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 500;
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }

    &:hover,
    &:focus {
      scale: 1.05;
    }
  }

  .logo-svg {
    width: 40px;
    height: 40px;

    @media screen and (min-width: 768px) {
      width: 28px;
      height: 28px;
    }
  }

  .header-list {
    display: flex;
    align-items: center;
    gap: 28px;
  }

  .header-link {
    position: relative;
    line-height: 1.25;
    z-index: var(--main-z-index);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 768px) {
      display: block;
      padding: 34px 0px;

      &:hover,
      &:focus {
        color: var(--accent-color);
      }
    }
  }

  .header-link.active::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: var(--secondary-accent-color);
    border-radius: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 170%);
    z-index: var(--lowest-z-index);
  }

  .header-buttons-container {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;
