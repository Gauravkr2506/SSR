import axios from "axios";

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("/users");
  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  console.log("response: ", res);
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};
