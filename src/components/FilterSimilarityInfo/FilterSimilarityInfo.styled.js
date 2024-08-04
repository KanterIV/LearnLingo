import styled from "styled-components";

export const StyledFilterSimilarityInfo = styled.div`
  padding: 30px 15px;
  background-color: var(--primary-white);
  border-radius: 14px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .filter-info-picture {
    width: 220px;

    @media screen and (max-width: 767px) {
      margin: 0 auto 20px auto;
    }

    @media screen and (min-width: 768px) {
      width: 360px;
    }
  }

  .filter-info-text {
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.37;
    letter-spacing: -0.02em;

    span {
      font-weight: 600;
    }
  }
`;
