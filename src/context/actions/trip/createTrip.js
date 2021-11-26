import {
  CREATE_TRIP_FAIL,
  CREATE_TRIP_REQUEST,
  CREATE_TRIP_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    TrackId: form.TrackId || "",
    VehicleId: form.VehicleId || "",
    DriverId: form.DriverId || "",
    PickUpLocation: form.PickUpLocation || "",
    DeliveryLocation: form.DeliveryLocation || "",
    PickUpDate: form.PickUpDate || "",
    DeliveryDate: form.DeliveryDate || "",
    DriverNote: form.DriverNote || "",
    ShipmentId: form.ShipmentId || "",
  };

  dispatch({
    type: CREATE_TRIP_REQUEST,
  });

  axios
    .post("/trip/create", requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_TRIP_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_TRIP_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
