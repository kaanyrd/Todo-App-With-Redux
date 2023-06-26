import React, { useState } from "react";
import classes from "./ListItem.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { todoActions } from "../../store/todo-slice";
import { useDispatch } from "react-redux";
import ListModal from "./ListModal/ListModal";

function ListItem(props) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const deleteItemHandler = (id) => {
    dispatch(todoActions.delete(id));
  };

  const modalHandler = () => {
    setModal(true);
  };

  return (
    <div>
      <div className={`${props.className} ${classes.item}`}>
        <div className={classes.cardInfo}>
          <h3 className={classes.todo}>{props.todo}</h3>
          <p className={classes.date}>{props.date}</p>
        </div>
        <div className={classes.icons}>
          <span>
            <DeleteIcon
              onClick={() => deleteItemHandler(props.id)}
              className={classes.deleteIcon}
            />
          </span>
          <span>
            <EditIcon onClick={modalHandler} className={classes.editIcon} />
          </span>
        </div>
      </div>
      {modal && (
        <ListModal
          id={props.id}
          modal={modal}
          setModal={setModal}
          todo={props.todo}
          date={props.date}
        />
      )}
    </div>
  );
}

export default ListItem;
