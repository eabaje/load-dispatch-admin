import {
  DELETE_SUBSCRIBE_FAIL,
  DELETE_SUBSCRIBE_REQUEST,
  DELETE_SUBSCRIBE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => (onSuccess) => {
  console.log("id", id);
  dispatch({
    type: DELETE_SUBSCRIBE_REQUEST,
  });

  axios
    .delete(`/subscription/delete/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_SUBSCRIBE_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: DELETE_SUBSCRIBE_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
