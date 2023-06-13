import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TodoForm = ({ addTodo }) => {
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data) return;
    addTodo(data);
    setData("");
  };

  return (
    <Form onSubmit={handleSubmit} className="container-fluid">
      <Form.Group className="d-flex flex-shrink-1 align-items-center">
        <Form.Label className="fs-2 mb-0 me-3">Add Todo</Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Add a new todo"
          id="control"
        />
        <Button
          variant="outline-primary"
          className="ms-3"
          type="submit"
          id="submit"
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default TodoForm;
