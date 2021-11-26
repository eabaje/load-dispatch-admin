import {
  CREATE_PROFILE_FAIL,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    CompanyId: form.CompanyId || "",
    FirstName: form.FirstName || "",
    LastName: form.LastName || "",
    FullName: form.FirstName + " " + form.LastName,
    Email: form.Email || "",
    Phone: form.Phone || "",
    Address: form.Address || "",
    City: form.City || "",
    Country: form.Country || "",
    UserPicUrl: form.UserPicUrl || null,
  };

  dispatch({
    type: CREATE_PROFILE_REQUEST,
  });

  axios
    .post("/user/create", requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_PROFILE_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_PROFILE_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
