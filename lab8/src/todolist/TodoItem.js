import React, { useState, useContext } from "react";
import Context from "../context";

export default function TodoItem({ todo, onChange }) {
  const { deleteTodo, editTodo } = useContext(Context);
  const [todoInput, setTodoInput] = useState(todo.title);
  const itemClasses = ["item-input"];
  if (todo.completed) itemClasses.push("done");
  return (
    <li className="todo-item">
      <span className="todo-title">
        <input
          title="Изменить статус"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <input
          title="Редактировать"
          className={itemClasses.join(" ")}
          type="text"
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)}
        />
      </span>
      <button
        className="save-btn"
        title="Сохранить изменения"
        onClick={editTodo.bind(null, todo.id, todoInput)}
      >
        &#128190;
      </button>
      <button
        title="Удалить"
        className="delete-btn"
        onClick={deleteTodo.bind(null, todo.id)}
      >
        &#10060;
      </button>
    </li>
  );
}
