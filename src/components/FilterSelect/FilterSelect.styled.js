import styled from "styled-components";

export const StyledFilterSelectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    .filter-list-item:nth-child(1) {
      width: 221px;
    }

    .filter-list-item:nth-child(2) {
      width: 198px;
    }

    .filter-list-item:nth-child(3) {
      width: 124px;
    }
  }

  .filter-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: var(--primary-grey);

    margin-bottom: 8px;
  }
`;
