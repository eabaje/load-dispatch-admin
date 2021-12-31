import {
  CREATE_PROFILE_FAIL,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  GET_PROFILES_FAIL,
  GET_PROFILES_REQUEST,
  GET_PROFILES_SUCCESS,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  DELETE_PROFILE_FAIL,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
  GET_USER_SUBSCRIPTION_BY_CRITERIA_REQUEST,
  GET_USER_SUBSCRIPTIONS_SUCCESS,
  GET_USER_SUBSCRIPTIONS_FAIL,
  GET_USER_SUBSCRIPTIONS_REQUEST,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export const listUsers = () => async (dispatch) => {
  dispatch({
    type: GET_PROFILES_REQUEST,
  });
  try {
    const { res } = await axios.get(`/user/findAll/`);
    dispatch({ type: GET_PROFILES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PROFILES_FAIL, payload: error.message });
  }
};

export const listUserByCriteria = (url, params) => async (dispatch) => {
  dispatch({
    type: GET_PROFILES_REQUEST,
  });
  try {
    const { data } = await axios.get(`${url}${params}`);
    dispatch({ type: GET_PROFILES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PROFILES_FAIL, payload: error.message });
  }
};

export const listUsersByUserId = (userId) => async (dispatch) => {
  dispatch({
    type: GET_PROFILES_REQUEST,
  });
  try {
    const { res } = await axios.get(`/user/findOne/${userId}`);
    dispatch({ type: GET_PROFILES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PROFILES_FAIL, payload: error.message });
  }
};

export const listUsersByName = (name) => async (dispatch) => {
  dispatch({
    type: GET_PROFILES_REQUEST,
  });
  try {
    const { res } = await axios.get(`/user/findAllBySearch/${name}`);
    dispatch({ type: GET_PROFILES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PROFILES_FAIL, payload: error.message });
  }
};

export const listUsersByDate = (fromDate, endDate) => async (dispatch) => {
  dispatch({
    type: GET_PROFILES_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/user/findAllProfilesByDate/${fromDate}/${endDate}/}`
    );
    dispatch({ type: GET_PROFILES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PROFILES_FAIL, payload: error.message });
  }
};

export const createUser = (form) => (dispatch) => (onSuccess) => (onError) => {
  const requestPayload = {
    CompanyId: form.CompanyId || "",
    FirstName: form.FirstName || "",
    LastName: form.LastName || "",
    FullName: form.FirstName + " " + form.LastName,
    Email: form.Email || "",
    Phone: form.Phone || "",
    Address: form.Address || "",
    City: form.City || "",
    Country: form.Country || "",
    UserPicUrl: form.UserPicUrl || null,
  };

  dispatch({ type: CREATE_PROFILE_REQUEST });

  axios
    .post(`/user/create/`, form)
    .then((res) => {
      dispatch({
        type: CREATE_PROFILE_SUCCESS,
        payload: res.data,
      });
      onSuccess(res.data);
    })

    .catch((error) => {
      const message =
        error.message && error.response.data.message
          ? error.response.data.message
          : error.response.data.message;
      dispatch({ type: CREATE_PROFILE_FAIL, payload: message });
      onError(message);
    });
};

export const editUser =
  (form, userId) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      UserId: form.UserId || "",
      CompanyId: form.CompanyId || "",
      FirstName: form.FirstName || "",
      LastName: form.LastName || "",
      FullName: form.FirstName + " " + form.LastName,
      Email: form.Email || "",
      Phone: form.Phone || "",
      Address: form.Address || "",
      City: form.City || "",
      Country: form.Country || "",
      UserPicUrl: form.UserPicUrl || null,
    };

    dispatch({ type: EDIT_PROFILE_REQUEST });

    axios
      .put(`/user/update/`, form)

      .then((res) => {
        dispatch({
          type: EDIT_PROFILE_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })

      .catch((error) => {
        const message =
          error.message && error.response.data.message
            ? error.response.data.message
            : error.response.data.message;
        dispatch({ type: CREATE_PROFILE_FAIL, payload: message });
        onError(message);
      });
  };

export const deleteUser = (userId) => async (dispatch) => {
  const requestPayload = {
    ProfileId: userId,
  };

  dispatch({ type: DELETE_PROFILE_REQUEST });

  try {
    const { res } = await axios.delete(`/user/delete/${userId}`);

    dispatch({
      type: DELETE_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.response.data.message
        ? error.response.data.message
        : error.response.data.message;
    dispatch({ type: DELETE_PROFILE_FAIL, payload: message });
  }
};

//Section  User Subscription

export const listUserSubscriptions =
  (criteria) => (dispatch) => (onSuccess) => (onError) => {
    dispatch({
      type: GET_USER_SUBSCRIPTIONS_REQUEST,
    });

    axios
      .get(`/user/findAllUserSubscriptions/${criteria}`)
      .then((res) => {
        dispatch({ type: GET_USER_SUBSCRIPTIONS_SUCCESS, payload: res.data });

        onSuccess(res.data);
        console.log(`res.data`, res.data);
      })
      .catch((error) => {
        const message =
          error.message && error.response.data.message
            ? error.response.data.message
            : error.response.data.message;
        dispatch({ type: GET_USER_SUBSCRIPTIONS_FAIL, payload: message });
        onError(message);
      });
  };

export const listUserSubscriptionByUserId =
  (userId) => (dispatch) => (onSuccess) => (onError) => {
    dispatch({
      type: GET_PROFILES_REQUEST,
    });
    axios
      .get(`/user/findUserSubscription/${userId}`)
      .then((res) => {
        dispatch({ type: GET_USER_SUBSCRIPTIONS_SUCCESS, payload: res.data });

        onSuccess(res.data);
        console.log(`res.data`, res.data);
      })
      .catch((error) => {
        const message =
          error.message && error.response.data.message
            ? error.response.data.message
            : error.response.data.message;
        dispatch({ type: GET_USER_SUBSCRIPTIONS_FAIL, payload: message });
        onError(message);
      });
  };

export const listUserSubscriptionByDate =
  (fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_PROFILES_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/user/findAllUserSubscriptionsByDate/${fromDate}/${endDate}/}`
      );
      dispatch({ type: GET_PROFILES_SUCCESS, payload: res.data });
    } catch (error) {
      const message =
        error.message && error.response.data.message
          ? error.response.data.message
          : error.response.data.message;
      dispatch({ type: GET_PROFILES_FAIL, payload: message });
    }
  };

