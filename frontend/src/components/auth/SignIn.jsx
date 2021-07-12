import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../store/actions/authActions";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const SignIn = () => {

  const auth= useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <>
    <Card >
      <Card.Header >
        <h1 >SignIn</h1>
      </Card.Header>
      <br></br>

      <Card.Body>
        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit} >

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    value={creds.email}
                    onChange={(e) => setCreds({ ...creds, email: e.target.value })} />
            </Form.Group>

            <br></br>

            <Form.Group>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={creds.password}
                  onChange={(e) => setCreds({ ...creds, password: e.target.value })} />
            </Form.Group>
            
            <br></br>

          <Button
            variant="primary"
            type="submit" >
            SignIn
          </Button>

        </Form>
      </Card.Body>
    </Card>
    </>
  );
};

export default SignIn;
