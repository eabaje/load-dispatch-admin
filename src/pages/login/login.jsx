import React from "react";
import axios from "axios";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/Provider";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//import { yupResolver } from 'react-hook-form-resolvers';
import * as Yup from "yup";
import {
  LOAD_TYPE,
  LOAD_CAPACITY,
  LOAD_UNIT,
  TRIP_STATUS,
  API_URL,
} from "../../constants/enum";
import { signin } from "../../context/actions/auth/auth.action";
import { getError } from "../../utils/error";
function Login() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    authDispatch,
    authState: { error, user, IsLoggedIn },
  } = useContext(GlobalContext);

  const SubmitForm = async (formdata) => {
    //  e.preventDefault();
    //  console.log("state:", formdata);

    // try {
    //   const res = await axios.post(`${API_URL}auth/signin`, formdata);

    //   if (res) {
    //     console.log("state:", res);
    //   }
    // } catch (err) {
    //   enqueueSnackbar(getError(err), { variant: "error" });
    // }

    signin(formdata)(authDispatch);
    // console.log("state:", localStorage.getItem("user"));

    // if (IsLoggedIn) {
    //   history.push("/");
    // } else {
    //   if (error) {
    //     enqueueSnackbar(error, { variant: "error" });
    //   }
    //   enqueueSnackbar(error, { variant: "error" });
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(SubmitForm)}>
        <div class="form-group mb-3">
          <label class="floating-label" for="Email">
            Email address
          </label>
          <input
            type="text"
            class="form-control"
            name="Email"
            {...register("Email", {
              required: true,
            })}
            required
          />
        </div>
        <div class="form-group mb-4">
          <label class="floating-label" for="Password">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="Password"
            {...register("Password")}
            required
          />
        </div>
        <div class="custom-control custom-checkbox text-left mb-4 mt-2">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck1"
          />
          <label class="custom-control-label" for="customCheck1">
            Save credentials.
          </label>
        </div>
        <button class="btn btn-block btn-primary mb-4">Signin</button>
        <p class="mb-2 text-muted">
          Forgot password?{" "}
          <a href="auth-reset-password.html" class="f-w-400">
            Reset
          </a>
        </p>
        <p class="mb-0 text-muted">
          Don’t have an account?{" "}
          <a href="auth-signup.html" class="f-w-400">
            Signup
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
