import React from "react";
import classes from "./UserInput.module.css";
function UserInput(props) {
  return (
    <form className={classes.UserInput}>
      <p>Username</p>
      <input></input>
      <p>Age(in years)</p>
      <input></input>

      <button type="submit">Add User</button>
    </form>
  );
}

export default UserInput;
