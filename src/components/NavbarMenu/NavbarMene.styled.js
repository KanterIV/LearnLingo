import styled from "styled-components";

export const StyledNavbarMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100dvw;
  height: 100dvh;
  padding: 100px 20px 0px 20px;
  background: linear-gradient(#ffffff, #9fbaae);
  transform: translateX(-100%);
  z-index: var(--main-z-index);

  &.navbar-background {
    background: linear-gradient(#f8f8f8, #9fbaae);
  }

  .navbar-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 100px;
  }

  .navbar-link {
    font-size: 32px;
    line-height: 1.25;
    color: #121417;
  }

  .navbar-button-container {
    display: flex;
    justify-content: center;
    gap: 10px;

    @media screen and (min-width: 350px) {
      gap: 16px;
    }
  }
`;
