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
import { fetchData, fetchDataAll } from "../../helpers/query";
import {
  listUserSubscriptions,
  listUserSubscriptionByUserId,
} from "../../context/actions/user/user.action";
import { GlobalContext } from "../../context/Provider";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Form from "react-bootstrap/Form";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "../../datasource/dataColumns/usersubscription";
import LoadingBox from "../../components/notification/loadingbox";
// import SortIcon from "@mui/icons-material/ArrowDownward";

function UserSubscription({ history, match }) {
  const { userSubscriptionId } = match.params;
  const { userId } = match.params;
  const isSingleMode = !userSubscriptionId;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [res, setData] = useState([]);
  const [user, setUser] = useState({});
  // const [loading, setLoading] = useState(false);
  console.log(`userSubscriptionId`, userSubscriptionId);
  console.log(`isSingleMode`, isSingleMode);
  // GET request function to your Mock API

  // enqueueSnackbar(getError(err), { variant: "error" });
  // Calling the function on component mount
  const {
    userDispatch,
    userState: { UserSubscriptions: data, loading },
  } = useContext(GlobalContext);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    listUserSubscriptions()(userDispatch)((res) => {})((err) => {
      enqueueSnackbar(err.message, { variant: "error" });
    });
    if (data.length === 0) {
    }
    console.log(`loading`, loading);
  }, []);
  console.log(`data`, data);
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
            <div class="table-responsive">
              {/* <DataTableExtensions {...tableData}> */}
              <DataTableExtensions
                exportHeaders
                columns={columns}
                data={
                  userId
                    ? data.data?.filter((item) => item?.UserId === userId)
                    : userSubscriptionId
                    ? data.data?.filter(
                        (item) =>
                          item?.UserSubscriptionId === userSubscriptionId
                      )
                    : data?.data
                }
              >
                <DataTable
                  columns={columns}
                  data={
                    userId
                      ? data.data?.filter((item) => item?.UserId === userId)
                      : userSubscriptionId
                      ? data.data?.filter(
                          (item) =>
                            item?.UserSubscriptionId === userSubscriptionId
                        )
                      : data?.data
                  }
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
        {loading && <LoadingBox />}
      </div>
    </div>
  );
}

export default UserSubscription;
