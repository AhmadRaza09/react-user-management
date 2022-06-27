import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "./UI/Card/Card";
import Button from "./UI/Button/Button";
import React from "react";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <React.Fragment>
      <Card>
        <Header name="User Management" />
      </Card>
      <UserList />
    </React.Fragment>
  );
}

export default App;
