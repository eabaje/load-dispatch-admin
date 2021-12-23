import {
  CREATE_PAYMENT_FAIL,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  GET_PAYMENTS_FAIL,
  GET_PAYMENTS_REQUEST,
  GET_PAYMENTS_SUCCESS,
  EDIT_PAYMENT_FAIL,
  EDIT_PAYMENT_REQUEST,
  EDIT_PAYMENT_SUCCESS,
  DELETE_PAYMENT_FAIL,
  DELETE_PAYMENT_REQUEST,
  DELETE_PAYMENT_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export const listPayments = () => async (dispatch) => {
  dispatch({
    type: GET_PAYMENTS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/payment/findAll/`);
    dispatch({ type: GET_PAYMENTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PAYMENTS_FAIL, payload: error.message });
  }
};

export const listPaymentByCriteria = (url, params) => async (dispatch) => {
  dispatch({
    type: GET_PAYMENTS_REQUEST,
  });
  try {
    const { data } = await axios.get(`${url}${params}`);
    dispatch({ type: GET_PAYMENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PAYMENTS_FAIL, payload: error.message });
  }
};

export const createPayment = (form) => async (dispatch) => {
  const requestPayload = {
    UserId: form.UserId || "",
    OrderId: form.OrderId || "",
    TotalPrice: form.TotalPrice || "",
    PaymentSessionId: form.PaymentSessionId || "",
    ReferenceId: form.ReferenceId || "",
    OrderStatus: form.OrderStatus || "",
    PaymentMethod: form.PaymentMethod || "",
  };

  dispatch({ type: CREATE_PAYMENT_REQUEST });

  try {
    const { res } = await axios.post(`/payment/create/`, requestPayload);

    dispatch({
      type: CREATE_PAYMENT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: CREATE_PAYMENT_FAIL, payload: message });
  }
};

export const editPayment = (form, paymentId) => async (dispatch) => {
  const requestPayload = {
    PaymentId: paymentId || form.PaymentId,
    UserId: form.UserId || "",
    OrderId: form.OrderId || "",
    TotalPrice: form.TotalPrice || "",
    PaymentSessionId: form.PaymentSessionId || "",
    ReferenceId: form.ReferenceId || "",
    OrderStatus: form.OrderStatus || "",
    PaymentMethod: form.PaymentMethod || "",
  };

  dispatch({ type: EDIT_PAYMENT_REQUEST });

  try {
    const { res } = await axios.put(`/payment/update/`, requestPayload);

    dispatch({
      type: EDIT_PAYMENT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: EDIT_PAYMENT_FAIL, payload: message });
  }
};

export const deletePayment = (paymentId) => async (dispatch) => {
  const requestPayload = {
    PaymentId: paymentId,
  };

  dispatch({ type: DELETE_PAYMENT_REQUEST });

  try {
    const { res } = await axios.delete(`/payment/delete/${paymentId}`);

    dispatch({
      type: DELETE_PAYMENT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: DELETE_PAYMENT_FAIL, payload: message });
  }
};
