import React, { Fragment } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { logout } from "../actions/auth";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isloading = useSelector((state) => state.auth.isloading);

  const dispatch = useDispatch();

  const onClick = (e) => {
    dispatch(logout());
  };

  const publicLinks2 = (
    <>
      <LinkContainer to="/registration">
        <Nav.Link>
          <i className="fas fa-user-plus"></i> Register
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
        <Nav.Link>
          <i className="fas fa-user"></i> Login
        </Nav.Link>
      </LinkContainer>
    </>
  );

  const privateLinks2 = (
    <>
      <LinkContainer to="/wall">
        <Nav.Link>
          <i className="fas fa-globe"></i> Wall
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/profile">
        <Nav.Link>
          <i className="fas fa-id-badge"></i> Profile
        </Nav.Link>
      </LinkContainer>
      <Nav.Link onClick={(e) => onClick(e)}>Logout</Nav.Link>
    </>
  );

  return (
    <Navbar
      className="py-4"
      bg="primary"
      variant="dark"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="/">Chatty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {!isloading && (
              <Fragment>{isAuth ? privateLinks2 : publicLinks2}</Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
