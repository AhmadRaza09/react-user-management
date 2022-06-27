import styles from "./UserList.module.css";

import deleteIcon from "./../../assests/icons/delete.png";
import editIcon from "./../../assests/icons/edit.png";

const UserList = (props) => {
  const userList = props.users.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.fatherName}</td>
      <td>{user.designation}</td>
      <td>{user.age}</td>
      <td>
        <button className={styles.button}>
          <img src={deleteIcon} alt="delete" className={styles.icon} />
        </button>
      </td>
      <td>
        <button className={styles.button}>
          <img src={editIcon} alt="edit" className={styles.icon} />
        </button>
      </td>
    </tr>
  ));
  return (
    <div className={styles.overflow}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Father Name</th>
            <th>Designation</th>
            <th>Age</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>

        <tbody>{userList}</tbody>
      </table>
    </div>
  );
};

export default UserList;
