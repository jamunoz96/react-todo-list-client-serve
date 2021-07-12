import React from "react";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/actions/authActions";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const user = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/signin");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
              TodoApp
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-center">
          {user._id ? (
            <>
              <Navbar.Text>
                Signed in as: {user.name}
              </Navbar.Text>
            </>
          ) : "" }
          </Navbar.Collapse>
            {user._id ? (
              <>
                <Button 
                  variant="primary"
                  onClick={() => handleSignOut()} >
                    SignOut
                </Button>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <Button
                    variant="primary" >
                      SignIn
                  </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/signup">
                  <Button
                    variant="primary" >
                      SignUp
                  </Button>
                </Link>
              </>
            )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
