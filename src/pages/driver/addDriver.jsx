import React, { useState, useEffect, useContext } from "react";

import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//import { yupResolver } from 'react-hook-form-resolvers';
import * as Yup from "yup";
import { Country, State } from "country-state-city";
import { GlobalContext } from "../../context/Provider";
import { LOAD_TYPE, LOAD_CAPACITY, LOAD_UNIT } from "../../constants/enum";
import {
  createDriver,
  editDriver,
  listDriversByDriverName,
  listDriversById,
} from "../../context/actions/driver/driver.action";
import ImageUpload from "../../components/upload/uploadImage";
import { uploadDocuments, uploadImage } from "../../helpers/uploadImage";
import $ from "jquery";
import "bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddDriver({ history, match }) {
  const { driverId } = match.params;
  const isAddMode = !driverId;

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
    setValue,
    control,
  } = useForm();

  const {
    driverDispatch,
    driverState: {
      createDriver: { error, loading },
    },
  } = useContext(GlobalContext);

  const getDriverById = (id) => {
 
   return listDriversById(id)(driverDispatch);
  };

  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
    setUser(JSON.parse(localStorage.getItem("user")));

    if (!isAddMode) {
      getDriverById(driverId).then((driver) => {
        const fields = [
          "DriverName",
          "Email",
          "Address",
          "City",
          "Country",
          "Phone",
          "PicUrl",
          "Licensed",
          "LicenseUrl",
          "DriverDocs",
        ];
        fields.forEach((field) => setValue(field, driver[field]));
      });
    }
  }, []);


  

  function onSubmit(formdata) {
 // console.log(`formdata`, formdata);
    return isAddMode
      ? CreateDriver(formdata)
      : UpdateDriver(driverId, formdata);
  }

  const CreateDriver = (data) => {
    //  e.preventDefault();
   
    console.log(`form`, data);
    uploadImage(picFile)((url) => {
      data.PicUrl = url;
      
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
    console.log(`form`, data);
    createDriver(data)(driverDispatch)((res) => {
    
      if (res) {
        enqueueSnackbar(
          `Created New Driver-${res.data.DriverName} successfully`,
          {
            variant: "success",
          }
        );
      }
    });

    if (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  const UpdateDriver = (data) => {
    //  e.preventDefault();

    uploadImage(picFile)((url) => {
      data.PicUrl = url;
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

    editDriver(data, picFile, docFile)(driverDispatch)((res) => {
      console.log(`data`, data);
      if (res.message === "Success") {
        enqueueSnackbar(`Updated  Driver-${res.data.DriverName} successfully`, {
          variant: "success",
        });
      }
    });

    if (error) {
      enqueueSnackbar(error, { variant: "error" });
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
            <div class="card-header alert alert-info">
              <h2>Driver Information Collection Form</h2>
            </div>
            <div class="card-body">
              <div class="col-md-12 ">
                <form
                  enctype="multipart/form-data"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    type="hidden"
                    name="UserId"
                    value={user.UserId}
                    class="form-control"
                  />
                  <input
                    type="hidden"
                    name="CompanyId"
                    value={user.CompanyId}
                    class="form-control"
                    {...register("CompanyId")}
                  />
                  <input
                    type="hidden"
                    name="PicUrl"
                    class="form-control"
                    {...register("PicUrl")}
                  /> 
                  <input
                  type="hidden"
                  name="LicenseUrl"
                  class="form-control"
                  {...register("LicenseUrl" )}
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
                        value={user.CompanyName}
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
                      <Controller
                        name={"DOB"}
                        control={control}
                        // defaultValue={new Date()}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <DatePicker
                              wrapperClassName="datePicker"
                              className="form-control datepicker"
                              onChange={onChange}
                              selected={value}
                              yearDropdownItemNumber={100}
                              // dateFormat="dd-MM-yyyy"
                              scrollableYearDropdown={true}
                              showYearDropdown
                              showMonthDropdown
                              placeholderText="Enter date"
                              customInput={<CustomInput />}
                            />
                          );
                        }}
                      />
                    </div>

                    <label class="col-sm-2 col-form-label">City</label>
                    <div class="col-sm-4">
                      <input
                        name="Phone"
                        class="form-control"
                        placeholder="City"
                        {...register("City")}
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
                          name="Licensed"
                          type="checkbox"
                          {...register("Licensed", {
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
                        id="fileLicenseUrl"
                        name="fileLicenseUrl"
                        {...register("fileLicenseUrl")}
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

export default AddDriver;
