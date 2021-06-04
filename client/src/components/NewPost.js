import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addPost } from "../actions/postActions";

import FormContainer from "../components/FormContainer";
import { Row, Col, Form, Button } from "react-bootstrap";

const NewPost = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addPost({ text }));
    setText("");
    console.log("success?");
  };

  return (
    <FormContainer>
      <Row>
        <Col md={12}>
          <h2 className="text-center">Post New Post</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="text">
              <Form.Control
                type="text"
                placeholder="Type here..."
                as="textarea"
                col="30"
                rows="5"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
              <Button type="submit" variant="primary">
                Share
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default NewPost;
