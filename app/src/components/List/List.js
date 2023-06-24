import React from "react";
import classes from "./List.module.css";
import ListItem from "./ListItem/ListItem";

const DUMMY_DATA = [
  {
    id: 1,
    todo: "Learn React",
    date: "16:01:55 24.06.2023",
  },
  {
    id: 2,
    todo: "Learn Redux",
    date: "16:01:55 24.06.2023",
  },
  {
    id: 3,
    todo: "Learn Nodejs",
    date: "16:01:55 24.06.2023",
  },
  {
    id: 4,
    todo: "Learn Express.js",
    date: "16:01:55 24.06.2023",
  },
  {
    id: 5,
    todo: "Learn MongoDB",
    date: "16:01:55 24.06.2023",
  },
  {
    id: 6,
    todo: "Learn Redux Saga",
    date: "16:01:55 24.06.2023",
  },
];

function List() {
  return (
    <div className={classes.list}>
      <div className={classes.header}>
        <div className={classes.headerInfo}>
          <h1>Todo list</h1>
          <span className={classes.amount}>3</span>
        </div>
        <button className={classes.clearBtn}>Clear All</button>
      </div>
      <div className={classes.underline}></div>
      <div className={classes.listContent}>
        {DUMMY_DATA.map((item) => (
          <ListItem
            className={classes.item}
            id={item.id}
            todo={item.todo}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
