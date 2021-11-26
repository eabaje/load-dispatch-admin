import {
  GET_PAYMENTS_FAIL,
  GET_PAYMENTS_REQUEST,
  GET_PAYMENTS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default () => (dispatch) => {
  dispatch({
    type: GET_PAYMENTS_REQUEST,
  });

  axios
    .get("/payment/finaAll")
    .then((res) => {
      dispatch({
        type: GET_PAYMENTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PAYMENTS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
