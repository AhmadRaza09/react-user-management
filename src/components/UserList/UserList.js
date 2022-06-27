import styles from "./UserList.module.css";

import deleteIcon from "./../../assests/icons/delete.png";
import editIcon from "./../../assests/icons/edit.png";

const UserList = (props) => {
  return (
    <table className={styles.table}>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>FaterName</th>
        <th>Designation</th>
        <th>Age</th>
        <th colSpan="2">Action</th>
      </tr>
      <tr>
        <td>Ahmad</td>
        <td>ahmad@gmail.com</td>
        <td>Muhammad Yonas Qadri</td>
        <td>Software Engineer</td>
        <td>22</td>
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
    </table>
  );
};

export default UserList;
