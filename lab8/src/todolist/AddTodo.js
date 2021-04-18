import React, { useState } from "react";

function AddTodo({ onAdd }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onAdd(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Введите новую задачу"
        className="add-todo"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="add-btn" type="submit">
        Добавить
      </button>
    </form>
  );
}

export default AddTodo;
