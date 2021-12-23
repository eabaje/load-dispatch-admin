import React, { useState, useEffect, useContext } from "react";

import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//import { yupResolver } from 'react-hook-form-resolvers';
import * as Yup from "yup";
import { Country, State } from "country-state-city";
import { GlobalContext } from "../../context/Provider";
import {
  LOAD_TYPE,
  LOAD_CAPACITY,
  LOAD_UNIT,
  TRIP_STATUS,
} from "../../constants/enum";
import { createShipment } from "../../context/actions/shipment/shipment.action";
import $ from "jquery";
import "bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function AddShipment() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [pickUpRegion, setPickUpRegion] = useState([]);
  const [deliveryRegion, setdeliveryRegion] = useState([]);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [user, setUser] = useState({});

  // const onSubmit = (data) => console.log(data);

  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
    setUser(JSON.parse(localStorage.getItem("user")));
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
    setValue,
    control,
  } = useForm();

  const {
    shipmentDispatch,
    shipmentState: { error, loading, data },
  } = useContext(GlobalContext);

  // const {
  //   authState: { error: error2, loading: loading2, user, isLoggedIn },
  // } = useContext(GlobalContext);

  // console.log(`isLoggedIn`, isLoggedIn);

  // useEffect(() => {
  //   shipmentform({ name: "PickUpDate" }, { required: true });
  //   shipmentform({ name: "DeliveryDate" }, { required: true });
  // }, [shipmentform]);

  const SubmitForm = (formdata) => {
    //  e.preventDefault();
    //  console.log("state:", formdata);
    createShipment(formdata)(shipmentDispatch);
    console.log("state:", data);
    if (data.status === 200) {
      enqueueSnackbar("Added New Shipment to database", {
        variant: "success",
      });
    } else {
      if (error) {
        enqueueSnackbar(error, { variant: "error" });
      }
      enqueueSnackbar("An Error occurred", { variant: "error" });
    }
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    return (
      <div class="input-group mb-3">
        <input
          ref={ref}
          type="text"
          class="form-control datepicker"
          value={value}
          onClick={onClick}
          placeholder="Click to enter date"
          required
        />
        <div class="input-group-append">
          <span class="input-group-text">
            <i class="fa fa-calendar"></i>
          </span>
        </div>
      </div>
    );
  });

  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header alert-info">
              <h2>Shipment Information</h2>
            </div>
            <div class="card-body">
              <div class="col-md-12 ">
                <form onSubmit={handleShipment(SubmitForm)}>
                  <input
                    type="hidden"
                    name="UserId"
                    value={user.UserId}
                    class="form-control"
                    {...shipmentform("UserId")}
                  />
                  <input
                    type="hidden"
                    name="CompanyId"
                    value={user.CompanyId}
                    class="form-control"
                    {...shipmentform("CompanyId")}
                  />

                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info">
                        {" "}
                        Fill in the information in the form accurately{" "}
                      </h5>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Load category</label>
                    <div class="col-md-4">
                      <select
                        id="LoadCategory"
                        class="form-control"
                        {...shipmentform("LoadCategory", {
                          required: true,
                        })}
                        required
                      >
                        <option value="" selected>
                          Select Load Categories
                        </option>
                        {LOAD_TYPE.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.text}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label class="col-sm-2 col-form-label">Load Type</label>
                    <div class="col-md-4">
                      <select
                        id="LoadType"
                        class="form-control"
                        {...shipmentform("LoadType", {
                          required: true,
                        })}
                      >
                        <option selected>Select Load Type</option>

                        {LOAD_CAPACITY.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Load Weight</label>

                    <div class="col-sm-2">
                      <input
                        name="LoadWeight"
                        class="form-control"
                        placeholder="Load Weight"
                        {...shipmentform("LoadWeight", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                    <label class="col-sm-2 col-form-label">Load Unit</label>
                    <div class="col-sm-2">
                      <select
                        id="LoadUnit"
                        name="LoadUnit"
                        class="form-control"
                        {...shipmentform("LoadUnit", {
                          required: true,
                        })}
                        required
                      >
                        <option selected>Select Load Unit</option>

                        {LOAD_UNIT.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.text}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label class="col-sm-1 col-form-label">Quantity</label>

                    <div class="col-sm-3">
                      <input
                        name="Qty"
                        class="form-control"
                        placeholder="Quantity"
                        {...shipmentform("Qty", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Description</label>
                    <div class="col-md-10">
                      <input
                        name="Description"
                        class="form-control"
                        placeholder="Give your detailed description of expected delivery"
                        {...shipmentform("Description", {
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
                    <label class="col-form-label col-md-2">Country</label>
                    <div class="col-md-4">
                      <select
                        name="PickUpCountry"
                        class="form-control"
                        {...shipmentform("PickUpCountry")}
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
                        name="PickUpRegion"
                        class="form-control"
                        id="PickUpRegion"
                        {...shipmentform("PickUpRegion", {
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

                    <div class="col-md-4">
                      <input
                        name="PickUpLocation"
                        class="form-control"
                        placeholder="Pick Up location"
                        {...shipmentform("PickUpLocation", {
                          required: true,
                        })}
                        required
                      />
                    </div>

                    <label class="col-form-label col-md-2">PickUp Date</label>
                    <div class="col-md-4">
                      <Controller
                        name={"ExpectedPickUpDate"}
                        control={control}
                        // defaultValue={new Date()}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <DatePicker
                              wrapperClassName="datePicker"
                              className="form-control datepicker"
                              onChange={onChange}
                              selected={value}
                              placeholderText="Enter date"
                              customInput={<CustomInput />}
                            />
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info"> Delivery Information </h5>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Country</label>

                    <div class="col-md-4">
                      <select
                        name="DeliveryCountry"
                        class="form-control"
                        {...shipmentform("DeliveryCountry")}
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
                    <div class="col-md-4">
                      <select
                        name="DeliveryRegion"
                        class="form-control"
                        id="DeliveryRegion"
                        {...shipmentform("DeliveryRegion", {
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

                    <div class="col-md-4">
                      <input
                        name="DeliveryLocation"
                        class="form-control"
                        placeholder="Delivery location"
                        {...shipmentform("DeliveryLocation", {
                          required: true,
                        })}
                        required
                      />
                    </div>

                    <label class="col-form-label col-md-2">Delivery Date</label>
                    <div class="col-md-4">
                      <Controller
                        name={"ExpectedDeliveryDate"}
                        control={control}
                        // defaultValue={new Date()}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <DatePicker
                              wrapperClassName="datePicker"
                              className="form-control datepicker"
                              onChange={onChange}
                              selected={value}
                              placeholderText="Enter date"
                              customInput={<CustomInput />}
                            />
                          );
                        }}
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Contact Name</label>

                    <div class="col-md-4">
                      <input
                        name="DeliveryContactName"
                        class="form-control"
                        placeholder="Contact Name"
                        {...shipmentform("DeliveryContactName", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                    <label class="col-form-label col-md-2">Contact Phone</label>
                    <div class="col-md-4">
                      <input
                        name="DeliveryContactPhone"
                        placeholder="Contact Phone"
                        class="form-control"
                        {...shipmentform("DeliveryContactPhone", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Email</label>

                    <div class="col-md-4">
                      <input
                        name="DeliveryEmail"
                        class="form-control"
                        placeholder="Email"
                        {...shipmentform("DeliveryEmail", {
                          required: true,
                        })}
                        required
                        email
                      />
                    </div>

                    <label class="col-form-label col-md-2">Shipment Date</label>
                    <div class="col-md-4">
                      <Controller
                        name={"ShipmentupDate"}
                        control={control}
                        // defaultValue={new Date()}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <DatePicker
                              wrapperClassName="datePicker"
                              className="form-control datepicker"
                              onChange={onChange}
                              selected={value}
                              placeholderText="Enter date"
                              customInput={<CustomInput />}
                            />
                          );
                        }}
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
                    <label class="col-form-label col-md-2">
                      Request For Shipment
                    </label>

                    <div class="col-md-4">
                      <input
                        name="RequestForShipment"
                        class="form-control"
                        placeholder=" State your requirement expectations"
                        {...shipmentform("RequestForShipment")}
                      />
                    </div>

                    <label class="col-sm-2 col-form-label">
                      Shipment Status
                    </label>
                    <div class="col-md-2">
                      <select
                        id="ShipmentStatus"
                        name="ShipmentStatus"
                        class="form-control"
                        {...shipmentform("ShipmentStatus", {
                          required: true,
                        })}
                      >
                        <option selected>Select Status</option>

                        {TRIP_STATUS.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.text}
                          </option>
                        ))}
                      </select>
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

export default AddShipment;
