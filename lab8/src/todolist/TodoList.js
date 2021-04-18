import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <div className="list">
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} />;
      })}
    </div>
  );
}
