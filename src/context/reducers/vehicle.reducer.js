import {
  CREATE_VEHICLE_FAIL,
  CREATE_VEHICLE_REQUEST,
  CREATE_VEHICLE_SUCCESS,
  DELETE_VEHICLE_REQUEST,
  DELETE_VEHICLE_SUCCESS,
  GET_VEHICLES_FAIL,
  GET_VEHICLES_REQUEST,
  GET_VEHICLES_SUCCESS,
  EDIT_VEHICLE_REQUEST,
  EDIT_VEHICLE_SUCCESS,
  EDIT_VEHICLE_FAIL,
} from "../../constants/actionTypes";

const vehicles = (state, { type, payload }) => {
  switch (type) {
    case EDIT_VEHICLE_REQUEST: {
      return {
        ...state,
        createVehicle: {
          ...state.createVehicle,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_VEHICLE_SUCCESS: {
      return {
        ...state,
        createVehicle: {
          ...state.createVehicle,
          loading: false,
          error: null,
        },

        getVehicles: {
          ...state.getVehicles,
          loading: false,
          data: state.getVehicles.data.map((item) => {
            if (item.VehicleId === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };
    }

    case EDIT_VEHICLE_FAIL: {
      return {
        ...state,
        createVehicle: {
          ...state.createVehicle,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_VEHICLE_REQUEST: {
      return {
        ...state,
        deleteVehicle: {
          ...state.deleteVehicle,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_VEHICLE_SUCCESS: {
      return {
        ...state,
        deleteVehicle: {
          ...state.deleteVehicle,
          loading: false,
          error: null,
        },

        getVehicles: {
          ...state.getVehicles,
          loading: false,
          data: state.getVehicles.data.filter(
            (item) => item.VehicleId !== payload
          ),
          error: null,
        },
      };
    }

    case CREATE_VEHICLE_FAIL:
      return {
        ...state,
        createVehicle: {
          ...state.createVehicle,
          loading: false,
          error: null,
        },
      };
    case CREATE_VEHICLE_REQUEST:
      return {
        ...state,
        createVehicle: {
          ...state.createVehicle,
          loading: true,
          error: null,
        },
      };
    case CREATE_VEHICLE_SUCCESS:
      return {
        ...state,
        createVehicle: {
          ...state.createVehicle,
          loading: false,
          error: null,
          data: payload,
        },

        getVehicles: {
          ...state.getVehicles,
          loading: false,
          data: [payload, ...state.getVehicles.data],
          error: null,
        },
      };

    case CREATE_VEHICLE_FAIL:
      return {
        ...state,
        createVehicle: {
          ...state.createVehicle,
          loading: false,
          error: payload,
        },
      };

    case GET_VEHICLES_REQUEST:
      return {
        ...state,
        getVehicles: {
          ...state.getVehicles,
          loading: true,
          error: null,
        },
      };

    case GET_VEHICLES_SUCCESS:
      return {
        ...state,
        getVehicles: {
          ...state.getVehicles,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_VEHICLES_FAIL:
      return {
        ...state,
        getVehicles: {
          ...state.getVehicles,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default vehicles;
