import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { signUp } from "../../store/actions/authActions";

const SignUp = () => {

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({ name: "", email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <>
    <Card >
      <Card.Header as="h5">
        <h1 >SignUp</h1>
      </Card.Header>
      <br></br>

      <Card.Body>
        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit} >

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}  />
            </Form.Group>

            <br></br>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}  />
            </Form.Group>

            <br></br>


            <Form.Group>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </Form.Group>

            <br></br>

          <Button
            variant="primary"
            type="submit" >
            SignUp
          </Button>

        </Form>
      </Card.Body>
    </Card>
    </>
  );
};

export default SignUp;
