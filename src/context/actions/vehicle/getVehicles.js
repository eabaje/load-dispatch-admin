import {
  GET_VEHICLES_FAIL,
  GET_VEHICLES_REQUEST,
  GET_VEHICLES_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default () => (dispatch) => {
  dispatch({
    type: GET_VEHICLES_REQUEST,
  });

  axios
    .get("/vehicle/findAllVehiclesInsured/")
    .then((res) => {
      dispatch({
        type: GET_VEHICLES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_VEHICLES_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
