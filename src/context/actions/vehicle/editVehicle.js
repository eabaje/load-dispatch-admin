import {
  EDIT_VEHICLE_FAIL,
  EDIT_VEHICLE_REQUEST,
  EDIT_VEHICLE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form, id) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    VehicleId: id,
    CarrierId: form.CarrierId || "",
    VehicleType: form.VehicleType || "",
    VehicleNumber: form.VehicleNumber || "",
    SerialNumber: form.SerialNumber || "",
    VehicleMake: form.VehicleMake || "",
    VehicleColor: form.VehicleColor || "",
    VehicleModel: form.VehicleModel || "",
    LicensePlate: form.LicensePlate || "",
    VehicleModelYear: form.VehicleModelYear || "",
    PurchaseYear: form.PurchaseYear || "",
    PicUrl: form.PicUrl || null,
    VehicleDocs: form.VehicleDocs || null,
    Insured: form.Insured || false,
  };

  console.log("requestPayload :>> ", requestPayload);
  dispatch({
    type: EDIT_VEHICLE_REQUEST,
  });

  axios
    .put(`/vehicle/update/${id}`, requestPayload)
    .then((res) => {
      dispatch({
        type: EDIT_VEHICLE_SUCCESS,
        payload: res.data,
      });

      onSuccess(res.data);
    })
    .catch((err) => {
      console.log("err", err.response);
      dispatch({
        type: EDIT_VEHICLE_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
