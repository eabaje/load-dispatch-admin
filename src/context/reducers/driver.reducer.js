import {
  CREATE_DRIVER_FAIL,
  CREATE_DRIVER_REQUEST,
  CREATE_DRIVER_SUCCESS,
  DELETE_DRIVER_REQUEST,
  DELETE_DRIVER_SUCCESS,
  GET_DRIVERS_FAIL,
  GET_DRIVERS_REQUEST,
  GET_DRIVERS_SUCCESS,
  EDIT_DRIVER_REQUEST,
  EDIT_DRIVER_SUCCESS,
  EDIT_DRIVER_FAIL,
} from "../../constants/actionTypes";

const drivers = (state, { type, payload }) => {
  switch (type) {
    case EDIT_DRIVER_REQUEST: {
      return {
        ...state,
        createDriver: {
          ...state.createDriver,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_DRIVER_SUCCESS: {
      return {
        ...state,
        createDriver: {
          ...state.createDriver,
          loading: false,
          error: null,
        },

        getDrivers: {
          ...state.getDrivers,
          loading: false,
          data: state.getDrivers.data.map((item) => {
            if (item.DriverId === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };
    }

    case EDIT_DRIVER_FAIL: {
      return {
        ...state,
        createDriver: {
          ...state.createDriver,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_DRIVER_REQUEST: {
      return {
        ...state,
        deleteDriver: {
          ...state.deleteDriver,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_DRIVER_SUCCESS: {
      return {
        ...state,
        deleteDriver: {
          ...state.deleteDriver,
          loading: false,
          error: null,
        },

        getDrivers: {
          ...state.getDrivers,
          loading: false,
          data: state.getDrivers.data.filter(
            (item) => item.DriverId !== payload
          ),
          error: null,
        },
      };
    }

    case CREATE_DRIVER_FAIL:
      return {
        ...state,
        createDriver: {
          ...state.createDriver,
          loading: false,
          error: null,
        },
      };
    case CREATE_DRIVER_REQUEST:
      return {
        ...state,
        createDriver: {
          ...state.createDriver,
          loading: true,
          error: null,
        },
      };
    case CREATE_DRIVER_SUCCESS:
      return {
        ...state,
        createDriver: {
          ...state.createDriver,
          loading: false,
          error: null,
          data: payload,
        },

        getDrivers: {
          ...state.getDrivers,
          loading: false,
          data: [payload, ...state.getDrivers.data],
          error: null,
        },
      };

    case CREATE_DRIVER_FAIL:
      return {
        ...state,
        createDriver: {
          ...state.createDriver,
          loading: false,
          error: payload,
        },
      };

    case GET_DRIVERS_REQUEST:
      return {
        ...state,
        getDrivers: {
          ...state.getDrivers,
          loading: true,
          error: null,
        },
      };

    case GET_DRIVERS_SUCCESS:
      return {
        ...state,
        getDrivers: {
          ...state.getDrivers,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_DRIVERS_FAIL:
      return {
        ...state,
        getDrivers: {
          ...state.getDrivers,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default drivers;
