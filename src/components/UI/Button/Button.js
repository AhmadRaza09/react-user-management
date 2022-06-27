import styles from "./Button.module.css";

const Button = (props) => {
  // console.log(props.type);
  // console.log(props.type ? props.type : "button");
  const classes = `${styles.button} ${props.disabled ? styles.disabled : ""}`;
  return (
    <button
      className={classes}
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
      disabled={props.disabled ? "disabled" : ""}
    >
      {props.value}
    </button>
  );
};

export default Button;
