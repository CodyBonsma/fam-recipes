import React from "react";
import "./Modal.css";
import ReactDom from "react-dom";

const Modal = ({ children, open, isVegetarian }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay-dis" />
      <div className="modal-dis">{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
