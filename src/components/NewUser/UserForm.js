import Button from "../../UI/Button/Button";
import styles from "./UserForm.module.css";
const UserForm = (props) => {
  return (
    <form className={styles.form}>
      <div>
        <label>Ahmad:</label>
        <input />
      </div>
      <div>
        <label>Ahmad:</label>
        <input />
      </div>
      <div>
        <label>Ahmad:</label>
        <input />
      </div>
      <Button type="submit" value="Add User" />
    </form>
  );
};

export default UserForm;
