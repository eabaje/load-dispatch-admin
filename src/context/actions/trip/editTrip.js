import {
  EDIT_TRIP_FAIL,
  EDIT_TRIP_REQUEST,
  EDIT_TRIP_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form, id) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    TripId: id,
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

  console.log("requestPayload :>> ", requestPayload);
  dispatch({
    type: EDIT_TRIP_REQUEST,
  });

  axios
    .put(`/trip/update/${id}`, requestPayload)
    .then((res) => {
      dispatch({
        type: EDIT_TRIP_SUCCESS,
        payload: res.data,
      });

      onSuccess(res.data);
    })
    .catch((err) => {
      console.log("err", err.response);
      dispatch({
        type: EDIT_TRIP_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
