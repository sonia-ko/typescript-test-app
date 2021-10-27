import React from "react";
import { isTemplateExpression } from "typescript";
import classes from "./TodoItem.module.css";

const ToDoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

export default ToDoItem;
