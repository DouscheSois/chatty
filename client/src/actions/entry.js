import axios from "axios";
import { ADD_ENTRY, ENTRY_ERROR, GET_ENTRIES } from "./types";

export const addEntry = (formData) => async (send) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/entry", formData, config);

    send({
      type: ADD_ENTRY,
      payload: res.data,
    });
    alert("Post Created");
    send(getEntries());
  } catch (err) {
    send({
      type: ENTRY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getEntries = () => async (send) => {
  try {
    const res = await axios.get(`/entry?page=${1}&limit=${5}`);

    send({
      type: GET_ENTRIES,
      payload: res.data,
    });
  } catch (err) {
    send({
      type: ENTRY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
