import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//import { yupResolver } from 'react-hook-form-resolvers';
import * as Yup from "yup";
import { Country, State } from "country-state-city";
import { GlobalContext } from "../../context/Provider";
import { LOAD_TYPE, LOAD_CAPACITY, LOAD_UNIT } from "../../constants/enum";
import {
  createVehicle,
  listVehiclesByVehicleId,
  editVehicle,
} from "../../context/actions/vehicle/vehicle.action";

function AddVehicle({ history, match }) {
  const { vehicleId } = match.params;
  const { carrierId } = match.params;
  const { carrierType } = match.params;
  const isAddMode = !vehicleId;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // const onSubmit = (data) => console.log(data);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const {
    vehicleDispatch,
    vehicleState: {
      createVehicle: { loading },
    },
  } = useContext(GlobalContext);

  function SubmitForm(formdata) {
    return isAddMode
      ? CreateVehicle(formdata)
      : EditVehicle(formdata, vehicleId);
  }

  function CreateVehicle(formdata) {
    console.log(`formdata`, formdata);
    createVehicle(formdata)(vehicleDispatch)((res) => {
      enqueueSnackbar(res.message, {
        variant: "success",
      });
    })((err) => {
      enqueueSnackbar(err, { variant: "error" });
    });
  }

  function EditVehicle(data, id) {
    editVehicle(data, id)(vehicleDispatch)((res) => {
      enqueueSnackbar(res.message, {
        variant: "success",
      });
    })((err) => {
      enqueueSnackbar(err, { variant: "error" });
    });
  }

  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields

      listVehiclesByVehicleId(vehicleId)(vehicleDispatch)((res) => {
        const fields = [
          "VehicleType",
          "VehicleNumber",
          "SerialNumber",
          "VehicleMake",
          "Description",
          "VehicleColor",
          "VehicleModel",
          "SerialNumber",
          "LicensePlate",
          "VehicleModelYear",
          "PurchaseYear",
        ];
        fields.forEach((field) => setValue(field, res[field]));
      });
    }
  }, []);

  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header alert alert-info">
              <h2 class="alert alert-info">Vehicle Information</h2>
            </div>
            <div class="card-body">
              <div class="col-md-12 ">
                <form onSubmit={handleSubmit(SubmitForm)}>
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
                  />
                  <input
                    type="hidden"
                    name="CarrierId"
                    value={carrierId}
                    class="form-control"
                    {...register("CarrierId")}
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
                        {...register("VehicleType", {
                          required: true,
                        })}
                      >
                        <option selected>Select Vehicle Type</option>
                        {LOAD_TYPE.map((item) => (
                          <option
                            key={item.value}
                            selected={carrierType === item.value}
                            value={item.value}
                          >
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
                        placeholder="Vehicle Number"
                        {...register("VehicleNumber", {
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
                        {...register("SerialNumber", {
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
                        {...register("VehicleMake", {
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
                        placeholder="Description"
                        {...register("Description", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info"> Vehicle Information </h5>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Vehicle Color</label>

                    <div class="col-md-4">
                      <input
                        name="VehicleColor"
                        class="form-control"
                        placeholder="Vehicle Color"
                        {...register("VehicleColor", {
                          required: true,
                        })}
                        required
                      />
                    </div>
                    <label class="col-form-label col-md-2">Vehicle Model</label>
                    <div class="col-md-4">
                      <input
                        name="VehicleModel"
                        class="form-control"
                        placeholder="Vehicle Model"
                        {...register("VehicleModel", {
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
                        placeholder="License Plate"
                        {...register("LicensePlate", {
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
                        placeholder="Vehicle Model Year"
                        class="form-control"
                        {...register("VehicleModelYear", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Purchase Year</label>

                    <div class="col-md-4">
                      <input
                        name="PurchaseYear"
                        placeholder="Purchase Year"
                        class="form-control"
                        placeholder=" Enter Purchase year"
                        {...register("PurchaseYear")}
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info"></h5>
                    </div>
                  </div>
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

export default AddVehicle;
