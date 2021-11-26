import {
  EDIT_SHIPMENT_FAIL,
  EDIT_SHIPMENT_REQUEST,
  EDIT_SHIPMENT_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form, id) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    ShipmentId: id,
    CompanyId: form.CompanyId || "",
    LoadCategory: form.LoadCategory || "",
    LoadType: form.LoadType || "",
    LoadWeight: form.LoadWeight || "",
    LoadUnit: form.LoadUnit || "",
    Qty: form.Qty || "",
    Description: form.Description || "",
    ShipmentDate: form.ShipmentDate || "",
    ShipmentDocs: form.ShipmentDocs || "",
    ShipmentStatus: form.ShipmentStatus || "",
  };

  console.log("requestPayload :>> ", requestPayload);
  dispatch({
    type: EDIT_SHIPMENT_REQUEST,
  });

  axios
    .put(`/shipment/update/`, requestPayload)
    .then((res) => {
      dispatch({
        type: EDIT_SHIPMENT_SUCCESS,
        payload: res.data,
      });

      onSuccess(res.data);
    })
    .catch((err) => {
      console.log("err", err.response);
      dispatch({
        type: EDIT_SHIPMENT_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
