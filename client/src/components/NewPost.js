import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// import { addPost } from "../actions/postActions";

import { Row, Col } from "react-bootstrap";

const NewPost = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(addPost({ text }));
    setText("");
    console.log("success?");
  };

  return (
    <PostFormContainer>
      <Row>
        <Col md={12}>
          <h2 className="text-center">Post New Post</h2>
          <PostForm onSubmit={submitHandler}>
            <StyledTextarea
              name="text"
              rows="5"
              placeholder="Create a post"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
            <PostButton type="submit" variant="primary">
              Share
            </PostButton>
          </PostForm>
        </Col>
      </Row>
    </PostFormContainer>
  );
};

const PostFormContainer = styled.div`
  background: lightgrey;
  padding: 0.5rem;
`;

const PostForm = styled.div`
  display: block;
  margin-top: 0.3rem;
  color: #888;
`;

const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
`;

const PostButton = styled.div`
  display: inline-block;
  background: #343a40;
  color: #fff;
  padding: 0.4rem 1.3rem;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  outline: none;
`;

export default NewPost;
