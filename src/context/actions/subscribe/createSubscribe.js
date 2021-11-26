import {
  CREATE_SUBSCRIBE_FAIL,
  CREATE_SUBSCRIBE_REQUEST,
  CREATE_SUBSCRIBE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    SubscriptionType: form.SubscriptionType || "",
    SubscriptionName: form.SubscriptionName || "",
    Amount: form.Amount || "",
    Description: form.Description || "",
    Duration: form.Duration || null,
  };

  dispatch({
    type: CREATE_SUBSCRIBE_REQUEST,
  });

  axios
    .post("/subscription/create", requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_SUBSCRIBE_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_SUBSCRIBE_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
