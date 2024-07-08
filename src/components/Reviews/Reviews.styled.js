import styled from "styled-components";

export const StyledReviews = styled.li`
  .reviewer-details {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
  }

  .reviewer_avatar {
    width: 44px;
    border-radius: 50%;
  }

  .reviewer-name {
    font-weight: 500;
    line-height: 1.5;
    color: var(--primary-grey);
    margin-bottom: 2px;
  }

  .reviewer-rate-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .reviewer-comment {
    font-weight: 500;
    line-height: 1.5;
  }
`;
