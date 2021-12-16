import {
  CREATE_SHIPMENT_FAIL,
  CREATE_SHIPMENT_REQUEST,
  CREATE_SHIPMENT_SUCCESS,
  DELETE_SHIPMENT_REQUEST,
  DELETE_SHIPMENT_SUCCESS,
  GET_SHIPMENTS_FAIL,
  GET_SHIPMENTS_REQUEST,
  GET_SHIPMENTS_SUCCESS,
  EDIT_SHIPMENT_REQUEST,
  EDIT_SHIPMENT_SUCCESS,
  EDIT_SHIPMENT_FAIL,
} from "../../constants/actionTypes";

const shipments = (state, { type, payload }) => {
  switch (type) {
    case EDIT_SHIPMENT_REQUEST: {
      return {
        ...state,
        createShipment: {
          ...state.createShipment,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_SHIPMENT_SUCCESS: {
      return {
        ...state,
        createShipment: {
          ...state.createShipment,
          loading: false,
          error: null,
        },

        getShipments: {
          ...state.getShipments,
          loading: false,
          data: state.getShipments.data.map((item) => {
            if (item.ShipmentId === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };
    }

    case EDIT_SHIPMENT_FAIL: {
      return {
        ...state,
        createShipment: {
          ...state.createShipment,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_SHIPMENT_REQUEST: {
      return {
        ...state,
        deleteShipment: {
          ...state.deleteShipment,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_SHIPMENT_SUCCESS: {
      return {
        ...state,
        deleteShipment: {
          ...state.deleteShipment,
          loading: false,
          error: null,
        },

        getShipments: {
          ...state.getShipments,
          loading: false,
          data: state.getShipments.data.filter(
            (item) => item.ShipmentId !== payload
          ),
          error: null,
        },
      };
    }

    case CREATE_SHIPMENT_FAIL:
      return {
        ...state,
        createShipment: {
          ...state.createShipment,
          loading: false,
          error: null,
        },
      };
    case CREATE_SHIPMENT_REQUEST:
      return {
        ...state,
        createShipment: {
          ...state.createShipment,
          loading: true,
          error: null,
        },
      };
    case CREATE_SHIPMENT_SUCCESS:
      return {
        ...state,
        createShipment: {
          ...state.createShipment,
          loading: false,
          error: null,
          data: payload,
        },

        getShipments: {
          ...state.getShipments,
          loading: false,
          data: [payload, ...state.getShipments.data],
          error: null,
        },
      };

    case GET_SHIPMENTS_REQUEST:
      return {
        ...state,
        getShipments: {
          ...state.getShipments,
          loading: true,
          error: null,
        },
      };

    case GET_SHIPMENTS_SUCCESS:
      return {
        ...state,
        getShipments: {
          ...state.getShipments,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_SHIPMENTS_FAIL:
      return {
        ...state,
        getShipments: {
          ...state.getShipments,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default shipments;
