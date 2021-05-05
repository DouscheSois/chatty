import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import Message from "../components/Message";

import { Table, Button } from "react-bootstrap";

const AllPosts = () => {
  const dispatch = useDispatch();

  const postsList = useSelector((state) => state.postsList);

  // const { loading, error, posts, pages, page } = postsList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // {loading ? (
  //   <Loader />
  // ) : error ? (
  //   <Message variant="danger">{error}</Message>
  // ) : (
  //   <Table striped bordered hover responsive className="table-sm">
  //     <thead>
  //       <tr>
  //         <th>ID</th>
  //         <th>NAME</th>
  //         <th>payload</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {posts.map((post) => (
  //         <tr key={post._id}>
  //           <td>{post._id}</td>
  //           <td>{post.payload}</td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </Table>
  // )}

  return (
    <>
      <h1>Posts</h1>
    </>
  );
};

export default AllPosts;
