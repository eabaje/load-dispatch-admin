import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ password, userName: username }) =>
  (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    axiosInstance
      .post("auth/login", {
        password,
        username,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : { error: "Something went wrong, try agin" },
        });
      });
  };
