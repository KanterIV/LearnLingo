import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyledModalBackdrop } from "./Modal.styled";
import { closeAllModals } from "../../redux/modals/modalsSlice";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import Button from "../Button/Button";

import IconClose from "../../assets/icons/close.svg?react";

const Modal = ({ children, styledClass, title, textContent }) => {
  const dispatch = useDispatch();
  const modalElement = document.getElementsByClassName(`${styledClass}`);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(closeAllModals());
    }
  };

  useEffect(() => {
    const handleEscapeClick = (event) => {
      if (event.code === "Escape") {
        dispatch(closeAllModals());
      }
    };

    const options = {
      reserveScrollBarGap: true,
    };

    window.addEventListener("keydown", handleEscapeClick);
    disableBodyScroll(modalElement[0], options);

    return () => {
      window.removeEventListener("keydown", handleEscapeClick);
      clearAllBodyScrollLocks();
    };
  }, [dispatch, modalElement]);

  return (
    <StyledModalBackdrop onClick={handleOverlayClick}>
      <div className={`modal ${styledClass}`}>
        <h2 className="title">{title}</h2>
        <p className="modal-text">{textContent}</p>
        <Button
          styledClass="close-btn"
          buttonType="button"
          onClickFunction={() => {
            dispatch(closeAllModals());
          }}
        >
          <IconClose className="close-btn-svg" />
        </Button>
        {children}
      </div>
    </StyledModalBackdrop>
  );
};

export default Modal;
