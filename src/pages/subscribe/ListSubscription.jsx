import React, { useCallback, useContext, useEffect } from "react";
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
import { listUserSubscriptions } from "../../context/actions/user/user.action";
import { GlobalContext } from "../../context/Provider";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Form from "react-bootstrap/Form";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "../../datasource/dataColumns/subscribe";
import { listSubscriptions } from "../../context/actions/subscribe/subscribe.action";
import LoadingBox from "../../components/notification/loadingbox";
function ListSubscription() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data2, setData] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const {
    subscribeDispatch,
    subscribeState: {
      Subscribes: { data, error }, //loading
    },
  } = useContext(GlobalContext);

  // Calling the function on component mount

  // const getSubscription = useCallback(() => {
  //   listSubscriptions()(subscribeDispatch);
  // }, []);

  // useEffect(() => {

  //   listSubscriptions()(subscribeDispatch);
  //   //((result) => {
  //   //   setData(result.data);
  //   // })((err) => {
  //   //   enqueueSnackbar(err, { variant: "error" });
  //   // });
  //   setUser(JSON.parse(localStorage.getItem("user")));
  // }, [subscribeDispatch,listSubscriptions,loading,data,error]);

  // Calling the function on component mount
  useEffect(() => {
    fetchDataAll("subscription/findAll")((subscribe) => {
      setLoading(false);
      setData(subscribe);
    })((err) => {});
    console.log(`data`, data);
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  // const tableData = {
  //   columns,
  //   data.data,
  // };

  return (
    <div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header alert alert-info">
            <h3>List of Subscription</h3>
            <hr />
            <ul>
              <li>Edit and delete Subscription</li>
              <li>Get an overview of all Subscription</li>
            </ul>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
              {/* <DataTableExtensions {...tableData}> */}
              <DataTableExtensions exportHeaders columns={columns} data={data2}>
                <DataTable
                  columns={columns}
                  data={data2}
                  className="table table-striped table-bordered table-hover table-checkable"
                  defaultSortField={1}
                  sortIcon={<ChevronsDown />}
                  defaultSortAsc={true}
                  pagination
                  highlightOnHover
                />
              </DataTableExtensions>
            </div>
          </div>
        </div>
      </div>
      {loading && <LoadingBox />}
    </div>
  );
}

export default ListSubscription;
