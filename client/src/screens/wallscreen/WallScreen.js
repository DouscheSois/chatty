import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listPosts } from "../../actions/postActions";

import CustomTabs from "../../components/CustomTabs";

import { Row, Col, Container } from "react-bootstrap";

const WallScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      console.log("Here goes the dispatch all posts.");
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <CustomTabs />
        </Col>
      </Row>
    </Container>
  );
};

export default WallScreen;
