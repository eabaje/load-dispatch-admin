import {
  CREATE_USER_SUBSCRIPTION_FAIL,
  CREATE_USER_SUBSCRIPTION_REQUEST,
  CREATE_USER_SUBSCRIPTION_SUCCESS,
  DELETE_USER_SUBSCRIPTION_REQUEST,
  DELETE_USER_SUBSCRIPTION_SUCCESS,
  GET_USER_SUBSCRIPTIONS_FAIL,
  GET_USER_SUBSCRIPTIONS_REQUEST,
  GET_USER_SUBSCRIPTIONS_SUCCESS,
  EDIT_USER_SUBSCRIPTION_REQUEST,
  EDIT_USER_SUBSCRIPTION_SUCCESS,
  EDIT_USER_SUBSCRIPTION_FAIL,
  UPGRADE_USER_SUBSCRIPTION_REQUEST,
  UPGRADE_USER_SUBSCRIPTION_SUCCESS,
  UPGRADE_USER_SUBSCRIPTION_FAIL,
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  // DELETE_USER_FAIL,
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
} from "../../constants/actionTypes";

const user = (state, { type, payload }) => {
  switch (type) {
    case EDIT_USER_SUBSCRIPTION_REQUEST: {
      return {
        ...state,
        createUserSubscription: {
          ...state.createUserSubscription,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_USER_SUBSCRIPTION_SUCCESS: {
      return {
        ...state,
        createUserSubscription: {
          ...state.createUserSubscription,
          loading: false,
          error: null,
        },

        getUserSubscription: {
          ...state.getUserSubscription,
          loading: false,
          data: state.getUserSubscription.data.map((item) => {
            if (item.SubscriptionId === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };
    }

    case EDIT_USER_SUBSCRIPTION_FAIL: {
      return {
        ...state,
        createUserSubscription: {
          ...state.createUserSubscription,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_USER_SUBSCRIPTION_REQUEST: {
      return {
        ...state,
        deleteUserSubscription: {
          ...state.deleteUserSubscription,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_USER_SUBSCRIPTION_SUCCESS: {
      return {
        ...state,
        deleteUserSubscription: {
          ...state.deleteUserSubscription,
          loading: false,
          error: null,
        },

        getUserSubscription: {
          ...state.getUserSubscription,
          loading: false,
          data: state.getUserSubscription.data.filter(
            (item) => item.SubscriptionId !== payload
          ),
          error: null,
        },
      };
    }

    case CREATE_USER_SUBSCRIPTION_FAIL:
      return {
        ...state,
        createUserSubscription: {
          ...state.createUserSubscription,
          loading: false,
          error: null,
        },
      };
    case CREATE_USER_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        createUserSubscription: {
          ...state.createUserSubscription,
          loading: true,
          error: null,
        },
      };
    case CREATE_USER_SUBSCRIPTION_SUCCESS:
      console.log(`payload`, payload);

      return {
        ...state,
        createUserSubscription: {
          ...state.createUserSubscription,
          loading: false,
          error: null,
          data: payload,
        },

        getUserSubscription: {
          ...state.getUserSubscription,
          loading: false,
          data: [payload, ...state.getUserSubscription.data],
          error: null,
        },
      };

    case GET_USER_SUBSCRIPTIONS_REQUEST:
      return {
        ...state,
        getUserSubscription: {
          ...state.getUserSubscription,
          loading: true,
          error: null,
        },
      };

    case GET_USER_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        getUserSubscription: {
          ...state.getUserSubscription,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_USER_SUBSCRIPTIONS_FAIL:
      return {
        ...state,
        getUserSubscription: {
          ...state.getUserSubscription,
          loading: false,
          error: payload,
        },
      };

    case UPGRADE_USER_SUBSCRIPTION_FAIL:
      return {
        ...state,
        UPGRADEUserSubscription: {
          ...state.upgradeUserSubscription,
          loading: false,
          error: null,
        },
      };
    case UPGRADE_USER_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        upgradeUserSubscription: {
          ...state.upgradeUserSubscription,
          loading: true,
          error: null,
        },
      };
    case UPGRADE_USER_SUBSCRIPTION_SUCCESS:
      // console.log(`payload`, payload)

      return {
        ...state,
        upgradeUserSubscription: {
          ...state.upgradeUserSubscription,
          loading: false,
          error: null,
          data: payload,
        },

        getUserSubscription: {
          ...state.getUserSubscription,
          loading: false,
          data: [payload, ...state.getUserSubscription.data],
          error: null,
        },
      };

    case EDIT_USER_REQUEST:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: true,
          error: null,
        },
      };

    case EDIT_USER_SUCCESS:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: false,
          error: null,
        },

        getUser: {
          ...state.getUser,
          loading: false,
          data: state.getUser.data.map((item) => {
            if (item.Id === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };

    case EDIT_USER_FAIL:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: false,
          error: null,
        },
      };

    case DELETE_USER_REQUEST: {
      return {
        ...state,
        delete: {
          ...state.delete,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        delete: {
          ...state.delete,
          loading: false,
          error: null,
        },

        getUser: {
          ...state.getUser,
          loading: false,
          data: state.getUser.data.filter((item) => item.Id !== payload),
          error: null,
        },
      };
    }

    case CREATE_USER_FAIL:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: false,
          error: null,
        },
      };
    case CREATE_USER_REQUEST:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: true,
          error: null,
        },
      };
    case CREATE_USER_SUCCESS:
      console.log(`payload`, payload);

      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: false,
          error: null,
          data: payload,
        },

        getUser: {
          ...state.getUser,
          loading: false,
          data: [payload, ...state.getUser.data],
          error: null,
        },
      };

    case CREATE_USER_FAIL:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: false,
          error: payload,
        },
      };

    case GET_USERS_REQUEST:
      return {
        ...state,
        getUser: {
          ...state.getUser,
          loading: true,
          error: null,
        },
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        getUser: {
          ...state.getUser,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_USERS_FAIL:
      return {
        ...state,
        getUser: {
          ...state.getUser,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default user;
