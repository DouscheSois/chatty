import React, { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getEntries } from "../actions/entry";

import PostItem from "./PostItem";
import Pagination from "./Pagination";

const AllPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

  const isloading = useSelector((state) => state.auth.isloading);

  const entries = useSelector((state) => state.entry.entries);

  //Pagination Logic
  const indexOfLastEntry = currentPage * limit;
  const indexOfFirstEntry = indexOfLastEntry - limit;
  const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry);

  // Change Page
  const newPaginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  console.log(currentEntries);

  return isloading ? (
    <h1 className="loading">Loading...</h1>
  ) : (
    <div className="all-posts">
      {currentEntries.map((entry) => (
        <PostItem entry={entry} key={entry._id} />
      ))}
      <Pagination
        limit={limit}
        totalEntries={entries.length}
        paginate={newPaginate}
      />
    </div>
  );
};

export default AllPosts;
