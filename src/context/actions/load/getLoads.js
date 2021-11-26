import {
  GET_LOADS_FAIL,
  GET_LOADS_REQUEST,
  GET_LOADS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default () => (dispatch) => {
  dispatch({
    type: GET_LOADS_REQUEST,
  });

  axios
    .get("/contacts/")
    .then((res) => {
      dispatch({
        type: GET_LOADS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_LOADS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
