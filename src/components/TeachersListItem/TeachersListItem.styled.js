import styled from "styled-components";

export const StyledTeachersListItem = styled.li`
  padding: 24px;
  border-radius: 24px;
  background-color: var(--primary-white);

  @media screen and (max-width: 767px) {
    position: relative;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 48px;
  }

  .left-side-wrapper {
    @media screen and (max-width: 767px) {
      margin-bottom: 24px;
    }
  }

  .common-info-wrapper {
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
      display: flex;
      align-items: flex-start;
    }
  }

  .teacher-avatar-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 190px;
    height: 190px;
    z-index: var(--main-z-index);
    border-radius: 50%;

    @media screen and (max-width: 767px) {
      margin: 0 auto;
    }

    @media screen and (min-width: 768px) {
      width: 120px;
      height: 120px;
    }

    & svg {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 26px;
      right: 36px;

      @media screen and (min-width: 768px) {
        width: 12px;
        height: 12px;
        top: 19px;
        right: 21px;
      }
    }
  }

  .teacher-avatar-wrapper::before {
    content: "";
    position: absolute;
    width: 190px;
    height: 190px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: var(--lowest-z-index);
    border: 3px solid var(--accent-color);

    @media screen and (min-width: 768px) {
      width: 120px;
      height: 120px;
    }
  }

  .teacher-avatar {
    width: 160px;
    height: 160px;
    border-radius: 50%;

    @media screen and (min-width: 768px) {
      width: 96px;
      height: 96px;
    }
  }

  .right-side-wrapper {
    @media screen and (min-width: 1440px) {
      width: 100%;
    }
  }

  .teacher-name-wrapper {
    @media screen and (max-width: 767px) {
      margin-bottom: 16px;
    }
  }

  .teachers-category {
    font-weight: 500;
    line-height: 1.5;
    color: var(--primary-grey);
    text-align: center;
    margin-bottom: 6px;

    @media screen and (min-width: 768px) {
      margin-bottom: 8px;
      text-align: start;
    }
  }

  .teacher-name {
    width: 100%;
    margin: 0 auto;
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
    text-align: center;

    @media screen and (min-width: 768px) {
      width: 150px;
      text-align: start;
      font-size: 20px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 24px;
      width: 271px;
    }
  }

  .stats-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media screen and (min-width: 768px) {
      column-gap: 16px;
      row-gap: 8px;
    }

    @media screen and (min-width: 1440px) {
      gap: 32px;
      margin-right: auto;
    }
  }

  .stats-list-item:nth-child(2n + 1) {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .stats-text-content {
    font-weight: 500;
    line-height: 1.5;
  }

  .stats-price {
    color: var(--green-price);
  }
  .icon-heart-btn {
    @media screen and (max-width: 767px) {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 100%);
    }

    border: none;
    background-color: transparent;

    & svg {
      width: 20px;
      height: 20px;

      @media screen and (min-width: 1440px) {
        width: 26px;
        height: 26px;
      }
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

  .teacher-info {
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 8px;
  }

  .conditions {
    margin-bottom: 16px;
  }

  .teacher-info-subtitle {
    color: var(--primary-grey);
  }

  .teacher-speaks {
    text-decoration: underline;
  }

  .rest-teacher-info {
    margin-bottom: 32px;
  }
  .teacher-experience {
    line-height: 1.5;
    margin-bottom: 32px;
  }

  .reviews-list {
    li:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;
