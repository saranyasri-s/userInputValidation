import React, { useState } from "react";
import classes from "./UserInput.module.css";
function UserInput(props) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
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
    const newUser = {
      userName: userName,
      age: age,
      id: Math.random().toString(),
    };
  };
  return (
    <form onSubmit={submitHandler} className={classes.UserInput}>
      <p>Username</p>
      <input type="text" value={userName} onChange={nameChangeHandler}></input>
      <p>Age(in years)</p>
      <input type="number" value={age} onChange={ageChangehandler}></input>

      <button type="submit">Add User</button>
    </form>
  );
}

export default UserInput;
