import "./App.css";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Card from "./components/UI/Card/Card";
import React, { useReducer, useState } from "react";
import UserList from "./components/UserList/UserList";
import ContentWrapper from "./components/content/ContentWrapper";
import AddUserButton from "./components/NewUser/AddUserButton";
import Modal from "./components/Modal/Modal";
import UserForm from "./components/NewUser/UserForm";

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Ahmad",
    email: "ahmadraza@gmail.com",
    fatherName: "Muhammad Younas Qadri",
    designation: "Software Engineer",
    age: 23,
  },
  {
    id: "u2",
    name: "Ahmad",
    email: "ahmadraza@gmail.com",
    fatherName: "Muhammad Younas Qadri",
    designation: "Software Engineer",
    age: 23,
  },
  {
    id: "u3",
    name: "Ahmad",
    email: "ahmadraza@gmail.com",
    fatherName: "Muhammad Younas Qadri",
    designation: "Software Engineer",
    age: 23,
  },
];

const usersOperation = (state, action) => {
  if (action.type === "ADD_User") {
    return [action.payload, ...state];
  }
  console.log(state, action);
};

function App() {
  const [users, UsersDispatch] = useReducer(usersOperation, DUMMY_USERS);
  const [modalOpen, setModalOpen] = useState(false);
  const modalOpenHandler = () => {
    setModalOpen((prevState) => {
      return !prevState;
    });
  };
  return (
    <React.Fragment>
      {modalOpen &&
        ReactDOM.createPortal(
          <Modal onModal={modalOpenHandler}>
            <Card>
              <UserForm />
            </Card>
          </Modal>,
          document.getElementById("modal")
        )}
      <Card>
        <Header name="User Management" />
      </Card>
      <ContentWrapper>
        <AddUserButton onModal={modalOpenHandler} />
        <UserList users={users} />
      </ContentWrapper>
    </React.Fragment>
  );
}

export default App;
