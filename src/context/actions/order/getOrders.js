import {
  GET_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default () => (dispatch) => {
  dispatch({
    type: GET_ORDERS_REQUEST,
  });

  axios
    .get("/order/findAll")
    .then((res) => {
      dispatch({
        type: GET_ORDERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ORDERS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
