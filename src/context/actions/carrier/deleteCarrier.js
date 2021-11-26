import {
  DELETE_CARRIER_FAIL,
  DELETE_CARRIER_REQUEST,
  DELETE_CARRIER_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => (onSuccess) => {
  console.log("id", id);
  dispatch({
    type: DELETE_CARRIER_REQUEST,
  });

  axios
    .delete(`/carrier/delete/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_CARRIER_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: DELETE_CARRIER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
