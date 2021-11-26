import {
  GET_SHIPMENTS_FAIL,
  GET_SHIPMENTS_REQUEST,
  GET_SHIPMENTS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default () => (dispatch) => {
  dispatch({
    type: GET_SHIPMENTS_REQUEST,
  });

  axios
    .get("/shipment/findAll/")
    .then((res) => {
      dispatch({
        type: GET_SHIPMENTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_SHIPMENTS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
