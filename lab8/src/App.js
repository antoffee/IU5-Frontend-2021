import React, { useEffect } from "react";
import TodoList from "./todolist/TodoList";
import Context from "./context";
import AddTodo from "./todolist/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([]);

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(localTodos);
  }, []);
  // eslint-disable-next-line
  useEffect(() => saveTodosToLocal(), [todos]);

  function saveTodosToLocal() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function toggleStatus(id) {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
    saveTodosToLocal();
  }

  function deleteTodo(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  function editTodo(id, newTitle) {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.title = newTitle;
        }
        return item;
      })
    );
  }

  function createTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ deleteTodo, editTodo, saveTodosToLocal }}>
      <div className="card">
        <h1>Список дел</h1>
        <AddTodo onAdd={createTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleStatus} />
        ) : (
          <h2>Нет запланированных дел ♥</h2>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
