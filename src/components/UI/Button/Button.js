import styles from "./Button.module.css";

const Button = (props) => {
  // console.log(props.type);
  // console.log(props.type ? props.type : "button");
  return (
    <button
      className={styles.button}
      type={props.type ? props.type : "button"}
      onClick={props.onClick ? props.onClick : ""}
    >
      {props.value}
    </button>
  );
};

export default Button;
