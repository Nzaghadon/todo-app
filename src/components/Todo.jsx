import React from "react";
import { Button } from "react-bootstrap";

const Todo = ({ todo, index, markTodo, removeTodo, isDone }) => {
  return (
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <span
        style={{
          textDecorationLine: todo.isDone ? "line-through" : "none",
          textDecorationColor: "red",
        }}
      >
        {todo.text}
      </span>
      <div>
        <Button
          variant={isDone ? "outline-secondary" : "outline-success"}
          onClick={() => markTodo(index)}
          className="me-2"
        >
          {todo.isDone ? "Undo" : "Mark Done"}
        </Button>
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Todo;
