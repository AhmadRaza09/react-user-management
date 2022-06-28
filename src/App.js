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
  if (action.type === "ADD_USER") {
    return [action.payload, ...state];
  }
  switch (action.type) {
    case "ADD_USER":
      return [action.payload, ...state];
    case "DELETE_USER":
      const index = state.findIndex((user) => user.id === action.id);
      console.log(index);
      const newState = [...state];
      newState.splice(index, 1);
      console.log(newState);
      return newState;
    default:
      return DUMMY_USERS;
  }
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
              <UserForm onAdd={UsersDispatch} onModal={modalOpenHandler} />
            </Card>
          </Modal>,
          document.getElementById("modal")
        )}
      <Card>
        <Header name="User Management" />
      </Card>
      <ContentWrapper>
        <AddUserButton onModal={modalOpenHandler} />
        <UserList users={users} onDelete={UsersDispatch} />
      </ContentWrapper>
    </React.Fragment>
  );
}

export default App;
