import { LOGOUT_USER } from "../../../constants/actionTypes";

export default () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch({
    type: LOGOUT_USER,
  });
};
