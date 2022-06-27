import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import UserForm from "../NewUser/UserForm";
import styles from "./Modal.module.css";
const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.overlay} onClick={props.onModal}></div>
      <div className={styles.modal}>
        <Card>
          <UserForm />
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Modal;
