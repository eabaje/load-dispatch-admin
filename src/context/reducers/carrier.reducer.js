import {
  CREATE_CARRIER_FAIL,
  CREATE_CARRIER_REQUEST,
  CREATE_CARRIER_SUCCESS,
  DELETE_CARRIER_REQUEST,
  DELETE_CARRIER_SUCCESS,
  GET_CARRIERS_FAIL,
  GET_CARRIERS_REQUEST,
  GET_CARRIERS_SUCCESS,
  EDIT_CARRIER_REQUEST,
  EDIT_CARRIER_SUCCESS,
  EDIT_CARRIER_FAIL,
} from "../../constants/actionTypes";

const carriers = (state, { type, payload }) => {
  switch (type) {
    case EDIT_CARRIER_REQUEST: {
      return {
        ...state,
        createCarrier: {
          ...state.createCarrier,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_CARRIER_SUCCESS: {
      return {
        ...state,
        createCarrier: {
          ...state.createCarrier,
          loading: false,
          error: null,
        },

        getCarriers: {
          ...state.getCarriers,
          loading: false,
          data: state.getCarriers.data.map((item) => {
            if (item.CarrierId === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };
    }

    case EDIT_CARRIER_FAIL: {
      return {
        ...state,
        createCarrier: {
          ...state.createCarrier,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_CARRIER_REQUEST: {
      return {
        ...state,
        deleteCarrier: {
          ...state.deleteCarrier,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_CARRIER_SUCCESS: {
      return {
        ...state,
        deleteCarrier: {
          ...state.deleteCarrier,
          loading: false,
          error: null,
        },

        getCarriers: {
          ...state.getCarriers,
          loading: false,
          data: state.getCarriers.data.filter(
            (item) => item.CarrierId !== payload
          ),
          error: null,
        },
      };
    }

    case CREATE_CARRIER_FAIL:
      return {
        ...state,
        createCarrier: {
          ...state.createCarrier,
          loading: false,
          error: null,
        },
      };
    case CREATE_CARRIER_REQUEST:
      return {
        ...state,
        createCarrier: {
          ...state.createCarrier,
          loading: true,
          error: null,
        },
      };
    case CREATE_CARRIER_SUCCESS:
      return {
        ...state,
        createCarrier: {
          ...state.createCarrier,
          loading: false,
          error: null,
          data: payload,
        },

        getCarriers: {
          ...state.getCarriers,
          loading: false,
          data: [payload, ...state.getCarriers.data],
          error: null,
        },
      };

    case CREATE_CARRIER_FAIL:
      return {
        ...state,
        createCarrier: {
          ...state.createCarrier,
          loading: false,
          error: payload,
        },
      };

    case GET_CARRIERS_REQUEST:
      return {
        ...state,
        getCarriers: {
          ...state.getCarriers,
          loading: true,
          error: null,
        },
      };

    case GET_CARRIERS_SUCCESS:
      return {
        ...state,
        getCarriers: {
          ...state.getCarriers,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_CARRIERS_FAIL:
      return {
        ...state,
        getCarriers: {
          ...state.getCarriers,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default carriers;
