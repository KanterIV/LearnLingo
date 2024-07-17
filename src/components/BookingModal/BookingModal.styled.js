import styled from "styled-components";

export const StyledBookingForm = styled.form`
  fieldset {
    display: flex;
    flex-direction: column;
    row-gap: 17px;
    border: none;
    padding: 0;
    margin: 0px 0px 40px 0px;
  }

  .radio-lable {
    line-height: 1.37;
    cursor: pointer;
  }

  .radio-button {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
    /* position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    z-index: -1; */
  }

  .custom-radio-button {
    position: relative;
    display: inline-block;
    margin-right: 20px;
    vertical-align: text-top;

    width: 20px;
    height: 20px;
    background-color: var(--primary-white);
    border: 2px solid var(--primary-grey);
    border-radius: 50%;
    transition: border-color 150ms cubic-bezier(0.55, 0.06, 0.68, 0.19);
  }

  .custom-radio-button::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 150ms cubic-bezier(0.55, 0.06, 0.68, 0.19);
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--accent-color);
  }

  .radio-button:checked {
    + .custom-radio-button {
      border-color: var(--accent-color);
    }

    + .custom-radio-button::before {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;
