import React, { useState, useEffect, useContext } from "react";

import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { Controller, useForm, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//import { yupResolver } from 'react-hook-form-resolvers';
import * as Yup from "yup";

import { GlobalContext } from "../../context/Provider";
import { LOAD_TYPE, LOAD_CAPACITY, LOAD_UNIT } from "../../constants/enum";
// import {
//   createSubscription,
//   editSubscription,
//   listSubscriptionsBySubscriptionId,
// } from "../../context/actions/user/user.action";
import { fetchData, fetchDataAll } from "../../helpers/query";
import { Editor } from "draft-js";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import WYSIWYGEditor from "../../components/wysiwyg/wysiwyg";
import {
  subcribeUser,
  updateUserSubscription,
} from "../../context/actions/user/user.action";

function AddUserSubscription({ history, match }) {
  const { userSubscriptionId } = match.params;
  const { userId } = match.params;
  const isAddMode = !userSubscriptionId;
  const { action } = match.params;

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [user, setUser] = useState({});
  const [subscribeUser, setSubscribeUser] = useState({});
  const [data, setData] = useState([]);
  const [subscriptionType, setsubscriptionType] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
    control,
  } = useForm({ mode: "onChange" });

  const {
    userDispatch,
    userState: {
      createUserSubscription: { loading },
    },
  } = useContext(GlobalContext);

  function onSubmit(formdata) {
    return isAddMode
      ? createUserSubscription(formdata)
      : updateUserSubscription(userSubscriptionId, formdata);
  }

  function createUserSubscription(formdata) {
    subcribeUser(formdata)(userDispatch)((res) => {
      if (res.message) {
        enqueueSnackbar(res.message, {
          variant: "success",
        });
      }
    });
  }

  function upgradeUserSubscription(formdata) {
    upgradeUserSubscription(formdata)(userDispatch)((res) => {
      if (res.message) {
        enqueueSnackbar(res.message, {
          variant: "success",
        });
      }
    });
  }

  function updateUserSubscription(id, formdata) {
    updateUserSubscription(formdata, id)(userDispatch)((res) => {
      if (res.message) {
        enqueueSnackbar(res.message, {
          variant: "success",
        });
      }
    });
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));

    if (!isAddMode) {
      // fetchData("subscription/findOne", userSubscriptionId)((subscription) => {

      //   const fields = [
      //     "SubscriptionType",
      //     "SubscriptionName",
      //     "Amount",
      //     "Description",
      //     "Active",
      //     "Duration",
      //   ];
      //   fields.forEach((field) => setValue(field, subscription[field]));
      // });

      fetchDataAll("subscription/findAll")((subscription) => {
        setsubscriptionType(subscription);
      })((error) => {
        enqueueSnackbar(error.message, {
          variant: "error",
        });
      });

      fetchData(
        "user/findUserSubscription",
        userId
      )((userSubscription) => {
        setSubscribeUser(userSubscription);

        const fields = ["SubscribeId", "StartDate", "Active", "EndDate"];
        fields.forEach((field) => setValue(field, userSubscription[field]));
      })((error) => {
        enqueueSnackbar(error.message, {
          variant: "error",
        });
      });
    }
  }, []);
  console.log(`subscribeUser`, subscribeUser);

  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header alert alert-info">
              <h2>Add User Subscription Form</h2>
            </div>
            <div class="card-body">
              <div class="col-md-12 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="hidden"
                    name="UserId"
                    value={user.UserId}
                    class="form-control"
                  />

                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">
                      Subscription Type
                    </label>

                    <div class="col-sm-4">
                      <select
                        id="SubscriptionType"
                        name="SubscriptionType"
                        class="form-control"
                        {...register("SubscriptionType", {
                          required: true,
                        })}
                        required
                      >
                        <option selected>Select Subscription Type</option>

                        {subscriptionType.map((item) => (
                          <option
                            key={item.SubscribeId}
                            selected={
                              subscribeUser.SubscribeId === item.SubscribeId
                            }
                            value={item.SubscribeId}
                          >
                            {item.SubscriptionType}
                          </option>
                        ))}
                      </select>
                    </div>
                    <label class="col-sm-2 col-form-label">Full Name</label>

                    <div class="col-sm-4">
                      <input
                        name="FullName"
                        class="form-control"
                        value={subscribeUser.User?.FullName}
                        placeholder="User Name"
                        {...register("FullName", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Start Date</label>
                    <div class="col-sm-2">
                      <input
                        name="StartDate"
                        type="text"
                        class="form-control"
                        placeholder="Start Date"
                        {...register("StartDate")}
                        required
                      />
                    </div>

                    <label class="col-sm-2 col-form-label">End Date</label>
                    <div class="col-sm-2">
                      <input
                        name="EndDate"
                        type="text"
                        class="form-control"
                        placeholder="End Date"
                        {...register("EndDate")}
                        required
                      />
                    </div>
                    {/* <div class="col-sm-2"> Active?</div> */}
                    <label class="col-sm-2 col-form-label">Active?</label>
                    <div class="col-md-2">
                      <div class="form-check">
                        <input
                          class="form-check-input-custom"
                          name="Active"
                          type="checkbox"
                          id="Active"
                          {...register("Active")}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info"> </h5>
                    </div>
                  </div>
                  <div class="form-group"></div>

                  <div class="form-row">
                    <div class="col-sm-10 ">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="IsValid"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label class="form-check-label" for="invalidCheck">
                          I confirm all information entered are accurate
                        </label>
                        <div class="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div class="right" style={{ float: "right" }}>
                      <button
                        type="submit"
                        class="btn  btn-primary"
                        style={{ float: "right" }}
                      >
                        {loading ? (
                          <i className="fa fa-spinner fa-spin"></i>
                        ) : (
                          <i class="feather mr-2 icon-check-circle"></i>
                        )}{" "}
                        {isAddMode ? "Submit" : "Update"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUserSubscription;