export const listUserSubscriptionByStartDate =
  (fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_PROFILES_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/user/findAllUserSubscriptionsByStartDate/${fromDate}/${endDate}/}`
      );
      dispatch({ type: GET_PROFILES_SUCCESS, payload: res.data });
    } catch (error) {
      const message =
        error.message && error.response.data.message
          ? error.response.data.message
          : error.response.data.message;
      dispatch({ type: GET_PROFILES_FAIL, payload: message });
    }
  };

export const listUserSubscriptionByEndDate =
  (fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_PROFILES_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/user/findAllUserSubscriptionsByEndDate/${fromDate}/${endDate}/}`
      );
      dispatch({ type: GET_PROFILES_SUCCESS, payload: res.data });
    } catch (error) {
      const message =
        error.message && error.response.data.message
          ? error.response.data.message
          : error.response.data.message;
      dispatch({ type: GET_PROFILES_FAIL, payload: message });
    }
  };

export const subcribeUser =
  (form) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      SubscriptionId: form.SubscriptionId || "",
      SubscriptionName: form.SubscriptionName || "",
      UserId: form.UserId || "",
      Active: form.Active ? true : false,
      StartDate: form.StartDate || "",
      EndDate: form.Phone || "",
    };

    dispatch({ type: CREATE_PROFILE_REQUEST });

    axios
      .post(`/user/subscribe/`, form)
      .then((res) => {
        dispatch({
          type: CREATE_PROFILE_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })

      .catch((error) => {
        const message =
          error.message && error.response.data.message
            ? error.response.data.message
            : error.response.data.message;
        dispatch({ type: CREATE_PROFILE_FAIL, payload: message });
        onError(message);
      });
  };

export const updateUserSubscription =
  (form, UserSubscriptionId) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      UserSubscriptionId: form.UserSubscriptionId || "",
      SubscriptionId: form.SubscriptionId || "",
      SubscriptionName: form.SubscriptionName || "",
      UserId: form.UserId || "",
      Active: form.Active ? true : false,
      StartDate: form.StartDate || "",
      EndDate: form.EndDate || "",
    };

    dispatch({ type: EDIT_PROFILE_REQUEST });

    axios
      .put(`/user/updateUserSubscription/`, form)
      .then((res) => {
        dispatch({
          type: CREATE_PROFILE_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })

      .catch((error) => {
        const message =
          error.message && error.response.data.message
            ? error.response.data.message
            : error.response.data.message;
        dispatch({ type: CREATE_PROFILE_FAIL, payload: message });
        onError(message);
      });
  };

export const upgradeUserSubscription =
  (form) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      UserSubscriptionId: form.UserSubscriptionId || "",
      SubscriptionId: form.SubscriptionId || "",
      SubscriptionName: form.SubscriptionName || "",
      UserId: form.UserId || "",
      Active: form.Active ? true : false,
      StartDate: form.StartDate || "",
      EndDate: form.EndDate || "",
    };

    dispatch({ type: EDIT_PROFILE_REQUEST });

    axios
      .post(`/user/upgradeUserSubscription/`, form)
      .then((res) => {
        dispatch({
          type: CREATE_PROFILE_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })
      .catch((error) => {
        const message =
          error.message && error.response.data.message
            ? error.response.data.message
            : error.response.data.message;
        dispatch({ type: CREATE_PROFILE_FAIL, payload: message });
        onError(message);
      });
  };
