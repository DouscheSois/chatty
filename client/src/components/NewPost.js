import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";

import { addEntry } from "../actions/entry";

const NewPost = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(addEntry({ text }));
      setText("");
    }
  };

  return (
    <div className="new-post-div">
      <form
        className="new-post-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addEntry({ text }));
          setText("");
        }}
      >
        <textarea
          className="form-group"
          placeholder="Share what you have to say here.."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={submit}
        ></textarea>
        <input type="submit" className="new-post-form-submit" value="Share" />
      </form>
    </div>
  );
};

export default NewPost;
