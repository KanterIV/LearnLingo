import styled from "styled-components";

export const StyledEmptyFavoritesPage = styled.div`
  padding: 50px 15px;
  background-color: var(--primary-white);
  border-radius: 14px;

  .empty-page-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
    text-align: center;
  }

  .empty-text {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.37;
    letter-spacing: -0.02em;
  }

  .empty-text-question {
    font-weight: 500;
    margin-bottom: 30px;
  }

  .empty-page-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .empty-page-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    font-size: 18px;
    line-height: 1.37;
    letter-spacing: -0.02em;
  }

  .empty-accent-text {
    display: block;
    width: 68px;

    font-weight: 600;
    font-style: italic;
    position: relative;
    z-index: var(--main-z-index);
    padding: 0px 4px;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 60%;
      background-color: var(--secondary-accent-color);
      border-radius: 4px;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: var(--lowest-z-index);
    }
  }

  .empty-item-icons {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 18px;

    & svg {
      width: 22px;
      height: 22px;

      @media screen and (min-width: 1440px) {
        width: 26px;
        height: 26px;
      }
    }
  }

  & svg:last-child {
    path {
      stroke: var(--accent-color);
      fill: var(--accent-color);
    }
  }
`;
