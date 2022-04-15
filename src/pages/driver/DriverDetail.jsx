import React, { useContext, useEffect } from "react";
import { useState } from "react";

import { useSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import { API_URL, IMG_URL } from "../../constants";
import { fetchData, fetchDataAll } from "../../helpers/query";
import DriverCard from "../../components/grid/driverCard";
import CustomButton from "../../components/button/customButton";
import UploadImages from "../../components/upload/image-upload";
import { GlobalContext } from "../../context/Provider";
import { AssignShipmentsToDriver } from "../../context/actions/shipment/shipment.action";
function DriverDetail({ history, match }) {
  const { driverId } = match.params;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [profile, setProfile] = useState([]);
  const [user, setUser] = useState({});

  // Calling the function on component mount
  useEffect(() => {
    fetchData(
      "driver/findOne",
      driverId
    )((driver) => {
      setProfile(driver);
    })((err) => {
      enqueueSnackbar(err.message, { variant: "error" });
    });

    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();

  const {
    shipmentDispatch,
    shipmentState: {
      createShipment: { error, loading },
    },
  } = useContext(GlobalContext);

  function onRequestDriverService(formdata) {
    formdata.Email = profile?.Email;
    console.log("fromPasword", formdata);
    AssignShipmentsToDriver(formdata)(shipmentDispatch)((res) => {
      enqueueSnackbar(`Updated  Password successfully`, {
        variant: "success",
      });
    })((error) => {
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    });
  }

  console.log("data", profile);
  return (
    <>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header alert alert-info">
            <h3>Driver </h3>
            <hr />
            <ul>
              <li>View and Edit User Profile</li>
              <li>Change User Password</li>
            </ul>
          </div>
          <div class="card-body table-border-style">
            <div class="container">
              <div class="row">
                {/* <!-- [ accordion-collapse ] start --> */}
                <div class="col-sm-12">
                  <div class="accordion" id="accordionExample">
                    <div class="card mb-0">
                      <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                          <a
                            href="#!"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Profile
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div class="card user-card">
                          <div class="card-block">
                            <div class="user-image">
                              <img
                                src={
                                  profile?.PicUrl
                                    ? IMG_URL + profile?.PicUrl
                                    : "https://bootdey.com/img/Content/avatar/avatar7.png"
                                }
                                class="img-radius"
                                alt="User-Profile-Image"
                              />
                            </div>
                            <h6 class="f-w-600 m-t-25 m-b-10">
                              {profile?.DriverName}
                            </h6>
                            <h6 class="f-w-600 m-t-25 m-b-10">
                              {profile?.Company?.CompanyName}
                            </h6>
                            <h7 class="f-w-600 m-t-25 m-b-10">
                              {profile?.Address}
                            </h7>
                            <p class="text-muted">
                              {profile?.IsActivated && "Active"}
                              {profile?.DOB && "| Born " + profile?.DOB}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-0">
                      <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                          <a
                            href="#!"
                            class="collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Check Vehicle
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <div class="col-md-12 ">
                            <UploadImages title={'Check pictures of vehicle'} refId={driverId} role={user?.roles}/>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingFour">
                        <h5 class="mb-0">
                          <a
                            href="#!"
                            class="collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Any Interest
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseFour"
                        class="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <form onSubmit={handleSubmit(onRequestDriverService)}>
                            <input
                              type="hidden"
                              name="Email"
                              value={profile?.Email}
                              class="form-control"
                              {...register("Email")}
                            />
                            <div class="form-group row">
                              <label class="col-form-label col-md-2">
                                Password
                              </label>
                              <div class="col-md-10">
                                <input
                                  name="Password"
                                  class="form-control"
                                  placeholder="Password"
                                  {...register("Password", {
                                    required: true,
                                  })}
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
                              <div class="col-sm-10 "></div>
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
                                  )}
                                  {"Submit "}
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- [ accordion-collapse ] end --> */}
              </div>
            </div>

            <div class="table-responsive">
              {/* <DataTableExtensions {...tableData}> 
              <DataTableExtensions exportHeaders columns={columns} data={data}>
                <DataTable
                  columns={columns}
                  data={data}
                  className="table table-striped table-bordered table-hover table-checkable"
                  defaultSortField={1}
                  sortIcon={<ChevronsDown />}
                  defaultSortAsc={true}
                  pagination
                  highlightOnHover
                />
              </DataTableExtensions>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverDetail;
