import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listPosts } from "../actions/postActions";

import AllPosts from "../components/AllPosts";
import NewPost from "../components/NewPost";

import { Row, Col, Container } from "react-bootstrap";

const WallScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listPosts());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <NewPost />
          <AllPosts />
        </Col>
      </Row>
    </Container>
  );
};

export default WallScreen;
