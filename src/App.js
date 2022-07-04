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
  let index, newState;
  switch (action.type) {
    case "ADD_USER":
      return [action.payload, ...state];
    case "DELETE_USER":
      index = state.findIndex((user) => user.id === action.id);
      // console.log(index);
      newState = [...state];
      newState.splice(index, 1);
      // console.log(newState);
      return newState;
    case "EDIT_USER":
      console.log(action, state);
      index = state.findIndex((user) => user.id === action.payload.id);
      console.log(index);
      newState = [...state];
      newState[index] = action.payload;
      // console.log(newState);
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
              <UserForm
                onAdd={UsersDispatch}
                onModal={modalOpenHandler}
                btnValue="Add User"
              />
            </Card>
          </Modal>,
          document.getElementById("modal")
        )}
      <Card>
        <Header name="User Management" />
      </Card>
      <ContentWrapper>
        <AddUserButton onModal={modalOpenHandler} />
        <UserList users={users} userOperation={UsersDispatch} />
      </ContentWrapper>
    </React.Fragment>
  );
}

export default App;
