import Button from "../UI/Button/Button";

import styles from "./UserForm.module.css";
const UserForm = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
    console.log();
  };
  return (
    <form className={styles.form} onSubmit={addUserHandler}>
      <div>
        <label>Name:</label>
        <input />
      </div>
      <div>
        <label>Email:</label>
        <input />
      </div>
      <div>
        <label>Father Name:</label>
        <input />
      </div>
      <div>
        <label>Designation:</label>
        <input />
      </div>
      <div>
        <label>Age:</label>
        <input />
      </div>
      <Button type="submit" value="Add User" />
    </form>
  );
};

export default UserForm;
