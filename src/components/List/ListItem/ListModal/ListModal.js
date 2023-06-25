import React from "react";
import classes from "./ListModal.module.css";

function ListModal(props) {
  const onCloseModalHandler = () => {
    props.setModal(false);
  };

  console.log(props.modal);

  return (
    // FIXME
    // PORTALS ARE GONNA ADD
    <div>
      <div onClick={onCloseModalHandler} className={classes.background}></div>
      <div className={`${classes.modeling}`}>
        <div className={classes.closeBtn}>
          <button
            className={classes.closeSelfBtn}
            onClick={onCloseModalHandler}
          >
            Close
          </button>
        </div>
        <form className={classes.form}>
          <div className={classes.formControl}>
            <label>
              <h2>New Todo</h2>
            </label>
            <input placeholder="new todo..." type="text" />
          </div>
          <div className={classes.submitBtn}>
            <button type="submit">apply !</button>
          </div>
        </form>
        <div className={classes.modalContent}>
          <h2>- {props.todo}</h2>
          <hr />
          <h4>{props.date}</h4>
        </div>
      </div>
    </div>
  );
}

export default ListModal;
