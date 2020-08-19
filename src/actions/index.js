import axios from "axios";
import { USER_LOGIN } from "../types/types";

const rootUrl = "http://localhost:4000/api";

// const setTokenToAxios = (token) => {
//   const newToken = localStorage.getItem("authToken") || "";
//   axios.defaults.headers.Authorization = newToken;
// };

export const getCurrentUser = () => {
  return (dispatch) => {
    axios
      .get(`${rootUrl}/users`, {
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        return dispatch({
          type: USER_LOGIN,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "USER_LOGIN_FAILED" });
      });
  };
};

export const noToken = () => {
  return (dispatch) => {
    dispatch({
      type: "NO_TOKEN",
    });
  };
};
