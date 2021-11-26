import {
  CREATE_ASSIGN_DRIVER_FAIL,
  CREATE_ASSIGN_DRIVER_REQUEST,
  CREATE_ASSIGN_DRIVER_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    VehicleId: form.VehicleId || "",
    DriverId: form.DriverId || "",
    AssignedDate: form.AssignedDate || null,
    Assigned: form.Assigned || false,
  };

  dispatch({
    type: CREATE_ASSIGN_DRIVER_REQUEST,
  });

  axios
    .post("/driver/AssignDriverToVehicle/", requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_ASSIGN_DRIVER_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_ASSIGN_DRIVER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
