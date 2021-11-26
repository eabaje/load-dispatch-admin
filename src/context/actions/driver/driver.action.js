import {
  CREATE_DRIVER_FAIL,
  CREATE_DRIVER_REQUEST,
  CREATE_DRIVER_SUCCESS,
  GET_DRIVERS_FAIL,
  GET_DRIVERS_REQUEST,
  GET_DRIVERS_SUCCESS,
  EDIT_DRIVER_FAIL,
  EDIT_DRIVER_REQUEST,
  EDIT_DRIVER_SUCCESS,
  DELETE_DRIVER_FAIL,
  DELETE_DRIVER_REQUEST,
  DELETE_DRIVER_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export const listDrivers = () => async (dispatch) => {
  dispatch({
    type: GET_DRIVERS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/driver/findAll/`);
    dispatch({ type: GET_DRIVERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_DRIVERS_FAIL, payload: error.message });
  }
};

export const listDriversByDriverName = (driverName) => async (dispatch) => {
  dispatch({
    type: GET_DRIVERS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/driver/findAllDriversByDriverName/${driverName}`
    );
    dispatch({ type: GET_DRIVERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_DRIVERS_FAIL, payload: error.message });
  }
};

export const listDriversByVehicle = (vehicleId) => async (dispatch) => {
  dispatch({
    type: GET_DRIVERS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/driver/findAllDriversByVehicle/${vehicleId}`
    );
    dispatch({ type: GET_DRIVERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_DRIVERS_FAIL, payload: error.message });
  }
};

export const listDriversLicensed = () => async (dispatch) => {
  dispatch({
    type: GET_DRIVERS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/driver/findAllDriversLicensed/`);
    dispatch({ type: GET_DRIVERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_DRIVERS_FAIL, payload: error.message });
  }
};

export const listDriversByDate = (fromDate, endDate) => async (dispatch) => {
  dispatch({
    type: GET_DRIVERS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/driver/findAllDriversByDate/${fromDate}/${endDate}/}`
    );
    dispatch({ type: GET_DRIVERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_DRIVERS_FAIL, payload: error.message });
  }
};

export const listDriverByCriteria = (url, params) => async (dispatch) => {
  dispatch({
    type: GET_DRIVERS_REQUEST,
  });
  try {
    const { data } = await axios.get(`${url}${params}`);
    dispatch({ type: GET_DRIVERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_DRIVERS_FAIL, payload: error.message });
  }
};

export const createDriver = (form) => async (dispatch) => {
  const requestPayload = {
    CompanyId: form.CompanyId || "",
    DriverName: form.DriverName || "",
    Email: form.Email || "",
    Phone: form.Phone || "",
    Address: form.Address || "",
    City: form.City || "",
    Country: form.Country || "",
    Licensed: form.Licensed || "",
    LicenseUrl: form.LicenseUrl || "",
    Rating: form.Rating || "",
    DriverDocs: form.DriverDocs || "",
    PicUrl: form.PicUrl || null,
  };

  dispatch({ type: CREATE_DRIVER_REQUEST });

  try {
    const { res } = await axios.post(`/driver/create/`, requestPayload);

    dispatch({
      type: CREATE_DRIVER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CREATE_DRIVER_FAIL, payload: message });
  }
};

export const editDriver = (form, driverId) => async (dispatch) => {
  const requestPayload = {
    CompanyId: form.CompanyId || "",
    DriverName: form.DriverName || "",
    Email: form.Email || "",
    Phone: form.Phone || "",
    Address: form.Address || "",
    City: form.City || "",
    Country: form.Country || "",
    Licensed: form.Licensed || "",
    LicenseUrl: form.LicenseUrl || "",
    Rating: form.Rating || "",
    DriverDocs: form.DriverDocs || "",
    PicUrl: form.PicUrl || null,
  };

  dispatch({ type: EDIT_DRIVER_REQUEST });

  try {
    const { res } = await axios.put(`/driver/update/`, requestPayload);

    dispatch({
      type: EDIT_DRIVER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: EDIT_DRIVER_FAIL, payload: message });
  }
};

export const deleteDriver = (driverId) => async (dispatch) => {
  dispatch({ type: DELETE_DRIVER_REQUEST });

  try {
    const { res } = await axios.delete(`/driver/delete/${driverId}`);

    dispatch({
      type: DELETE_DRIVER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DELETE_DRIVER_FAIL, payload: message });
  }
};
