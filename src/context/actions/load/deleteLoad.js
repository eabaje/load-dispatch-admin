import {
  DELETE_LOAD_FAIL,
  DELETE_LOAD_REQUEST,
  DELETE_LOAD_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => (onSuccess) => {
  console.log("id", id);
  dispatch({
    type: DELETE_LOAD_REQUEST,
  });

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_LOAD_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: DELETE_LOAD_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
