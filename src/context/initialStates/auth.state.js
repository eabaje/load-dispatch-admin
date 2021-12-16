export default {
  isLoggedIn: false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  error: null,
  loading: false,
};
