import styles from "./ContentWrapper.module.css";
const ContentWrapper = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default ContentWrapper;
