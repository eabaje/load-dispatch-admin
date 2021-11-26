import {
  EDIT_PAYMENT_FAIL,
  EDIT_PAYMENT_REQUEST,
  EDIT_PAYMENT_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form, id) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    country_code: form.phoneCode || "",
    first_name: form.firstName || "",
    last_name: form.lastName || "",
    phone_number: form.phoneNumber || "",
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };

  console.log("requestPayload :>> ", requestPayload);
  dispatch({
    type: EDIT_PAYMENT_REQUEST,
  });

  axios
    .put(`/payment/update/${id}`, requestPayload)
    .then((res) => {
      dispatch({
        type: EDIT_PAYMENT_SUCCESS,
        payload: res.data,
      });

      onSuccess(res.data);
    })
    .catch((err) => {
      console.log("err", err.response);
      dispatch({
        type: EDIT_PAYMENT_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
