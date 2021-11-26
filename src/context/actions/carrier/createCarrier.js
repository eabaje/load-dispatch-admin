import {
  CREATE_CARRIER_FAIL,
  CREATE_CARRIER_REQUEST,
  CREATE_CARRIER_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form) => (dispatch) => {
  const requestPayload = {
    CompanyId: form.CompanyId || "",
    CarrierType: form.CarrierType || "",
    FleetType: form.FleetType || "",
    FleetNumber: form.FleetNumber || "",
    AboutUs: form.AboutUs || "",
    ServiceDescription: form.ServiceDescription || "",
    Rating: form.Rating || "",
    Licensed: form.Licensed || "",
  };

  dispatch({
    type: CREATE_CARRIER_REQUEST,
  });

  axios
    .post("/carrier/create", requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_CARRIER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_CARRIER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
