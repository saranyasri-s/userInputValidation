import React from "react";
import classes from "./UserList.module.css";
function UserList(props) {
  return (
    <div className={classes.UserList}>
      {props.users.map((user) => {
        return (
          <p key={user.id}>
            {user.userName} ({user.age} years old)
          </p>
        );
      })}
    </div>
  );
}

export default UserList;
