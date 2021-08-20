import React from "react";
import classes from "./ErrorModal.module.css";
function ErrorModal(props) {
  return (
    <div>
      <div onClick={props.onDeleteError} className={classes.backdrop}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onDeleteError}>OKAY</button>
        </footer>
      </div>
    </div>
  );
}

export default ErrorModal;
