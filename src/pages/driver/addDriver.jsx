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
import { createDriver } from "../../context/actions/driver/driver.action";
import ImageUpload from "../../components/upload/uploadImage";
import { uploadDocuments, uploadImage } from "../../helpers/uploadImage";

function AddDriver() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [IsEdit, setEdit] = useState(false);
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [pickUpRegion, setPickUpRegion] = useState([]);
  const [deliveryRegion, setdeliveryRegion] = useState([]);
  const [picFile, setpicFile] = useState(null);
  const [docFile, setdocFile] = useState(null);
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

  const onChangePicHandler = async (e) => {
    setpicFile((picFile) => e.target.files[0]);
  };
  console.log(`picFile`, picFile);

  const onChangeDocHandler = async (e) => {
    setdocFile((docFile) => e.target.files[0]);
  };

  console.log(`docFile`, docFile);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    driverDispatch,
    driverState: { error, loading },
  } = useContext(GlobalContext);
  const SubmitForm = (data) => {
    //  e.preventDefault();

    uploadImage(picFile)((url) => {
      data.PicUrl = url;
      alert(url);
    })((err) => {
      enqueueSnackbar(`Error:-${err.message} `, {
        variant: "error",
      });
    });

    uploadDocuments(docFile)((url) => {
      data.LicenseUrl = url;
    })((err) => {
      enqueueSnackbar(`Error:-${err.message} `, {
        variant: "error",
      });
    });
    createDriver(data)(driverDispatch)((res) => {
      if (res.message === "Success") {
        enqueueSnackbar(
          `Created New Driver-${res.data.DriverName} successfully`,
          {
            variant: "success",
          }
        );
      }
    });

    if (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  };

  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header alert alert-info">
              <h2>Driver Information Collection Form</h2>
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
                    <div class="col-md-12 ">
                      <ImageUpload onChangePicHandler={onChangePicHandler} />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info"> </h5>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Company Name</label>

                    <div class="col-sm-4">
                      <input
                        name="CompanyName"
                        class="form-control"
                        placeholder="Company Name"
                        {...register("CompanyName", {
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
                        {...register("DriverName", {
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
                        {...register("Email", {
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
                        {...register("Phone", {
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
                        {...register("DOB", {
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
                        {...register("Phone", {
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
                        {...register("Country")}
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
                        {...register("Region", {
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
                        {...register("Address", {
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
                          {...register("DriverLicense", {
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
                        className="form-control"
                        type="file"
                        id="LicenseUrl1"
                        name="LicenseUrl1"
                        {...register("LicenseUrl1")}
                        onChange={(e) => onChangeDocHandler(e)}
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

export default AddDriver;
