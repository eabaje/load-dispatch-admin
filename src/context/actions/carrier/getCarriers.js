import {
  GET_CARRIERS_FAIL,
  GET_CARRIERS_REQUEST,
  GET_CARRIERS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default () => (dispatch) => {
  dispatch({
    type: GET_CARRIERS_REQUEST,
  });

  axios
    .get("/carrier/findAll")
    .then((res) => {
      dispatch({
        type: GET_CARRIERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CARRIERS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
