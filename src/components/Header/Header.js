import styles from "./Header.module.css";

const Header = (props) => {
  return <div className={styles.header}>{props.name}</div>;
};

export default Header;
