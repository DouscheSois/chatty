import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";

import { Table, Button } from "react-bootstrap";
import { listPosts } from "../actions/postActions";

const AllPosts = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postsList = useSelector((state) => state.userList);
  const { loading, error, payload } = postsList;

  return (
    <>
      <h1>Posts</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>payload</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{post._id}</td>
                <td>{post.payload}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default AllPosts;
