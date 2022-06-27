import React from "react";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.overlay} onClick={props.onModal}></div>
      <div className={styles.modal}>{props.children}</div>
    </React.Fragment>
  );
};

export default Modal;
