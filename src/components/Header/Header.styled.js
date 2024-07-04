import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
    }
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
`;
