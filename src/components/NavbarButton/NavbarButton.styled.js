import styled from "styled-components";

export const StyledNavbarButton = styled.button`
  height: 18px;
  width: 24px;
  padding: 0px;
  background-color: transparent;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .burger-bar {
    width: 100%;
    height: 3px;
    background-color: var(--accent-color);
    border-radius: 6px;
  }

  /* ----- animations----- */
  .burger-bar.clicked:nth-child(1) {
    transform: rotate(45deg) translate(4px, 7px);
    transition: ease-out 0.5s;
  }

  .burger-bar.clicked:nth-child(2) {
    transform: scale(0.1);
    transition: ease-out 0.5s;
  }

  .burger-bar.clicked:nth-child(3) {
    transform: rotate(135deg) translate(-4px, 6px);
    transition: ease-out 0.5s;
  }

  /* -----unclicked-----*/
  .burger-bar.unclicked {
    transform: rotate(0) translate(0);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
  }
`;
