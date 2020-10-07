import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAccount } from "../actions/auth";

const Profile = () => {
  const dispatch = useDispatch();

  // useSelector((state) => state.auth);

  return (
    <div className="profile">
      <h4>Profile Page</h4>
      <small>
        *Clicking the delete account button below will permantently delete your
        information + all chats shared that was stored in the database while you
        were using our application.
      </small>
      <br />
      <button
        className="delete-account"
        onClick={(e) => {
          dispatch(deleteAccount());
        }}
      >
        Delete Account
      </button>
    </div>
  );
};

export default Profile;
