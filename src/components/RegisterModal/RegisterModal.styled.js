import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  .input-wrapper {
    position: relative;
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
`;
