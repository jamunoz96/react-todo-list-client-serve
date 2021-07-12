import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteTodo, checkTodo } from "../../store/actions/todoActions";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';

const Todo = ({ todo, setTodo, todos }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleOnUpdateClick = (id) => {
    const foundTodo = todos.find((todo) => todo._id === id);
    setTodo({ ...foundTodo });
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };

  return (
    <>
      <Alert variant="warning">
        <div>
            <h2 >
              - {todo.name}
            </h2>
          <h5>
            Author: {todo.author}
          </h5>
          <h5 >
            Added: {moment(todo.date).fromNow()}
          </h5>
        </div>
        <div>
          {auth._id && (auth._id === todo.uid) ? (
            <ButtonGroup
              size="small"
              aria-label="outlined-primary" >
              <Button variant={todo.isComplete ? "success" : "secondary"} onClick={() => handleCheck(todo._id)}>
                {todo.isComplete ? "complete" : "incomplete"}
              </Button>
              <Button  variant="info" onClick={() => handleOnUpdateClick(todo._id)}>
                Update
              </Button>
              <Button variant="danger" onClick={() => handleDelete(todo._id)}>
                Delete
              </Button>
            </ButtonGroup>
          ) : null}
          </div>
      </Alert>
    </>
  );
};

export default Todo;
