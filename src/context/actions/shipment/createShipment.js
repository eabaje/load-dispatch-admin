import {
  CREATE_SHIPMENT_FAIL,
  CREATE_SHIPMENT_REQUEST,
  CREATE_SHIPMENT_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
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
    // contact_picture: form.contactPicture || null,
    // is_favorite: form.isFavorite || false,
  };

  dispatch({
    type: CREATE_SHIPMENT_REQUEST,
  });

  axios
    .post("/shipment/create", requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_SHIPMENT_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_SHIPMENT_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
