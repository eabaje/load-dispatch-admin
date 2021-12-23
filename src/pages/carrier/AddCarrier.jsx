import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
//import { yupResolver } from 'react-hook-form-resolvers';
import * as Yup from "yup";
import axios from "axios";
import { Country, State } from "country-state-city";
import { GlobalContext } from "../../context/Provider";
import { LOAD_TYPE, LOAD_CAPACITY, LOAD_UNIT, API_URL } from "../../constants/enum";
import {
  createCarrier,
  editCarrier,
  listCarrierByCriteria,
  listCarriersById,
} from "../../context/actions/carrier/carrier.action";

function AddCarrier({ history, match }) {
  const { carrierId } = match.params;
  // const { SubscribeId } = match.params;
  const isAddMode = !carrierId;
  console.log(`params`, match.params)
  console.log(`isAddMode`, isAddMode)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [user, setUser] = useState({});

  

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const {
    carrierDispatch,
    carrierState: { error, loading },
  } = useContext(GlobalContext);

  // const getCarrierById = (id) => {
  //   //  e.preventDefault();

  // return  listCarriersById(id)(carrierDispatch);
  // };

  const fetchData = async (carrierId) => {
   
    try {
      const res = await axios.get(`${API_URL}carrier/findOne/${carrierId}`);
      if (res) {
       return res.data.data;
      }
    } catch (err) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  function onSubmit(formdata) {
    return isAddMode ? CreateCarrier(formdata) : updateCarrier(carrierId, formdata);
  }
  
  function CreateCarrier(formdata) {
    console.log(`form`, formdata)
    formdata.CompanyId = user.CompanyId;
    createCarrier(formdata)(carrierDispatch)((res) => {
      if (res.message === "Success") {
        enqueueSnackbar("Created new Carrier successfully", {
          variant: "success",
        });
      }
    });
    
    if(error){

      enqueueSnackbar(error, {
        variant: "error",
      });

    }

  }

  function updateCarrier(id, formdata) {
    editCarrier(formdata)(carrierDispatch)((res) => {
      if (res.message === "Success") {
        enqueueSnackbar("Update record successfully", {
          variant: "success",
        });
      }
    });
  }
 
  console.log(`carrierUser`, user)
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));

    if (!isAddMode) {

    console.log(`object`,  fetchData(carrierId)) ;
     // listCarriersById(carrierId)(carrierDispatch)()
     fetchData(carrierId).then
    }
  }, []);

  // (carrier => {
  //   console.log(`carrier`, carrier)
  //   // const fields = [
  //   //   "CarrierType",
  //   //   "FleetType",
  //   //   "FleetNumber",
  //   //   "Licensed",
  //   //   "AboutUs",
  //   //   "ServiceDescription",
  //   //   "Rating",
  //   //   "CompanyId",
  //   // ];
  //   // fields.forEach((field) => setValue(field, carrier[field]));
  // });

  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header alert alert-info">
              <h2>Carrier Information</h2>
            </div>
            <div class="card-body">
              <div class="col-md-12 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="hidden"
                    name="UserId"
                    value={user.UserId}
                    class="form-control"
                    {...register("UserId")}
                  />
                  <input
                    type="hidden"
                    name="CompanyId"
                    value={user.CompanyId}
                    class="form-control"
                    {...register("CompanyId")}
                  />

                  <div class="form-group row">
                    <div class="col-md-12">
                      <h5 class="alert alert-info"> Basic Info </h5>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">
                      Carrier category
                    </label>
                    <div class="col-md-4">
                      <select
                        id="CarrierType"
                        class="form-control"
                        {...register("CarrierType", {
                          required: true,
                        })}
                      >
                        <option selected>Select Carrier Categories</option>
                        {LOAD_TYPE.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.text}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label class="col-sm-2 col-form-label">Fleet Type </label>
                    <div class="col-md-4">
                      <select
                        id="FleetType"
                        class="form-control"
                        {...register("FleetType", {
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
                    <label class="col-sm-2 col-form-label">Fleet Number</label>

                    <div class="col-sm-4">
                      <input
                        name="FleetNumber"
                        class="form-control"
                        placeholder="Fleet Number"
                        {...register("FleetNumber", {
                          required: true,
                        })}
                      />
                    </div>
                    <label class="col-sm-2 col-form-label">Licensed?</label>
                    <div class="col-sm-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          name="Licensed"
                          class="form-check-input-custom-2"
                          {...register("Licensed", {
                            required: true,
                          })}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">About Us</label>
                    <div class="col-md-10">
                      <input
                        name="AboutUs"
                        class="form-control"
                        placeholder="About Us"
                        {...register("AboutUs", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-2">
                      Service Description
                    </label>
                    <div class="col-md-10">
                      <input
                        name="ServiceDescription"
                        class="form-control"
                        placeholder="Service Description"
                        {...register("ServiceDescription", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12"></div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <h6 class="alert alert-info">
                        After posting the basic information about your
                        service.kindly go to <b>List Carrier info</b> and add
                        your fleet.
                      </h6>
                    </div>
                  </div>

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

export default AddCarrier;
