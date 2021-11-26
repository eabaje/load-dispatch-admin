import {
  GET_TRIPS_FAIL,
  GET_TRIPS_REQUEST,
  GET_TRIPS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default () => (dispatch) => {
  dispatch({
    type: GET_TRIPS_REQUEST,
  });

  axios
    .get("/trip/findAll")
    .then((res) => {
      dispatch({
        type: GET_TRIPS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_TRIPS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
