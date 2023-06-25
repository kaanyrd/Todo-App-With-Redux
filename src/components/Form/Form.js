import React, { useRef } from "react";
import classes from "./Form.module.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo-slice";
import moment from "moment";

function Form() {
  const dispatch = useDispatch();
  const todoRef = useRef();
  const genereateDate = () => {
    const date = moment().format("HH:mm:ss YYYY/MM/DD");
    return date;
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (todoRef.current.value === "") {
      return;
    } else {
      dispatch(
        todoActions.addTodo({
          id: Math.random(),
          todo: todoRef.current.value,
          date: genereateDate(),
        })
      );
      console.log(todoRef.current.value);
      todoRef.current.value = "";
    }
  };

  return (
    <div className={classes.form}>
      <div className={classes.formContent}>
        <form onSubmit={addTaskHandler} className={classes.formSelf}>
          <input
            ref={todoRef}
            placeholder="Add Task..."
            className={classes.input}
            type="text"
            maxLength="23"
          />
          <button className={classes.submitBtn}>ADD</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
