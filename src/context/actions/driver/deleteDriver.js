import {
  DELETE_DRIVER_FAIL,
  DELETE_DRIVER_REQUEST,
  DELETE_DRIVER_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => (onSuccess) => {
  console.log("id", id);
  dispatch({
    type: DELETE_DRIVER_REQUEST,
  });

  axios
    .delete(`/driver/delete/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_DRIVER_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: DELETE_DRIVER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
