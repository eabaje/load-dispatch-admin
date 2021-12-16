import React, { useState, useEffect, useContext } from "react";

import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//import { yupResolver } from 'react-hook-form-resolvers';
import * as Yup from "yup";
import { Country, State } from "country-state-city";
import { GlobalContext } from "../../context/Provider";
import { LOAD_TYPE, LOAD_CAPACITY, LOAD_UNIT } from "../../constants/enum";
import { createSubscription } from "../../context/actions/subscribe/subscribe.action";
import ImageUpload from "../../components/upload/uploadImage";

function AddSubscription() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [IsEdit, setEdit] = useState(false);
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [pickUpRegion, setPickUpRegion] = useState([]);
  const [deliveryRegion, setdeliveryRegion] = useState([]);

  // const onSubmit = (data) => console.log(data);

  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
  }, []);

  const selectPickUpCountry = async (e) => {
    setCountry((country) => e.target.value);

    setPickUpRegion(
      (pickUpRegion) =>
        // (region = JSON.stringify(State.getStatesOfCountry(e.target.value)))
        (pickUpRegion = State.getStatesOfCountry(e.target.value))
    );
  };

  const selectDeliveryCountry = async (e) => {
    setCountry((country) => e.target.value);

    setdeliveryRegion(
      (deliveryRegion) =>
        // (region = JSON.stringify(State.getStatesOfCountry(e.target.value)))
        (deliveryRegion = State.getStatesOfCountry(e.target.value))
    );
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    subscribeDispatch,
    subscribeState: { error, loading, data },
  } = useContext(GlobalContext);
  const SubmitForm = (data) => {
    //  e.preventDefault();
    console.log("state:", data);
    createSubscription(data)(subscribeDispatch);

    if (data.message === "success") {
      enqueueSnackbar("Created Subscrition Type successfully", {
        variant: "success",
      });
    } else {
      if (error) {
        enqueueSnackbar(error, { variant: "error" });
      }
      enqueueSnackbar("An Error occurred", { variant: "error" });
    }
  };

  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h2 class="alert alert-tertiary">Subscription Form</h2>
            </div>
            <div class="card-body">
              <div class="col-md-12 ">
                <form onSubmit={handleSubmit(SubmitForm)}>
                  <input
                    type="hidden"
                    name="UserId"
                    value="UserId"
                    class="form-control"
                  />
                  <input
                    type="hidden"
                    name="CompanyId"
                    value="CompanyId"
                    class="form-control"
                  />
                  <input
                    type="hidden"
                    name="CarrierId"
                    value="CarrierType"
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
                      <h5 class="alert alert-tertiary"> </h5>
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
                          All data filled to the best of my ability
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
