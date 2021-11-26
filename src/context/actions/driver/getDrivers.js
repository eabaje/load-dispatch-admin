import {
  GET_DRIVERS_FAIL,
  GET_DRIVERS_REQUEST,
  GET_DRIVERS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default () => (dispatch) => {
  dispatch({
    type: GET_DRIVERS_REQUEST,
  });

  axios
    .get("/driver/findAll")
    .then((res) => {
      dispatch({
        type: GET_DRIVERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_DRIVERS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
