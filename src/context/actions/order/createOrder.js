import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    UserId: form.UserId || "",
    OrderId: form.OrderId || "",
    TotalPrice: form.TotalPrice || "",
    PaymentSessionId: form.PaymentSessionId || "",
    IsPaymentSuccessful: form.IsPaymentSuccessful || "",
    OrderStatus: form.OrderStatus || "",
    PaymentMethod: form.PaymentMethod || "",
  };

  dispatch({
    type: CREATE_ORDER_REQUEST,
  });

  axios
    .post("/order/create", requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_ORDER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
