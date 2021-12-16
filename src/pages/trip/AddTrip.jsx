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
import { createTrip } from "../../context/actions/trip/trip.action";

function AddTrip() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
    register: tripform,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    tripDispatch,
    tripState: { error, loading, data },
  } = useContext(GlobalContext);
  const SubmitForm = () => {
    //  e.preventDefault();

    createTrip(tripform)(tripDispatch)({
      //  enqueueSnackbar('', { variant: "info" });
    });

    // if (password !== confirmPassword) {
    //   alert('Password and confirm password are not match');
    // } else {
    //   shipmentDispatch(createShipment(tripform));
    // }
  };
  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h2 class="alert alert-info"> Trip Entry Information</h2>
            </div>
            <div class="card-body">
              <div class="col-md-12 ">
                <form onSubmit={handleSubmit(SubmitForm)}>
                  <input type="hidden" value="UserId" class="form-control" />
                  <input type="hidden" value="DriverId" class="form-control" />
                  <input type="hidden" value="CompanyId" class="form-control" />
                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info"> Trip Basic Info </h5>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Driver Name</label>
                    <div class="col-md-10">
                      <input name="DriverName" class="form-control" readOnly />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">
                      Shipment Reference Id
                    </label>

                    <div class="col-sm-4">
                      <input
                        name="ShipmentId"
                        class="form-control"
                        placeholder="Shipment Reference Number"
                        {...tripform("ShipmentId", {
                          required: true,
                        })}
                        required
                      />
                    </div>

                    <label class="col-sm-2 col-form-label">Vehicle Id</label>

                    <div class="col-sm-4">
                      <input
                        name="VehicleId"
                        class="form-control"
                        placeholder="Vehicle Id"
                        {...tripform("VehicleId", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Driver Note</label>
                    <div class="col-md-10">
                      <input
                        name="DriverNote"
                        class="form-control"
                        {...tripform("DriverNote", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info"> Pick Up Information </h5>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-2">PickUp Date</label>

                    <div class="col-md-2">
                      <div class="input-group date">
                        <div class="input-group-addon">
                          <i class="fa fa-calendar"></i>
                        </div>
                        <input
                          name="ExpectedPickUpDate"
                          class="form-control datepicker"
                          {...tripform("ExpectedPickUpDate", {
                            required: true,
                          })}
                          required
                        />
                      </div>
                    </div>

                    <label class="col-form-label col-md-2">Country</label>
                    <div class="col-md-2">
                      <select
                        name="PickUpCountry"
                        class="form-control"
                        {...tripform("PickUpCountry")}
                        onChange={selectPickUpCountry}
                      >
                        <option value="">Select Country</option>
                        {countries.map((item) => (
                          <option key={item.isoCode} value={item.isoCode}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label class="col-form-label col-md-2">Region/State</label>
                    <div class="col-md-2">
                      <select
                        name="PickUpRegion"
                        class="form-control"
                        id="PickUpRegion"
                        {...tripform("PickUpRegion", {
                          required: true,
                        })}
                      >
                        <option value=""> Select Region/State </option>
                        {pickUpRegion.map((item) => (
                          <option value={item.isoCode}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-2">
                      PickUp Address
                    </label>

                    <div class="col-md-10">
                      <input
                        name="PickUpLocation"
                        class="form-control"
                        {...tripform("PickUpLocation", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info"> Delivery Information </h5>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Delivery Date</label>
                    <div class="col-md-2">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          name="ExpectedDeliveryDate"
                          class="form-control datepicker"
                          {...tripform("ExpectedDeliveryDate", {
                            required: true,
                          })}
                          required
                        />
                        <div class="input-group-append">
                          <span class="input-group-text">
                            <i class="fa fa-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <label class="col-form-label col-md-2">Country</label>

                    <div class="col-md-2">
                      <select
                        name="DeliveryCountry"
                        class="form-control"
                        {...tripform("DeliveryCountry")}
                        onChange={selectDeliveryCountry}
                      >
                        <option value="">Select Country</option>
                        {countries.map((item) => (
                          <option key={item.isoCode} value={item.isoCode}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <label class="col-form-label col-md-2">Region/State</label>
                    <div class="col-md-2">
                      <select
                        name="DeliveryRegion"
                        class="form-control"
                        id="DeliveryRegion"
                        {...tripform("DeliveryRegion", {
                          required: true,
                        })}
                      >
                        <option value=""> Select Region/State </option>
                        {deliveryRegion.map((item) => (
                          <option value={item.isoCode}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">
                      Location/Address
                    </label>

                    <div class="col-md-10">
                      <input
                        name="DeliveryLocation"
                        class="form-control"
                        {...tripform("DeliveryLocation", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Trip Duration</label>

                    <div class="col-md-4">
                      <input
                        type="number"
                        name="Duration"
                        class="form-control"
                        {...tripform("Duration", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info"> Driver Note </h5>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">
                      Driver Note(s)
                    </label>

                    <div class="col-md-10">
                      <input
                        name="DriverNote"
                        class="form-control"
                        placeholder=" Driver Note"
                        {...tripform("DriverNote")}
                      />
                    </div>
                  </div>

                  <div class="form-group"></div>

                  <div class="form-row">
                    <div class="col-sm-10 ">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label class="form-check-label" for="invalidCheck">
                          Agree to terms and conditions
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

export default AddTrip;
