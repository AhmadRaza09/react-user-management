import React from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const classes = `${styles["form-control"]} ${
    props.isInvalid ? styles.invalid : ""
  }`;
  return (
    <div className={classes}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} name={props.name} ref={ref} />
      {props.isInvalid && <p className={styles.error}>{props.errorMessage}</p>}
    </div>
  );
});

export default Input;
