import {
  DELETE_PROFILE_FAIL,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => (onSuccess) => {
  console.log("id", id);
  dispatch({
    type: DELETE_PROFILE_REQUEST,
  });

  axios
    .delete(`/user/delete/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_PROFILE_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: DELETE_PROFILE_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
