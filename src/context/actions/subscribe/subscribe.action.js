import {
  CREATE_SUBSCRIBE_FAIL,
  CREATE_SUBSCRIBE_REQUEST,
  CREATE_SUBSCRIBE_SUCCESS,
  GET_SUBSCRIBES_FAIL,
  GET_SUBSCRIBES_REQUEST,
  GET_SUBSCRIBES_SUCCESS,
  EDIT_SUBSCRIBE_FAIL,
  EDIT_SUBSCRIBE_REQUEST,
  EDIT_SUBSCRIBE_SUCCESS,
  DELETE_SUBSCRIBE_FAIL,
  DELETE_SUBSCRIBE_REQUEST,
  DELETE_SUBSCRIBE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export const listSubscriptions = () => async (dispatch) => {
  dispatch({
    type: GET_SUBSCRIBES_REQUEST,
  });
  try {
    const { res } = await axios.get(`/subscription/findAll/`);
    dispatch({ type: GET_SUBSCRIBES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_SUBSCRIBES_FAIL, payload: error.message });
  }
};

export const listSubscriptionsBySubscriptionId =
  (subscriptionId) => async (dispatch) => {
    dispatch({
      type: GET_SUBSCRIBES_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/subscription/findOne/${subscriptionId}`
      );
      dispatch({ type: GET_SUBSCRIBES_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_SUBSCRIBES_FAIL, payload: error.message });
    }
  };

export const listSubscriptionsByDate =
  (fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_SUBSCRIBES_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/subscription/findAllSubscriptionsByDate/${fromDate}/${endDate}/}`
      );
      dispatch({ type: GET_SUBSCRIBES_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_SUBSCRIBES_FAIL, payload: error.message });
    }
  };

export const listSubscriptionByCriteria = (url, params) => async (dispatch) => {
  dispatch({
    type: GET_SUBSCRIBES_REQUEST,
  });
  try {
    const { data } = await axios.get(`${url}${params}`);
    dispatch({ type: GET_SUBSCRIBES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SUBSCRIBES_FAIL, payload: error.message });
  }
};

export const createSubscription = (form) => async (dispatch) => {
  const requestPayload = {
    SubscriptionType: form.SubscriptionType || "",
    SubscriptionName: form.SubscriptionName || "",
    Amount: form.Amount || "",
    Description: form.Description || "",
    Duration: form.Duration || null,
  };

  dispatch({ type: CREATE_SUBSCRIBE_REQUEST });

  try {
    const { res } = await axios.post(`/subscription/create/`, requestPayload);

    dispatch({
      type: CREATE_SUBSCRIBE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CREATE_SUBSCRIBE_FAIL, payload: message });
  }
};

export const editSubscription = (form, subscriptionId) => async (dispatch) => {
  const requestPayload = {
    SubscriptionId: subscriptionId || form.SubscriptionType || "",
    SubscriptionType: form.SubscriptionType || "",
    SubscriptionName: form.SubscriptionName || "",
    Amount: form.Amount || "",
    Description: form.Description || "",
    Duration: form.Duration || null,
  };

  dispatch({ type: EDIT_SUBSCRIBE_REQUEST });

  try {
    const { res } = await axios.put(
      `/subscription/update/subscriptionId`,
      requestPayload
    );

    dispatch({
      type: EDIT_SUBSCRIBE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: EDIT_SUBSCRIBE_FAIL, payload: message });
  }
};

export const deleteSubscription = (subscriptionId) => async (dispatch) => {
  dispatch({ type: DELETE_SUBSCRIBE_REQUEST });

  try {
    const { res } = await axios.delete(
      `/subscription/delete/${subscriptionId}`
    );

    dispatch({
      type: DELETE_SUBSCRIBE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DELETE_SUBSCRIBE_FAIL, payload: message });
  }
};
