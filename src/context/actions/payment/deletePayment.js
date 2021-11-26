import {
  DELETE_PAYMENT_FAIL,
  DELETE_PAYMENT_REQUEST,
  DELETE_PAYMENT_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => (onSuccess) => {
  console.log("id", id);
  dispatch({
    type: DELETE_PAYMENT_REQUEST,
  });

  axios
    .delete(`/payment/delete/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_PAYMENT_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: DELETE_PAYMENT_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
