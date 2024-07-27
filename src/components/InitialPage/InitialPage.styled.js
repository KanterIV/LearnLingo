import styled from "styled-components";
import StatsBorder from "../../assets/icons/border-img.svg";

export const StyledInitialPage = styled.div`
  padding-bottom: 32px;

  @media screen and (min-width: 1440px) {
    width: 1344px;
  }

  .wrapper {
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
      display: flex;
      flex-flow: row-reverse;
      align-items: center;
      gap: 20px;
      margin-bottom: 24px;
    }
  }

  .initialpage-picture {
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
      width: 320px;
      height: 320px;
    }
  }

  .info-wrapper {
    padding: 46px 32px;
    border-radius: 30px;
    background-color: var(--secondary-white);

    @media screen and (min-width: 768px) {
      width: 396px;
      padding: 40px 32px;
    }

    @media screen and (min-width: 1440px) {
      width: 720px;
      padding: 98px 108px 98px 64px;
    }
  }

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 24px;

    @media screen and (min-width: 1440px) {
      margin-bottom: 32px;
      font-size: 48px;
      text-align: start;
    }
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

    @media screen and (min-width: 1440px) {
      font-size: 16px;
      width: 470px;
      margin-bottom: 64px;
    }
  }

  .stats-list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 40px 32px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      row-gap: 40px;
      column-gap: 80px;
    }

    @media screen and (min-width: 1440px) {
      gap: 100px;
      justify-content: center;
    }
  }

  .stats-list::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    background: url("${StatsBorder}");
    pointer-events: none;
    z-index: var(--main-z-index);
  }

  .stats-list-item {
    display: flex;
    align-items: center;
    gap: 16px;

    @media screen and (min-width: 768px) and (max-width: 1439px) {
      width: calc((100% - 100px) / 2);
      justify-content: center;
    }
  }

  @media screen and (min-width: 1440px) {
    .stats-list-item::nth-child(1) {
      width: 217px;
    }

    .stats-list-item::nth-child(2) {
      width: 232px;
    }
    .stats-list-item::nth-child(3) {
      width: 159px;
    }

    .stats-list-item::nth-child(4) {
      width: 159px;
    }
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

    @media screen and (min-width: 1440px) {
      width: 74px;
    }
  }

  .stats-item-accent {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.14;
    letter-spacing: -0.02em;

    @media screen and (min-width: 1440px) {
      font-size: 28px;
    }
  }
`;
