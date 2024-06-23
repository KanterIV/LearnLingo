import styled from "styled-components";

export const StyledTeachersListItem = styled.li`
  .icon-heart-btn {
    border: none;
    background-color: transparent;

    & svg {
      path {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      width: 26px;
      height: 26px;
    }

    &.isFavorite {
      & svg {
        path {
          stroke: var(--accent-color);
          fill: var(--accent-color);
        }
      }
    }
  }
`;
