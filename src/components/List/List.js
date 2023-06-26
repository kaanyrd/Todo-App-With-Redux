import React from "react";
import classes from "./List.module.css";
import ListItem from "./ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todo-slice";

function List() {
  const todos = useSelector((state) => state.todo.todos);
  const disptach = useDispatch();

  const clearAllHandler = () => {
    disptach(todoActions.clearAll());
  };
  return (
    <div className={classes.list}>
      <div className={classes.header}>
        <div className={classes.headerInfo}>
          <h1>Todo list</h1>
          <span className={classes.amount}>{todos.length}</span>
        </div>
        <button className={classes.clearBtn} onClick={clearAllHandler}>
          Clear All
        </button>
      </div>
      <div className={classes.underline}></div>
      <div className={classes.listContent}>
        {todos?.map((item) => (
          <ListItem
            key={item.id}
            className={classes.item}
            id={item.id}
            todo={item.todo}
            date={item.date}
          />
        ))}
      </div>
      <div className={classes.todoAlert}>
        {todos.length === 0 ? <h2>No Todos..</h2> : ""}
      </div>
    </div>
  );
}

export default List;
