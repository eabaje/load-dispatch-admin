import {
  CREATE_PROFILE_FAIL,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
  GET_PROFILES_FAIL,
  GET_PROFILES_REQUEST,
  GET_PROFILES_SUCCESS,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
} from "../../constants/actionTypes";

const profiles = (state, { type, payload }) => {
  switch (type) {
    case EDIT_PROFILE_REQUEST: {
      return {
        ...state,
        createProfile: {
          ...state.createProfile,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_PROFILE_SUCCESS: {
      return {
        ...state,
        createProfile: {
          ...state.createProfile,
          loading: false,
          error: null,
        },

        getProfiles: {
          ...state.getProfiles,
          loading: false,
          data: state.getProfiles.data.map((item) => {
            if (item.UserId === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };
    }

    case EDIT_PROFILE_FAIL: {
      return {
        ...state,
        createProfile: {
          ...state.createProfile,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_PROFILE_REQUEST: {
      return {
        ...state,
        deleteProfile: {
          ...state.deleteProfile,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_PROFILE_SUCCESS: {
      return {
        ...state,
        deleteProfile: {
          ...state.deleteProfile,
          loading: false,
          error: null,
        },

        getProfiles: {
          ...state.getProfiles,
          loading: false,
          data: state.getProfiles.data.filter(
            (item) => item.UserId !== payload
          ),
          error: null,
        },
      };
    }

    case CREATE_PROFILE_FAIL:
      return {
        ...state,
        createProfile: {
          ...state.createProfile,
          loading: false,
          error: null,
        },
      };
    case CREATE_PROFILE_REQUEST:
      return {
        ...state,
        createProfile: {
          ...state.createProfile,
          loading: true,
          error: null,
        },
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        createProfile: {
          ...state.createProfile,
          loading: false,
          error: null,
          data: payload,
        },

        getProfiles: {
          ...state.getProfiles,
          loading: false,
          data: [payload, ...state.getProfiles.data],
          error: null,
        },
      };

    case CREATE_PROFILE_FAIL:
      return {
        ...state,
        createProfile: {
          ...state.createProfile,
          loading: false,
          error: payload,
        },
      };

    case GET_PROFILES_REQUEST:
      return {
        ...state,
        getProfiles: {
          ...state.getProfiles,
          loading: true,
          error: null,
        },
      };

    case GET_PROFILES_SUCCESS:
      return {
        ...state,
        getProfiles: {
          ...state.getProfiles,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_PROFILES_FAIL:
      return {
        ...state,
        getProfiles: {
          ...state.getProfiles,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default profiles;
