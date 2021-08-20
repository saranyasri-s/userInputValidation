import React, { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
import classes from "./UserInput.module.css";

function UserInput(props) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const nameChangeHandler = (e) => {
    const newname = e.target.value;
    setUserName(newname);
  };
  const ageChangehandler = (e) => {
    const newAge = e.target.value;

    setAge(newAge);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(>0)",
      });
      return;
    }
    const newUser = {
      userName: userName,
      age: age,
      id: Math.random().toString(),
    };
    props.onSubmitUser(newUser);
    setAge("");
    setUserName("");
  };
  const deleteErrorHandler=()=>{
    setError()
  }
  return (
    <div>
      {error && (
        <ErrorModal onDeleteError={deleteErrorHandler} title={error.title} message={error.message}></ErrorModal>
      )}

      <form onSubmit={submitHandler} className={classes.UserInput}>
        <p>Username</p>
        <input
          type="text"
          value={userName}
          onChange={nameChangeHandler}
        ></input>
        <p>Age(in years)</p>
        <input type="number" value={age} onChange={ageChangehandler}></input>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserInput;
