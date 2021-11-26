import {
  DELETE_TRIP_FAIL,
  DELETE_TRIP_REQUEST,
  DELETE_TRIP_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => (onSuccess) => {
  console.log("id", id);
  dispatch({
    type: DELETE_TRIP_REQUEST,
  });

  axios
    .delete(`/trip/delete/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_TRIP_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: DELETE_TRIP_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
