import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";
import $ from "jquery";
import { ChevronsDown, Edit, Trash, Users } from "react-feather";
import { fetchDataAll } from "../../helpers/query";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Form from "react-bootstrap/Form";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "../../datasource/dataColumns/user";
import { GlobalContext } from "../../context/Provider";
import { listUsersByUserId } from "../../context/actions/user/user.action";

function UserProfile({ history, match }) {
  const { userId } = match.params;
  const isSingleMode = !userId;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data2, setData] = useState([]);
  const [user, setUser] = useState({});
  const {
    userDispatch,
    userState: { User: data, loading },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (data.length === 0) {
      listUsersByUserId(userId)(userDispatch)((res) => {})((err) => {
        enqueueSnackbar(err.message, { variant: "error" });
      });
    }
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header alert alert-info">
            <h3>List of User Subscription</h3>
            <hr />
            <ul>
              <li>Edit and delete Subscription</li>
              <li>Get an overview of all Subscription</li>
            </ul>
          </div>
          <div class="card-body table-border-style">
            <div class="container">
              <div class="row">
                <div class="col-md-8">
                  <div class="card user-card">
                    <div class="card-header">
                      <h5>Profile</h5>
                    </div>
                    <div class="card-block">
                      <div class="user-image">
                        <img
                          src={
                            data.data?.PicUrl
                              ? data.data?.PicUrl
                              : "https://bootdey.com/img/Content/avatar/avatar7.png"
                          }
                          class="img-radius"
                          alt="User-Profile-Image"
                        />
                      </div>
                      <h6 class="f-w-600 m-t-25 m-b-10">
                        {data.data?.FullName}
                      </h6>
                      <p class="text-muted">
                        {data.data?.IsActivated && "Active"} | Male | Born{" "}
                        {data.data?.DOB}
                      </p>
                      <hr />
                      <p class="text-muted m-t-15">Activity Level: 87%</p>
                      <ul class="list-unstyled activity-leval">
                        <li class="active"></li>
                        <li class="active"></li>
                        <li class="active"></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <div class="bg-c-blue counter-block m-t-10 p-20">
                        <div class="row">
                          <div class="col-4">
                            <i class="fa fa-comment"></i>
                            <p>1256</p>
                          </div>
                          <div class="col-4">
                            <i class="fa fa-user"></i>
                            <p>8562</p>
                          </div>
                          <div class="col-4">
                            <i class="fa fa-suitcase"></i>
                            <p>189</p>
                          </div>
                        </div>
                      </div>
                      <p class="m-t-15 text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <hr />
                      <div class="row justify-content-center user-social-link">
                        <div class="col-auto">
                          <a href="#!">
                            <i class="fa fa-facebook text-facebook"></i>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="#!">
                            <i class="fa fa-twitter text-twitter"></i>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="#!">
                            <i class="fa fa-dribbble text-dribbble"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
    </div>
  );
}

export default UserProfile;
