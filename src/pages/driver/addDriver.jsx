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
import { createShipment } from "../../context/actions/shipment/shipment.action";
import ImageUpload from "../../components/upload/uploadImage";

function AddDriver() {
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
    register: shipmentform,
    formState: { errors },
    handleSubmit: handleShipment,
  } = useForm();

  const {
    shipmentDispatch,
    shipmentState: { error, loading, data },
  } = useContext(GlobalContext);
  const SubmitForm = () => {
    //  e.preventDefault();

    createShipment(shipmentform)(shipmentDispatch)({
      //  enqueueSnackbar('', { variant: "info" });
    });

    // if (password !== confirmPassword) {
    //   alert('Password and confirm password are not match');
    // } else {
    //   shipmentDispatch(createShipment(shipmentform));
    // }
  };

  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h2 class="alert alert-tertiary">
                Driver Information Collection Form
              </h2>
            </div>
            <div class="card-body">
              <div class="col-md-12 ">
                <form onSubmit={handleShipment(SubmitForm)}>
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
                    <div class="col-md-12 ">
                      <ImageUpload />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-tertiary"> </h5>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Company Name</label>

                    <div class="col-sm-4">
                      <input
                        name="CompanyName"
                        class="form-control"
                        placeholder="Company Name"
                        {...shipmentform("CompanyName", {
                          required: true,
                        })}
                      />
                    </div>
                    <label class="col-sm-2 col-form-label">Driver Name</label>

                    <div class="col-sm-4">
                      <input
                        name="DriverName"
                        class="form-control"
                        placeholder="Driver Name"
                        {...shipmentform("DriverName", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-4">
                      <input
                        name="Email"
                        class="form-control"
                        placeholder="Email"
                        {...shipmentform("Email", {
                          required: true,
                        })}
                        required
                      />
                    </div>

                    <label class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-4">
                      <input
                        name="Phone"
                        class="form-control"
                        placeholder="Phone"
                        {...shipmentform("Phone", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">DOB</label>
                    <div class="col-sm-4">
                      <input
                        name="DOB"
                        class="form-control"
                        placeholder="Date of Birth"
                        {...shipmentform("DOB", {
                          required: true,
                        })}
                      />
                    </div>

                    <label class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-4">
                      <input
                        name="Phone"
                        class="form-control"
                        placeholder="Phone"
                        {...shipmentform("Phone", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Country</label>
                    <div class="col-md-4">
                      <select
                        name="Country"
                        class="form-control"
                        {...shipmentform("Country")}
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
                    <div class="col-md-4">
                      <select
                        name="Region"
                        class="form-control"
                        id="Region"
                        {...shipmentform("Region", {
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
                    <label class="col-form-label col-md-2">Address</label>
                    <div class="col-md-10">
                      <input
                        name="Address"
                        class="form-control"
                        placeholder="Address"
                        {...shipmentform("Address", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-sm-2"> Drivers License?</div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          name="DriverLicense"
                          type="checkbox"
                          id="gridCheck1"
                          {...shipmentform("DriverLicense", {
                            required: true,
                          })}
                          required
                        />
                      </div>
                    </div>
                    <label class="col-form-label col-md-2">
                      Attach Drivers License
                    </label>
                    <div class="col-md-4">
                      <input
                        type="file"
                        name="LicenseUrl"
                        class="form-control"
                        {...shipmentform("LicenseUrl", {
                          required: true,
                        })}
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

export default AddDriver;
