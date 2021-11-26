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
import AsyncLocalStorage from "@createnextapp/async-local-storage";

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

  dispatch({ type: REGISTER_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post("/auth/register", {
      name,
      email,
      password,
    });
    dispatch({ type: REGISTER_SUCCESS, payload: data });
    // dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    await AsyncLocalStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.message
          : error.message,
    });
  }
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
