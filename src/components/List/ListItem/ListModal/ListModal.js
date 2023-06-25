import React, { useRef } from "react";
import classes from "./ListModal.module.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../../../store/todo-slice";
import moment from "moment";

function ListModal(props) {
  const newTodo = useRef();
  const dispacth = useDispatch();
  const genereateDate = () => {
    const date = moment().format("HH:mm:ss YYYY/MM/DD");
    return date;
  };
  const onCloseModalHandler = () => {
    props.setModal(false);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispacth(
      todoActions.editTodo({
        id: props.id,
        todo: newTodo.current.value,
        date: genereateDate(),
      })
    );
    props.setModal(false);
    newTodo.current.value = "";
  };

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
            <input
              maxLength="23"
              ref={newTodo}
              placeholder="new todo..."
              type="text"
            />
          </div>
          <div className={classes.submitBtn}>
            <button onClick={onSubmitHandler} type="submit">
              apply !
            </button>
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
