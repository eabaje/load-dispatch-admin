import {
  CREATE_DRIVER_FAIL,
  CREATE_DRIVER_REQUEST,
  CREATE_DRIVER_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    CompanyId: form.CompanyId || "",
    DriverName: form.DriverName || "",
    Email: form.Email || "",
    Phone: form.Phone || "",
    Address: form.Address || "",
    City: form.City || "",
    Country: form.Country || "",
    Licensed: form.Licensed || "",
    LicenseUrl: form.LicenseUrl || "",
    Rating: form.Rating || "",
    DriverDocs: form.DriverDocs || "",
    PicUrl: form.PicUrl || null,
  };

  dispatch({
    type: CREATE_DRIVER_REQUEST,
  });

  axios
    .post("/driver/create", requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_DRIVER_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_DRIVER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
