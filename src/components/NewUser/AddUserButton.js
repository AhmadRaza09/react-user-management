import Button from "../UI/Button/Button";

import styles from "./AddUserButton.module.css";

const AddUserButton = (props) => {
  return (
    <div className={styles["button-wrapper"]}>
      <Button value="Add User" onClick={props.onModal} />
    </div>
  );
};

export default AddUserButton;
