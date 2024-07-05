import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;

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

    @media screen and (min-width: 768px) {
      font-size: 20px;
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
    line-height: 1.25;
  }

  .header-buttons-container {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;
