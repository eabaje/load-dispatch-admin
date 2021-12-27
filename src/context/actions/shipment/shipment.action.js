import {
  CREATE_SHIPMENT_FAIL,
  CREATE_SHIPMENT_REQUEST,
  CREATE_SHIPMENT_SUCCESS,
  GET_SHIPMENTS_FAIL,
  GET_SHIPMENTS_REQUEST,
  GET_SHIPMENTS_SUCCESS,
  EDIT_SHIPMENT_FAIL,
  EDIT_SHIPMENT_REQUEST,
  EDIT_SHIPMENT_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export const listShipments = () => async (dispatch) => {
  dispatch({
    type: GET_SHIPMENTS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/shipment/findAll/`);
    dispatch({ type: GET_SHIPMENTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_SHIPMENTS_FAIL, payload: error.message });
  }
};

export const listShipmentsByShipmentId = (shipmentId) => async (dispatch) => {
  dispatch({
    type: GET_SHIPMENTS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/shipment/findOne/${shipmentId}`);
    dispatch({ type: GET_SHIPMENTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_SHIPMENTS_FAIL, payload: error.message });
  }
};

export const listShipmentsByDate = (fromDate, endDate) => async (dispatch) => {
  dispatch({
    type: GET_SHIPMENTS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/shipment/findAllShipmentsByRecordDate/${fromDate}/${endDate}/}`
    );
    dispatch({ type: GET_SHIPMENTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_SHIPMENTS_FAIL, payload: error.message });
  }
};

export const listShipmentsByDeliveryDate =
  (fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_SHIPMENTS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/shipment/findAllShipmentsByDeliveryDate/${fromDate}/${endDate}/}`
      );
      dispatch({ type: GET_SHIPMENTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_SHIPMENTS_FAIL, payload: error.message });
    }
  };

export const listShipmentsByPickUpDate =
  (fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_SHIPMENTS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/shipment/findAllShipmentsByPickUpDate/${fromDate}/${endDate}/}`
      );
      dispatch({ type: GET_SHIPMENTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_SHIPMENTS_FAIL, payload: error.message });
    }
  };

export const listShipmentsByStatus =
  (shipmentStatus, shipmentid) => async (dispatch) => {
    dispatch({
      type: GET_SHIPMENTS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/shipment/findAllShipmentsByStatus/${shipmentStatus}/${shipmentid}/}`
      );
      dispatch({ type: GET_SHIPMENTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_SHIPMENTS_FAIL, payload: error.message });
    }
  };

export const listShipmentsByAssigned =
  (shipmentid, assignedshipment) => async (dispatch) => {
    dispatch({
      type: GET_SHIPMENTS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/shipment/findAllShipmentsByStatus/${shipmentid}/${assignedshipment}/}`
      );
      dispatch({ type: GET_SHIPMENTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_SHIPMENTS_FAIL, payload: error.message });
    }
  };

export const listShipmentByCriteria = (url, params) => async (dispatch) => {
  dispatch({
    type: GET_SHIPMENTS_REQUEST,
  });
  try {
    const { data } = await axios.get(`${url}${params}`);
    dispatch({ type: GET_SHIPMENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SHIPMENTS_FAIL, payload: error.message });
  }
};

export const createShipment = (form) => async (dispatch) => {
  const requestPayload = {
    CompanyId: form.CompanyId || "",
    LoadCategory: form.LoadCategory || "",
    LoadType: form.LoadType || "",
    LoadWeight: form.LoadWeight || "",
    LoadUnit: form.LoadUnit || "",
    Qty: form.Qty || "",
    Description: form.Description || "",
    PickUpCountry: form.PickUpCountry,
    PickUpRegion: form.PickUpRegion,
    PickUpLocation: form.PickUpLocation,
    DeliveryCountry: form.DeliveryCountry,
    DeliveryRegion: form.DeliveryRegion,
    DeliveryLocation: form.DeliveryLocation,
    ExpectedPickUpDate: form.ExpectedPickUpDate,
    ExpectedDeliveryDate: form.ExpectedDeliveryDate,
    RequestForShipment: form.RequestForShipment,
    ShipmentRequestPrice: form.ShipmentRequestPrice,
    DeliveryContactName: form.DeliveryContactName,
    DeliveryContactPhone: form.DeliveryContactPhone,
    DeliveryEmail: form.DeliveryEmail,
    AssignedShipment: form.AssignedShipment,
    ShipmentDate: form.ShipmentDate,
    ShipmentDocs: form.ShipmentDocs || "",
    ShipmentStatus: form.ShipmentStatus || "",
    // contact_picture: form.contactPicture || null,
    // is_favorite: form.isFavorite || false,
  };

  dispatch({ type: CREATE_SHIPMENT_REQUEST });

  try {
    const { res } = await axios.post(`/shipment/create/`, form);

    dispatch({
      type: CREATE_SHIPMENT_SUCCESS,
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: CREATE_SHIPMENT_FAIL, payload: message });
  }
};

export const editShipment = (form, shipmentId) => async (dispatch) => {
  const requestPayload = {
    ShipmentId: shipmentId || form.ShipmentId,
    UserId: form.UserId,
    CompanyId: form.CompanyId || "",
    LoadCategory: form.LoadCategory || "",
    LoadType: form.LoadType || "",
    LoadWeight: form.LoadWeight || "",
    LoadUnit: form.LoadUnit || "",
    Qty: form.Qty || "",
    Description: form.Description || "",
    PickUpCountry: form.PickUpCountry,
    PickUpRegion: form.PickUpRegion,
    PickUpLocation: form.PickUpLocation,
    DeliveryCountry: form.DeliveryCountry,
    DeliveryRegion: form.DeliveryRegion,
    DeliveryLocation: form.DeliveryLocation,
    ExpectedPickUpDate: form.ExpectedPickUpDate,
    ExpectedDeliveryDate: form.ExpectedDeliveryDate,
    RequestForShipment: form.RequestForShipment,
    ShipmentRequestPrice: form.ShipmentRequestPrice,
    DeliveryContactName: form.DeliveryContactName,
    DeliveryContactPhone: form.DeliveryContactPhone,
    DeliveryEmail: form.DeliveryEmail,
    AssignedShipment: form.AssignedShipment,
    ShipmentDate: form.ShipmentDate || "",
    ShipmentDocs: form.ShipmentDocs || "",
    ShipmentStatus: form.ShipmentStatus || "",
    // contact_picture: form.contactPicture || null,
    // is_favorite: form.isFavorite || false,
  };

  dispatch({ type: EDIT_SHIPMENT_REQUEST });

  try {
    const { res } = await axios.put(`/shipment/update/${shipmentId}`, form);

    dispatch({
      type: EDIT_SHIPMENT_SUCCESS,
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: EDIT_SHIPMENT_FAIL, payload: message });
  }
};
