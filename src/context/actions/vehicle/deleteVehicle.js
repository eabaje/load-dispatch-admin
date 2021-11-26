import {
  DELETE_VEHICLE_FAIL,
  DELETE_VEHICLE_REQUEST,
  DELETE_VEHICLE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => (onSuccess) => {
  console.log("id", id);
  dispatch({
    type: DELETE_VEHICLE_REQUEST,
  });

  axios
    .delete(`/vehicle/delete/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_VEHICLE_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: DELETE_VEHICLE_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
