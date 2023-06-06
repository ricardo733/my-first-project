import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={value}
        placeholder="Enter new task"
        onChange={(e) => setValue(e.target.value)}
        className="todo-form-input"
      />
      <button className="btn btn-success btn-sm todo-form-btn" type="submit">
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
