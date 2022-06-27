import "./App.css";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Card from "./UI/Card/Card";
import React, { useState } from "react";
import UserList from "./components/UserList/UserList";
import ContentWrapper from "./components/content/ContentWrapper";
import AddUserButton from "./components/NewUser/AddUserButton";
import Modal from "./components/Modal/Modal";

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
          <Modal onModal={modalOpenHandler} />,
          document.getElementById("modal")
        )}
      <Card>
        <Header name="User Management" />
      </Card>
      <ContentWrapper>
        <AddUserButton onModal={modalOpenHandler} />
        <UserList />
      </ContentWrapper>
    </React.Fragment>
  );
}

export default App;
