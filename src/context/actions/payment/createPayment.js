import {
  CREATE_PAYMENT_FAIL,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    UserId: form.UserId || "",
    OrderId: form.OrderId || "",
    TotalPrice: form.TotalPrice || "",
    PaymentSessionId: form.PaymentSessionId || "",
    ReferenceId: form.ReferenceId || "",
    OrderStatus: form.OrderStatus || "",
    PaymentMethod: form.PaymentMethod || "",
  };

  dispatch({
    type: CREATE_PAYMENT_REQUEST,
  });

  axios
    .post("/payment/create", requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_PAYMENT_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_PAYMENT_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
