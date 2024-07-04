import styled from "styled-components";

export const StyledNavbarMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  padding: 100px 20px 0px 20px;
  background: linear-gradient(#ffffff, #9fbaae);
  transform: translateX(-100%);

  .navbar-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 100px;
  }

  .navbar-list-item {
    font-size: 500;
    font-size: 32px;
    line-height: 1.25;
    color: #121417;
  }

  .navbar-button-container {
    display: flex;
    justify-content: space-around;
  }
`;
