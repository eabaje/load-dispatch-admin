import {
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form, id) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    UserId: id,
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

  console.log("requestPayload :>> ", requestPayload);
  dispatch({
    type: EDIT_PROFILE_REQUEST,
  });

  axios
    .put(`/user/update/`, requestPayload)
    .then((res) => {
      dispatch({
        type: EDIT_PROFILE_SUCCESS,
        payload: res.data,
      });

      onSuccess(res.data);
    })
    .catch((err) => {
      console.log("err", err.response);
      dispatch({
        type: EDIT_PROFILE_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
