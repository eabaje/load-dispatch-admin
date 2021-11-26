import {
  CREATE_LOAD_FAIL,
  CREATE_LOAD_REQUEST,
  CREATE_LOAD_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    country_code: form.phoneCode || "",
    first_name: form.firstName || "",
    last_name: form.lastName || "",
    phone_number: form.phoneNumber || "",
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };

  dispatch({
    type: CREATE_LOAD_REQUEST,
  });

  axios
    .post("/load/", requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_LOAD_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_LOAD_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
