import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { Form, Button, Row, Col, Container } from "react-bootstrap";

import { registration } from "../actions/auth";

const Registration = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });
  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords do not match");
    } else {
      dispatch(registration({ firstName, lastName, email, password }));
    }
  };

  if (isAuth) {
    return <Redirect to="/wall" />;
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xd={12} md={6}>
          <h1>Register</h1>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="firstName">
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => onChange(e)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => onChange(e)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={(e) => onChange(e)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password2">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength="6"
                value={password2}
                onChange={(e) => onChange(e)}
                required
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Register
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              Already have an account?
              <Link to="/login"> Login</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
