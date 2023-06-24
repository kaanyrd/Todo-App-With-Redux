import React from "react";
import classes from "./Form.module.css";

function Form() {
  return (
    <div className={classes.form}>
      <div className={classes.formContent}>
        <form className={classes.formSelf}>
          <input
            placeholder="Add Task..."
            className={classes.input}
            type="text"
            maxLength="35"
          />
          <button className={classes.submitBtn}>ADD</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
