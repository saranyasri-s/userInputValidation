import React, { useState } from "react";
import classes from "./App.module.css";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const newUserHandler = (user) => {
    const updatedUsers = [user, ...users];
    setUsers(updatedUsers);
  };
  return (
    <div className={classes.App}>
      <div className={classes.background}></div>
      <section>
        <UserInput onSubmitUser={newUserHandler}></UserInput>
      </section>
      <section>
        <UserList users={users}></UserList>
      </section>
    </div>
  );
}

export default App;
