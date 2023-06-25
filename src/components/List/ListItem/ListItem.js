import React from "react";
import classes from "./ListItem.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ListItem(props) {
  return (
    <div className={`${props.className} ${classes.item}`}>
      <div className={classes.cardInfo}>
        <h3>{props.todo}</h3>
        <p className={classes.date}>{props.date}</p>
      </div>
      <div className={classes.icons}>
        <span>
          <DeleteIcon className={classes.deleteIcon} />
        </span>
        <span>
          <EditIcon className={classes.editIcon} />
        </span>
      </div>
    </div>
  );
}

export default ListItem;
