import styled from "styled-components";

export const StyledTeachersListItem = styled.li`
  padding: 24px;
  border-radius: 24px;
  background-color: var(--primary-white);
  @media screen and (max-width: 767px) {
    position: relative;
  }

  .teacher-avatar-wrapper {
    position: relative;
    width: 160px;
    height: 160px;
    margin: 0 auto;
    z-index: var(--main-z-index);
    border-radius: 50%;

    @media screen and (max-width: 767px) {
      margin-bottom: 30px;
    }

    & svg {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 12px;
      right: 21px;
    }
  }

  .teacher-avatar-wrapper::before {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: var(--lowest-z-index);
    border: 3px solid var(--accent-color);
  }

  .teacher-avatar {
    width: 100%;
    border-radius: 50%;
  }

  .teacher-name-wrapper {
    margin-bottom: 16px;
  }
  .teachers-category {
    font-weight: 500;
    line-height: 1.5;
    color: var(--primary-grey);
    text-align: center;
    margin-bottom: 6px;
  }

  .teacher-name {
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
    text-align: center;
  }

  .stats-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
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
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    border: none;
    background-color: transparent;

    & svg {
      path {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      width: 20px;
      height: 20px;
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

  .teacher-experience {
    line-height: 1.5;
    margin-bottom: 32px;
  }

  .reviews-list {
    li:not(:last-child) {
      margin-bottom: 32px;
    }

    margin-bottom: 32px;
  }
`;
