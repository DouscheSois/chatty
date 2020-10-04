import React, { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getEntries } from "../actions/entry";

import PostItem from "./PostItem";

const AllPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

  const isloading = useSelector((state) => state.auth.isloading);

  const entries = useSelector((state) => state.entry.entries);

  //Pagination Logic
  const indexOfLastPost = currentPage * limit;
  const indexOfFirstPost = indexOfLastPost - limit;
  const currentPosts = entries.slice(indexOfFirstPost, indexOfLastPost);

  console.log(currentPosts);

  return isloading ? (
    <h1 className="loading">Loading...</h1>
  ) : (
    <div className="all-posts">
      {currentPosts.map((post) => (
        <PostItem post={post} key={post._id} />
      ))}
    </div>
  );
};

export default AllPosts;
