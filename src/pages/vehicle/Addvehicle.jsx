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

function AddVehicle() {
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
              <h2 class="alert alert-info">Shipment Information</h2>
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
                    <div class="col-md-12">
                      <h5 class="alert alert-info"> Vehicle Info </h5>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Vehicle Type</label>
                    <div class="col-md-4">
                      <select
                        id="VehicleType"
                        class="form-control"
                        {...shipmentform("VehicleType", {
                          required: true,
                        })}
                      >
                        <option selected>Select Vehicle Type</option>
                        {LOAD_TYPE.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.text}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label class="col-sm-2 col-form-label">
                      Vehicle License Number(VIN)
                    </label>
                    <div class="col-sm-4">
                      <input
                        name="VehicleNumber"
                        class="form-control"
                        placeholder="VehicleNumber"
                        {...shipmentform("VehicleNumber", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Serial Number</label>

                    <div class="col-sm-4">
                      <input
                        name="SerialNumber"
                        class="form-control"
                        placeholder="Serial Number"
                        {...shipmentform("SerialNumber", {
                          required: true,
                        })}
                      />
                    </div>
                    <label class="col-sm-2 col-form-label">Vehicle Make</label>
                    <div class="col-sm-4">
                      <input
                        name="VehicleMake"
                        class="form-control"
                        placeholder="Vehicle Make"
                        {...shipmentform("VehicleMake", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Description</label>
                    <div class="col-md-10">
                      <input
                        name="Description"
                        class="form-control"
                        {...shipmentform("Description", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info"> Pick Up Information </h5>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Vehicle Color</label>

                    <div class="col-md-4">
                      <input
                        name="VehicleColor"
                        class="form-control"
                        {...shipmentform("VehicleColor", {
                          required: true,
                        })}
                      />
                    </div>
                    <label class="col-form-label col-md-2">Vehicle Model</label>
                    <div class="col-md-4">
                      <input
                        name="VehicleModel"
                        class="form-control"
                        {...shipmentform("VehicleModel", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">
                      Vehicle License Plate
                    </label>

                    <div class="col-md-4">
                      <input
                        name="LicensePlate"
                        class="form-control"
                        {...shipmentform("LicensePlate", {
                          required: true,
                        })}
                      />
                    </div>

                    <label class="col-form-label col-md-2">
                      Vehicle Model Year
                    </label>

                    <div class="col-md-4">
                      <input
                        name="VehicleModelYear"
                        class="form-control"
                        {...shipmentform("VehicleModelYear", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info">
                        {" "}
                        Request for Proposal Information{" "}
                      </h5>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Purchase Year</label>

                    <div class="col-md-4">
                      <input
                        name="PurchaseYear"
                        class="form-control"
                        placeholder=" State your requirement expectations"
                        {...shipmentform("PurchaseYear")}
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-10">
                      <button type="submit" class="btn  btn-primary">
                        Submit
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

export default AddVehicle;
