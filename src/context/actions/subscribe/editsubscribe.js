import {
  EDIT_SUBSCRIBE_FAIL,
  EDIT_SUBSCRIBE_REQUEST,
  EDIT_SUBSCRIBE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form, id) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    SubscriptionId: id,
    SubscriptionType: form.SubscriptionType || "",
    SubscriptionName: form.SubscriptionName || "",
    Amount: form.Amount || "",
    Description: form.Description || "",
    Duration: form.Duration || null,
  };

  console.log("requestPayload :>> ", requestPayload);
  dispatch({
    type: EDIT_SUBSCRIBE_REQUEST,
  });

  axios
    .put(`/subscription/update/${id}`, requestPayload)
    .then((res) => {
      dispatch({
        type: EDIT_SUBSCRIBE_SUCCESS,
        payload: res.data,
      });

      onSuccess(res.data);
    })
    .catch((err) => {
      console.log("err", err.response);
      dispatch({
        type: EDIT_SUBSCRIBE_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
