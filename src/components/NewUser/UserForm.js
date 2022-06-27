import { useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import styles from "./UserForm.module.css";
const UserForm = (props) => {
  const userName = useRef();
  const userEmail = useRef();
  const userFatherName = useRef();
  const userDesignation = useRef();
  const userAge = useRef();

  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isUserEmailValid, setIsUserEmailValid] = useState(false);
  const [isUserFatherNameValid, setIsUserFatherNameValid] = useState(false);
  const [isUserDesignationValid, setIsUserDesignationValid] = useState(false);
  const [isUserAgeValid, setIsAgeNameValid] = useState(false);
  const [isFormInvalid, setIsFormInvalid] = useState(true);

  // console.log("aa", setIsUserNameValid);

  const addUserHandler = (e) => {
    e.preventDefault();
    const newUser = {
      id: "u4",
      name: userName.current.value,
      email: userEmail.current.value,
      fatherName: userFatherName.current.value,
      designation: userDesignation.current.value,
      age: userAge.current.value,
    };
    console.log(newUser);
  };
  return (
    <form className={styles.form} onSubmit={addUserHandler}>
      <Input
        label="Name :"
        id="name"
        name="name"
        type="text"
        ref={userName}
        errorMessage="Enter the name (digit >= 5)"
        isInvalid={isUserNameValid}
      />

      <Input
        label="Email :"
        id="email"
        name="email"
        type="email"
        errorMessage="Email is not correct"
        ref={userEmail}
        isInvalid={isUserEmailValid}
      />

      <Input
        label="Father Name :"
        id="fatherName"
        name="fatherName"
        type="text"
        errorMessage="Enter the name (digit >= 5)"
        ref={userFatherName}
        isInvalid={isUserFatherNameValid}
      />

      <Input
        label="Designation :"
        id="designation"
        name="designation"
        type="text"
        errorMessage="Enter the name (digit >= 0)"
        ref={userDesignation}
        isInvalid={isUserDesignationValid}
      />

      <Input
        label="Age :"
        id="age"
        name="age"
        type="number"
        ref={userAge}
        errorMessage="Enter the age in number (age > 0)"
        isInvalid={isUserAgeValid}
      />

      <Button type="submit" value="Add User" disabled={isFormInvalid} />
    </form>
  );
};

export default UserForm;
