import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Form, Button, Row, Col, Container } from "react-bootstrap";

import { login } from "../actions/auth";

const Login = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (isAuth) {
    return <Redirect to="/wall" />;
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => onChange(e)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                minLength="6"
                value={password}
                onChange={(e) => onChange(e)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              Need have an account?
              <Link to="/registration"> Register</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
