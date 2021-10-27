import { TodosContext } from "../store/todos-context";
import { useContext } from "react";
import React from "react";
import ToDoItem from "./ToDoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <ToDoItem
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          text={item.text}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default Todos;
