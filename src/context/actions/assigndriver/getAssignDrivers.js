import {
  GET_ASSIGN_DRIVERS_FAIL,
  GET_ASSIGN_DRIVERS_REQUEST,
  GET_ASSIGN_DRIVERS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default () => (dispatch) => {
  dispatch({
    type: GET_ASSIGN_DRIVERS_REQUEST,
  });

  axios
    .get("/drivers/findAllAssignedDrivers")
    .then((res) => {
      dispatch({
        type: GET_ASSIGN_DRIVERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ASSIGN_DRIVERS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
