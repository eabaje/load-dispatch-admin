import {
  CREATE_VEHICLE_FAIL,
  CREATE_VEHICLE_REQUEST,
  CREATE_VEHICLE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
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

  dispatch({
    type: CREATE_VEHICLE_REQUEST,
  });

  axios
    .post("/vehicle/create", requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_VEHICLE_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_VEHICLE_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
