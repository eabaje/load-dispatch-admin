import {
  GET_PROFILES_FAIL,
  GET_PROFILES_REQUEST,
  GET_PROFILES_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default () => (dispatch) => {
  dispatch({
    type: GET_PROFILES_REQUEST,
  });

  axios
    .get("/user/findAll/")
    .then((res) => {
      dispatch({
        type: GET_PROFILES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PROFILES_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
