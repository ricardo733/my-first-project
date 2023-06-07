import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={value}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
        className="todo-form-input"
      />
      <button className="todo-form-btn btn-sm btn btn-success" type="submit">
        Update task
      </button>
    </form>
  );
};
export default EditTodoForm;
