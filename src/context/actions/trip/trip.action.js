/* eslint-disable no-undef */
import {
  CREATE_TRIP_FAIL,
  CREATE_TRIP_REQUEST,
  CREATE_TRIP_SUCCESS,
  GET_TRIPS_FAIL,
  GET_TRIPS_REQUEST,
  GET_TRIPS_SUCCESS,
  EDIT_TRIP_FAIL,
  EDIT_TRIP_REQUEST,
  EDIT_TRIP_SUCCESS,
  CREATE_TRACK_FAIL,
  CREATE_TRACK_REQUEST,
  CREATE_TRACK_SUCCESS,
  GET_TRACKS_FAIL,
  GET_TRACKS_REQUEST,
  GET_TRACKS_SUCCESS,
  EDIT_TRACK_FAIL,
  EDIT_TRACK_REQUEST,
  EDIT_TRACK_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export const listTrips = () => async (dispatch) => {
  dispatch({
    type: GET_TRIPS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/trip/findAll/`);
    dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
  }
};

export const listTracks = (tripId) => async (dispatch) => {
  dispatch({
    type: GET_TRACKS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/trip/findallTrack/${tripId}`);
    dispatch({ type: GET_TRACKS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TRACKS_FAIL, payload: error.message });
  }
};

export const listTripsByTripId = (tripId) => async (dispatch) => {
  dispatch({
    type: GET_TRIPS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/trip/findOne/${tripId}`);
    dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
  }
};

export const listTracksByTripId = (tripId) => async (dispatch) => {
  dispatch({
    type: GET_TRACKS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/trip/findallTrack/${tripId}`);
    dispatch({ type: GET_TRACKS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TRACKS_FAIL, payload: error.message });
  }
};

export const listTracksByTrackId = (trackId) => async (dispatch) => {
  dispatch({
    type: GET_TRACKS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/trip/findonetrack/${trackId}`);
    dispatch({ type: GET_TRACKS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TRACKS_FAIL, payload: error.message });
  }
};

export const listTripsByShipmentId = (shipmentId) => async (dispatch) => {
  dispatch({
    type: GET_TRIPS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/trip/findTripByShipment/${shipmentId}`);
    dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
  }
};

export const listTripsByVehicleId = (shipmentId) => async (dispatch) => {
  dispatch({
    type: GET_TRIPS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/trip/findAllTripsByVehicle/${shipmentId}`
    );
    dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
  }
};

export const listTripsByShipment = (shipmentId) => async (dispatch) => {
  dispatch({
    type: GET_TRIPS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/trip/findAllTripsByShipment/${shipmentId}`
    );
    dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
  }
};

export const listTripsByPickUpLocation =
  (pickUpLocation) => async (dispatch) => {
    dispatch({
      type: GET_TRIPS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/trip/findAllTripsByPickUpLocation/${pickUpLocation}`
      );
      dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
    }
  };

export const listTripsByDeliveryLocation =
  (deliveryLocation) => async (dispatch) => {
    dispatch({
      type: GET_TRIPS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/trip/findAllTripsByDeliveryLocation/${deliveryLocation}`
      );
      dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
    }
  };

export const listTripsByDriver =
  (driverId, fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_TRIPS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/trip/findAllTripsByDriver/${driverId}/${fromDate}/ ${endDate}`
      );
      dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
    }
  };

export const listTripsByVehicle =
  (vehcleId, fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_TRIPS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/trip/findAllTripsByVehicle/${vehcleId}/${fromDate}/ ${endDate}`
      );
      dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
    }
  };

export const listTripsByDate = (fromDate, endDate) => async (dispatch) => {
  dispatch({
    type: GET_TRIPS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/trip/findAllTripsByDate/${fromDate}/${endDate}/}`
    );
    dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
  }
};

export const listTripsByDeliveryDate =
  (fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_TRIPS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/trip/findAllTripsByDeliveryDate/${fromDate}/${endDate}/}`
      );
      dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
    }
  };

