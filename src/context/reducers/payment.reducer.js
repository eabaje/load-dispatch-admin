import {
  CREATE_PAYMENT_FAIL,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  DELETE_PAYMENT_REQUEST,
  DELETE_PAYMENT_SUCCESS,
  GET_PAYMENTS_FAIL,
  GET_PAYMENTS_REQUEST,
  GET_PAYMENTS_SUCCESS,
  EDIT_PAYMENT_REQUEST,
  EDIT_PAYMENT_SUCCESS,
  EDIT_PAYMENT_FAIL,
} from "../../constants/actionTypes";

const payments = (state, { type, payload }) => {
  switch (type) {
    case EDIT_PAYMENT_REQUEST: {
      return {
        ...state,
        createPayment: {
          ...state.createPayment,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_PAYMENT_SUCCESS: {
      return {
        ...state,
        createPayment: {
          ...state.createPayment,
          loading: false,
          error: null,
        },

        getPayments: {
          ...state.getPayments,
          loading: false,
          data: state.getPayments.data.map((item) => {
            if (item.PaymentId === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };
    }

    case EDIT_PAYMENT_FAIL: {
      return {
        ...state,
        createPayment: {
          ...state.createPayment,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_PAYMENT_REQUEST: {
      return {
        ...state,
        deletePayment: {
          ...state.deletePayment,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_PAYMENT_SUCCESS: {
      return {
        ...state,
        deletePayment: {
          ...state.deletePayment,
          loading: false,
          error: null,
        },

        getPayments: {
          ...state.getPayments,
          loading: false,
          data: state.getPayments.data.filter(
            (item) => item.PaymentId !== payload
          ),
          error: null,
        },
      };
    }

    case CREATE_PAYMENT_FAIL:
      return {
        ...state,
        createPayment: {
          ...state.createPayment,
          loading: false,
          error: null,
        },
      };
    case CREATE_PAYMENT_REQUEST:
      return {
        ...state,
        createPayment: {
          ...state.createPayment,
          loading: true,
          error: null,
        },
      };
    case CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        createPayment: {
          ...state.createPayment,
          loading: false,
          error: null,
          data: payload,
        },

        getPayments: {
          ...state.getPayments,
          loading: false,
          data: [payload, ...state.getPayments.data],
          error: null,
        },
      };

    case CREATE_PAYMENT_FAIL:
      return {
        ...state,
        createPayment: {
          ...state.createPayment,
          loading: false,
          error: payload,
        },
      };

    case GET_PAYMENTS_REQUEST:
      return {
        ...state,
        getPayments: {
          ...state.getPayments,
          loading: true,
          error: null,
        },
      };

    case GET_PAYMENTS_SUCCESS:
      return {
        ...state,
        getPayments: {
          ...state.getPayments,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_PAYMENTS_FAIL:
      return {
        ...state,
        getPayments: {
          ...state.getPayments,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default payments;
