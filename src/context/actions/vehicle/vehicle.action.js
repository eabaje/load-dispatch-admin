import {
  CREATE_VEHICLE_FAIL,
  CREATE_VEHICLE_REQUEST,
  CREATE_VEHICLE_SUCCESS,
  GET_VEHICLES_FAIL,
  GET_VEHICLES_REQUEST,
  GET_VEHICLES_SUCCESS,
  EDIT_VEHICLE_FAIL,
  EDIT_VEHICLE_REQUEST,
  EDIT_VEHICLE_SUCCESS,
  DELETE_VEHICLE_FAIL,
  DELETE_VEHICLE_REQUEST,
  DELETE_VEHICLE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export const listVehicles = () => async (dispatch) => {
  dispatch({
    type: GET_VEHICLES_REQUEST,
  });
  try {
    const { res } = await axios.get(`/vehicle/findAll/`);
    dispatch({ type: GET_VEHICLES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_VEHICLES_FAIL, payload: error.message });
  }
};

export const listVehiclesByVehicleId = (vehicleId) => async (dispatch) => {
  dispatch({
    type: GET_VEHICLES_REQUEST,
  });
  try {
    const { res } = await axios.get(`/vehicle/findOne/${vehicleId}`);
    dispatch({ type: GET_VEHICLES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_VEHICLES_FAIL, payload: error.message });
  }
};

export const listVehiclesInsured = () => async (dispatch) => {
  dispatch({
    type: GET_VEHICLES_REQUEST,
  });
  try {
    const { res } = await axios.get(`/vehicle/findAllVehiclesInsured/`);
    dispatch({ type: GET_VEHICLES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_VEHICLES_FAIL, payload: error.message });
  }
};

export const listVehiclesLicensed = () => async (dispatch) => {
  dispatch({
    type: GET_VEHICLES_REQUEST,
  });
  try {
    const { res } = await axios.get(`/vehicle/findAllVehiclesLicensed/`);
    dispatch({ type: GET_VEHICLES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_VEHICLES_FAIL, payload: error.message });
  }
};

export const listVehiclesByDate = (fromDate, endDate) => async (dispatch) => {
  dispatch({
    type: GET_VEHICLES_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/vehicle/findAllVehiclesByDate/${fromDate}/${endDate}/}`
    );
    dispatch({ type: GET_VEHICLES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_VEHICLES_FAIL, payload: error.message });
  }
};

export const createVehicle = (form) => async (dispatch) => {
  const requestPayload = {
    CarrierId: form.CarrierId,
    VehicleType: form.VehicleType,
    VehicleNumber: form.VehicleNumber,
    SerialNumber: form.SerialNumber,
    VehicleMake: form.VehicleMake,
    VehicleColor: form.VehicleColor,
    VehicleModel: form.VehicleModel,
    LicensePlate: form.LicensePlate,
    VehicleModelYear: form.VehicleModelYear,
    PurchaseYear: form.PurchaseYear,
    Insured: form.Insured ? form.Insured : false,
    PicUrl: form.PicUrl || null,
    VehicleDocs: form.VehicleDocs || "",
  };

  dispatch({ type: CREATE_VEHICLE_REQUEST });

  try {
    const { res } = await axios.post(`/vehicle/create/`, requestPayload);

    dispatch({
      type: CREATE_VEHICLE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: CREATE_VEHICLE_FAIL, payload: message });
  }
};

export const editVehicle = (form, vehicleId) => async (dispatch) => {
  const requestPayload = {
    VehicleId: vehicleId || form.VehicleId,
    CarrierId: form.CarrierId,
    VehicleType: form.VehicleType,
    VehicleNumber: form.VehicleNumber,
    SerialNumber: form.SerialNumber,
    VehicleMake: form.VehicleMake,
    VehicleColor: form.VehicleColor,
    VehicleModel: form.VehicleModel,
    LicensePlate: form.LicensePlate,
    VehicleModelYear: form.VehicleModelYear,
    PurchaseYear: form.PurchaseYear,
    Insured: form.Insured ? form.Insured : false,
    PicUrl: form.PicUrl || null,
    VehicleDocs: form.VehicleDocs || "",
  };

  dispatch({ type: EDIT_VEHICLE_REQUEST });

  try {
    const { res } = await axios.put(`/vehicle/update/`, requestPayload);

    dispatch({
      type: EDIT_VEHICLE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: EDIT_VEHICLE_FAIL, payload: message });
  }
};

export const deleteVehicle = (vehicleId) => async (dispatch) => {
  dispatch({ type: DELETE_VEHICLE_REQUEST });

  try {
    const { res } = await axios.delete(`/vehicle/delete/${vehicleId}`);

    dispatch({
      type: DELETE_VEHICLE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: DELETE_VEHICLE_FAIL, payload: message });
  }
};
