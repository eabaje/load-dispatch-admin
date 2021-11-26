import {
  GET_SUBSCRIBES_FAIL,
  GET_SUBSCRIBES_REQUEST,
  GET_SUBSCRIBES_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default () => (dispatch) => {
  dispatch({
    type: GET_SUBSCRIBES_REQUEST,
  });

  axios
    .get("/subscription/findAll/")
    .then((res) => {
      dispatch({
        type: GET_SUBSCRIBES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_SUBSCRIBES_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
