import React, { useState, useEffect, useContext } from "react";

import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//import { yupResolver } from 'react-hook-form-resolvers';
import * as Yup from "yup";

import { GlobalContext } from "../../context/Provider";
import { LOAD_TYPE, LOAD_CAPACITY, LOAD_UNIT } from "../../constants/enum";
import {
  createSubscription,
  editSubscription,
  listSubscriptionsBySubscriptionId,
} from "../../context/actions/subscribe/subscribe.action";
import ImageUpload from "../../components/upload/uploadImage";

function AddSubscription({ history, match }) {
  const { id } = match.params;
  // const { SubscribeId } = match.params;
  const isAddMode = !id;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const {
    subscribeDispatch,
    subscribeState: { error, loading },
  } = useContext(GlobalContext);

  const getSubscriptionById = (id) => {
    //  e.preventDefault();

  return  listSubscriptionsBySubscriptionId(id)(subscribeDispatch);
  };

  function onSubmit(formdata) {
    return isAddMode
      ? createSubscription(formdata)
      : updateSubscription(id, formdata);
  }

  function createSubscription(formdata) {
    createSubscription(formdata)(subscribeDispatch)((res) => {
      if (res.message === "Success") {
        enqueueSnackbar("Created Subscrition Type successfully", {
          variant: "success",
        });
      }
    });
  }

  function updateSubscription(id, formdata) {
    editSubscription(formdata)(subscribeDispatch)((res) => {
      if (res.message === "Success") {
        enqueueSnackbar("Created Subscrition Type successfully", {
          variant: "success",
        });
      }
    });
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));

    if (!isAddMode) {
      getSubscriptionById(id).then((subscription) => {
        const fields = [
          "SubscriptionType",
          "SubscriptionName",
          "Amount",
          "Description",
          "Active",
          "Duration",
        ];
        fields.forEach((field) => setValue(field, subscription[field]));
      });
    }
  }, []);

  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header alert alert-info">
              <h2>Subscription Form</h2>
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
                      <input
                        name="SubscriptionType"
                        class="form-control"
                        placeholder="Subscription Type "
                        {...register("SubscriptionType", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                    <label class="col-sm-2 col-form-label">
                      Subscription Name
                    </label>

                    <div class="col-sm-4">
                      <input
                        name="SubscriptionName"
                        class="form-control"
                        placeholder="Subscription Name"
                        {...register("SubscriptionName", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Amount</label>
                    <div class="col-sm-2">
                      <input
                        name="Amount"
                        type="number"
                        class="form-control"
                        placeholder="Amount"
                        {...register("Amount")}
                        required
                      />
                    </div>

                    <label class="col-sm-2 col-form-label">Duration</label>
                    <div class="col-sm-2">
                      <input
                        name="Duration"
                        type="number"
                        class="form-control"
                        placeholder="Duration"
                        {...register("Duration")}
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
                    <label class="col-form-label col-md-2">Description</label>
                    <div class="col-md-10">
                      <input
                        name="Description"
                        class="form-control"
                        placeholder="Description"
                        {...register("Description")}
                      />
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
                        <i class="feather mr-2 icon-check-circle"></i> Submit
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

export default AddSubscription;
