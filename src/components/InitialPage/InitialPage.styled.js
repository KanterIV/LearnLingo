import styled from "styled-components";
import StatsBorder from "../../assets/icons/border-img.svg";

export const StyledInitialPage = styled.div`
  padding-bottom: 32px;

  .wrapper {
    margin-bottom: 20px;
  }

  .initialpage-picture {
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  .info-wrapper {
    padding: 46px 32px;
    border-radius: 30px;
    background-color: var(--secondary-white);
  }

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 24px;
  }

  .accent-word {
    font-style: italic;
    position: relative;
    z-index: var(--main-z-index);
    padding: 0px 4px;
  }

  .accent-word::before {
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

  .description {
    font-size: 14px;
    line-height: 1.37;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
  }

  .stats-list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 40px 32px;
  }

  .stats-list::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    background: url("${StatsBorder}") center/cover;
    pointer-events: none;
    z-index: 1;
  }

  .stats-list-item {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media screen and (max-width: 767px) {
    .stats-list-item:nth-child(2n) {
      margin-left: auto;
    }
  }

  .stats-item-text {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: var(--third-black);
  }

  .stats-item-accent {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.14;
    letter-spacing: -0.02em;
  }
`;
