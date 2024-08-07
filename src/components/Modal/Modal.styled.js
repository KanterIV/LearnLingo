import styled from "styled-components";

export const StyledModalBackdrop = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: var(--modals-z-index);

  .modal {
    position: relative;
    width: 90%;
    height: auto;
    max-height: 90dvh;
    padding: 32px 32px 32px 32px;
    overflow-y: auto;
    border-radius: 30px;
    background-color: var(--primary-white);

    @media screen and (min-width: 768px) {
      width: 566px;
      height: auto;
      padding: 64px;
    }
  }

  .title {
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
  }

  .modal-text {
    font-size: 16px;
    line-height: 1.37;
    color: var(--secondary-black);
    margin-bottom: 40px;

    &.booking-modal-text {
      margin-bottom: 20px;
    }
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
  }

  svg {
    width: 26px;
    height: 26px;

    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }

    path {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      stroke: var(--primary-black);
    }

    &:hover {
      path {
        stroke: var(--accent-color);
      }
    }
  }

  //* ============ Custom Modals styles: ===============  *//

  //* 1. All modals common styles  *//

  form {
    display: flex;
    flex-direction: column;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 18px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }

  .password-input-wrapper {
    svg {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      transform: translate(-90%, 60%);

      width: 18px;
      height: 18px;

      @media screen and (min-width: 768px) {
        width: 20px;
        height: 20px;
        transform: translate(-90%, 70%);
      }
    }
  }

  .input {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid var(--third-grey);
    border-radius: 12px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 768px) {
      padding: 16px 50px 16px 18px;
    }

    &:focus {
      outline: none;
      border-color: var(--accent-color);
    }

    &::placeholder {
      font-size: 14px;
      line-height: 1.37;
      color: inherit;

      @media screen and (min-width: 768px) {
        font-size: 16px;
      }
    }
    &.error-input {
      border-color: var(--error-color);
      color: var(--error-color);
    }
  }

  .error {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    transform: translate(-30px, -50%);
    padding: 0 10px 0 10px;
    color: var(--error-color);
    background-color: var(--primary-white);
  }

  //* 2. Booking modal styles  *//

  .booking-teacher-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  .booking-avatar-wrapper {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 40px;
  }

  .booking-name-title {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    color: var(--primary-grey);
    margin-bottom: 4px;
  }

  .booking-teacher-name {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }

  .booking-question {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.33;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
