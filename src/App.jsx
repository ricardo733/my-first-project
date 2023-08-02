import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import EditTodoForm from "./components/EditTodoForm";
uuidv4();

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="container">
      <h1>Todo-List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, id) =>
        todo.isEditing ? (
          <EditTodoForm task={todo} key={id} editTodo={editTask} />
        ) : (
          <Todo
            task={todo}
            key={id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default App;