export const listTripsByPickUpDate =
  (fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_TRIPS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/trip/findAllTripsByPickUpDate/${fromDate}/${endDate}/}`
      );
      dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
    }
  };

export const listTripsByStatus = (tripStatus, tripid) => async (dispatch) => {
  dispatch({
    type: GET_TRIPS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/trip/findAllTripsByStatus/${tripStatus}/${tripid}/}`
    );
    dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
  }
};

export const listTripByCriteria = (url, params) => async (dispatch) => {
  dispatch({
    type: GET_TRIPS_REQUEST,
  });
  try {
    const { data } = await axios.get(`${url}${params}`);
    dispatch({ type: GET_TRIPS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_TRIPS_FAIL, payload: error.message });
  }
};

export const createTrip = (form) => async (dispatch) => {
  const requestPayload = {
    TrackId: form.TrackId,
    ShipmentId: form.ShipmentId,
    VehicleId: form.VehicleId || "",
    DriverId: form.DriverId || "",
    PickUpLocation: form.PickUpLocation,
    DeliveryLocation: form.DeliveryLocation,
    PickUpDate: form.PickUpDate,
    Duration: form.Duration,
    DeliveryDate: form.DeliveryDate,
    DriverNote: form.DriverNote,
    Rating: form.Rating,
  };

  dispatch({ type: CREATE_TRIP_REQUEST });

  try {
    const { res } = await axios.post(`/trip/create/`, requestPayload);

    dispatch({
      type: CREATE_TRIP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CREATE_TRIP_FAIL, payload: message });
  }
};

export const editTrip = (form, tripId) => async (dispatch) => {
  const requestPayload = {
    TripId: tripId || form.TripId,
    TrackId: form.TrackId,
    ShipmentId: form.ShipmentId,
    VehicleId: form.VehicleId || "",
    DriverId: form.DriverId || "",
    PickUpLocation: form.PickUpLocation,
    DeliveryLocation: form.DeliveryLocation,
    PickUpDate: form.PickUpDate,
    Duration: form.Duration,
    DeliveryDate: form.DeliveryDate,
    DriverNote: form.DriverNote,
    Rating: form.Rating,

    // contact_picture: form.contactPicture || null,
    // is_favorite: form.isFavorite || false,
  };

  dispatch({ type: EDIT_TRIP_REQUEST });

  try {
    const { res } = await axios.put(`/trip/update/${tripId}`, requestPayload);

    dispatch({
      type: EDIT_TRIP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: EDIT_TRIP_FAIL, payload: message });
  }
};

export const addTrack = (form) => async (dispatch) => {
  const requestPayload = {
    TripId: form.TripId || "",
    Status: form.Status || "",
    TrackNote: form.TrackNote || "",
  };

  dispatch({ type: CREATE_TRIP_REQUEST });

  try {
    const { res } = await axios.post(`/trip/addtrack/`, requestPayload);

    dispatch({
      type: CREATE_TRIP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CREATE_TRIP_FAIL, payload: message });
  }
};

export const editTrack = (form, trackId) => async (dispatch) => {
  const requestPayload = {
    TrackId: trackId || form.TripId,
    TripId: form.TripId || "",
    Status: form.Status || "",
    TrackNote: form.TrackNote || "",
  };

  dispatch({ type: CREATE_TRIP_REQUEST });

  try {
    const { res } = await axios.put(
      `/trip/updatetrack/${trackId}`,
      requestPayload
    );

    dispatch({
      type: CREATE_TRIP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CREATE_TRIP_FAIL, payload: message });
  }
};

export const deleteTrack = (trackId) => async (dispatch) => {
  dispatch({ type: DELETE_TRACK_REQUEST });

  try {
    const { res } = await axios.delete(`/trip/deletetrack/${trackId}`);

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

export const deleteTrip = (tripId) => async (dispatch) => {
  dispatch({ type: DELETE_TRIP_REQUEST });

  try {
    const { res } = await axios.delete(`/trip/deletetrip/${tripId}`);

    dispatch({
      type: DELETE_TRIP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DELETE_TRIP_FAIL, payload: message });
  }
};
