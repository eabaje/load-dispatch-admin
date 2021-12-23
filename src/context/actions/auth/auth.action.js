import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";
import Axios from "axios";
import { API_URL } from "../../../constants";

export const register = (form) => async (dispatch) => {
  const requestPayload = {
    CompanyId: form.CompanyId || "",
    CarrierName: form.CarrierName || "",
    Email: form.Email || "",
    Phone: form.Phone || "",
    Address: form.Address || "",
    City: form.City || "",
    Country: form.Country || "",
    Licensed: form.Licensed || "",
    LicenseUrl: form.LicenseUrl || "",
    Rating: form.Rating || "",
    CarrierDocs: form.CarrierDocs || "",
    PicUrl: form.PicUrl || null,
  };

  dispatch({ type: REGISTER_REQUEST, payload: { requestPayload } });
  try {
    const { res } = await axios.post("auth/register", {
      requestPayload,
    });

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    // dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.message ? error.message.message : error.message,
    });
  }
};

export const signin = (form, dispatch) => {
  const requestPayload = {
    Email: form.Email,
    Password: form.Password,
  };
  dispatch({ type: LOGIN_REQUEST, payload: requestPayload });
  try {
    const res = Axios.post(`${API_URL}auth/signin`, requestPayload);

    dispatch({ type: LOGIN_SUCCESS, payload: res.data });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message
        ? error.message.data
        : { error: "Something went wrong, try agin" },
    });
  }
};

export const signin2 = (form) => (dispatch) => {
  const requestPayload = {
    Email: form.Email,
    Password: form.Password,
  };

  dispatch({
    type: LOGIN_REQUEST,
  });
  axios
    .post(`auth/signin`, requestPayload)
    .then((res) => {
      console.log(`res`, res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.message
          ? err.response
          : { error: "Something went wrong, try agin" },
      });
    });
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  dispatch({ type: CLEAR_AUTH_STATE });
  document.location.href = "/signin";
};
