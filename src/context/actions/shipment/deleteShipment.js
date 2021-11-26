import {
  DELETE_SHIPMENT_FAIL,
  DELETE_SHIPMENT_REQUEST,
  DELETE_SHIPMENT_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => (onSuccess) => {
  console.log("id", id);
  dispatch({
    type: DELETE_SHIPMENT_REQUEST,
  });

  axios
    .delete(`/shipment/delete/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_SHIPMENT_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: DELETE_SHIPMENT_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
