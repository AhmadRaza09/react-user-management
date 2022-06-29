import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import styles from "./UserForm.module.css";
const UserForm = (props) => {
  const userName = useRef();
  const userEmail = useRef();
  const userFatherName = useRef();
  const userDesignation = useRef();
  const userAge = useRef();

  const [formTrigger, setFormTrigger] = useState(0);
  const [formFieldName, setFormFieldName] = useState();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    fatherName: "",
    designation: "",
    age: "",
    isFormValid: false,
  });

  const checkFormValidaion = (state) => {
    return (
      state.name === true &&
      state.email === true &&
      state.fatherName === true &&
      state.designation === true &&
      state.age === true
    );
  };

  const formTriggerHandler = (e) => {
    setFormFieldName(e.target.name);
    setFormTrigger((prevState) => {
      return prevState + 1;
    });
  };

  // console.log("aa", setIsUserNameValid);

  const addUserHandler = (e) => {
    e.preventDefault();
    let newUser = {
      name: userName.current.value,
      email: userEmail.current.value,
      fatherName: userFatherName.current.value,
      designation: userDesignation.current.value,
      age: userAge.current.value,
    };

    newUser =
      props.formType === "EDIT_USER"
        ? { ...newUser, id: props.editUser.id }
        : { ...newUser, id: Date.now() };

    console.log(newUser);
    props.formType === "EDIT_USER"
      ? props.onAdd({ type: "EDIT_USER", payload: newUser })
      : props.onAdd({ type: "ADD_USER", payload: newUser });
    props.onModal();
  };

  useEffect(() => {
    if (props.editUser) {
      // console.log(props.editUser);
      userName.current.value = props.editUser.name;
      userEmail.current.value = props.editUser.email;
      userFatherName.current.value = props.editUser.fatherName;
      userDesignation.current.value = props.editUser.designation;
      userAge.current.value = props.editUser.age;
      setFormState({
        name: true,
        email: true,
        fatherName: true,
        designation: true,
        age: true,
        isFormValid: true,
      });
    }
    // console.log("edit user", props.editUser);
  }, []);

  useEffect(() => {
    if (formFieldName) {
      // console.log(
      //   formFieldName,
      //   userName.current?.value,
      //   userName.current?.value.length >= 5
      // );
      const timer = setTimeout(() => {
        switch (formFieldName) {
          case "name":
            setFormState((prevState) => {
              return {
                ...prevState,
                name: userName.current.value.length >= 5,
              };
            });
            setFormState((prevState) => {
              return {
                ...prevState,
                isFormValid: checkFormValidaion(prevState),
              };
            });
            // console.log("name");
            break;
          case "email":
            setFormState((prevState) => {
              return {
                ...prevState,
                email: userEmail.current.value.trim().includes("@"),
              };
            });
            setFormState((prevState) => {
              return {
                ...prevState,
                isFormValid: checkFormValidaion(prevState),
              };
            });
            // console.log("email");
            break;
          case "fatherName":
            setFormState((prevState) => {
              return {
                ...prevState,
                fatherName: userFatherName.current?.value.length >= 5,
              };
            });
            setFormState((prevState) => {
              return {
                ...prevState,
                isFormValid: checkFormValidaion(prevState),
              };
            });
            // console.log("fatherName");
            break;
          case "designation":
            setFormState((prevState) => {
              return {
                ...prevState,
                designation: userDesignation.current.value.length >= 5,
              };
            });
            setFormState((prevState) => {
              return {
                ...prevState,
                isFormValid: checkFormValidaion(prevState),
              };
            });
            // console.log("designation");
            break;
          case "age":
            setFormState((prevState) => {
              return {
                ...prevState,
                age: userAge.current.value > 0,
              };
            });
            setFormState((prevState) => {
              return {
                ...prevState,
                isFormValid: checkFormValidaion(prevState),
              };
            });
            // console.log("age");
            break;
          default:
        }
      }, 500);
      // console.log("time set", formState.name);
      return () => {
        clearTimeout(timer);
        // console.log("clear time", formState.name);
      };
    }
  }, [
    formTrigger,
    formState.name,
    formState.email,
    formState.age,
    formState.fatherName,
    formState.designation,
    formFieldName,
  ]);
  // console.log("print");
  return (
    <form className={styles.form} onSubmit={addUserHandler}>
      <Input
        label="Name :"
        id="name"
        name="name"
        type="text"
        ref={userName}
        errorMessage="Enter the name (digit >= 5)"
        isInvalid={formState.name}
        onChange={formTriggerHandler}
      />

      <Input
        label="Email :"
        id="email"
        name="email"
        type="email"
        errorMessage="Email is not correct"
        ref={userEmail}
        isInvalid={formState.email}
        onChange={formTriggerHandler}
      />

      <Input
        label="Father Name :"
        id="fatherName"
        name="fatherName"
        type="text"
        errorMessage="Enter the name (digit >= 5)"
        ref={userFatherName}
        isInvalid={formState.fatherName}
        onChange={formTriggerHandler}
      />

      <Input
        label="Designation :"
        id="designation"
        name="designation"
        type="text"
        errorMessage="Enter the name (digit >= 0)"
        ref={userDesignation}
        isInvalid={formState.designation}
        onChange={formTriggerHandler}
      />

      <Input
        label="Age :"
        id="age"
        name="age"
        type="number"
        ref={userAge}
        errorMessage="Enter the age in number (age > 0)"
        isInvalid={formState.age}
        onChange={formTriggerHandler}
      />

      <Button
        type="submit"
        value={props.btnValue}
        disabled={formState.isFormValid}
      />
    </form>
  );
};

export default UserForm;
