import { StyledModalBackdrop } from "./Modal.styled";
import IconClose from "../../assets/icons/close.svg?react";

const Modal = ({ children, styledClass, title, textContent }) => {
  return (
    <StyledModalBackdrop>
      <div className={`modal ${styledClass}`}>
        <h2 className="title">{title}</h2>
        <p className="modal-text">{textContent}</p>
        <button className="close-btn" type="button">
          <IconClose className="close-btn-svg" />
        </button>
        {children}
      </div>
    </StyledModalBackdrop>
  );
};

export default Modal;
