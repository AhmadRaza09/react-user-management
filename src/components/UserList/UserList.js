import styles from "./UserList.module.css";

import deleteIcon from "./../../assests/icons/delete.png";
import editIcon from "./../../assests/icons/edit.png";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "../Modal/Modal";
import Card from "../UI/Card/Card";
import UserForm from "../NewUser/UserForm";

const UserList = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser] = useState();

  const modalOpenHandler = (id) => {
    setModalOpen((prevState) => {
      return !prevState;
    });
    const index = props.users.findIndex((user) => user.id === id);
    setEditUser(props.users[index]);
  };

  const userList = props.users.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.fatherName}</td>
      <td>{user.designation}</td>
      <td>{user.age}</td>
      <td>
        <button
          className={styles.button}
          onClick={props.userOperation.bind(null, {
            type: "DELETE_USER",
            id: user.id,
          })}
        >
          <img src={deleteIcon} alt="delete" className={styles.icon} />
        </button>
      </td>
      <td>
        <button
          className={styles.button}
          onClick={modalOpenHandler.bind(null, user.id)}
        >
          <img src={editIcon} alt="edit" className={styles.icon} />
        </button>
      </td>
    </tr>
  ));

  return (
    <React.Fragment>
      {modalOpen &&
        ReactDOM.createPortal(
          <Modal onModal={modalOpenHandler}>
            <Card>
              <UserForm
                onAdd={props.userOperation}
                onModal={modalOpenHandler}
                editUser={editUser}
                btnValue="Edit User"
                formType="EDIT_USER"
              />
            </Card>
          </Modal>,
          document.getElementById("modal")
        )}
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
    </React.Fragment>
  );
};

export default UserList;
