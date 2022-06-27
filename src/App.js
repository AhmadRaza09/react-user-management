import "./App.css";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Card from "./components/UI/Card/Card";
import React, { useState } from "react";
import UserList from "./components/UserList/UserList";
import ContentWrapper from "./components/content/ContentWrapper";
import AddUserButton from "./components/NewUser/AddUserButton";
import Modal from "./components/Modal/Modal";
import UserForm from "./components/NewUser/UserForm";

const users = [
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

function App() {
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
