import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";
import { ChevronsDown, Edit, Trash, Truck } from "react-feather";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Form from "react-bootstrap/Form";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "../../datasource/dataColumns/carrier";
import { GlobalContext } from "../../context/Provider";
import { listCarriers } from "../../context/actions/carrier/carrier.action";
import LoadingBox from "../../components/notification/loadingbox";

function ListCarrier({ history, match }) {
  const { companyId } = match.params;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data2, setData] = useState([]);
  const [user, setUser] = useState({});
  const {
    carrierDispatch,
    carrierState: {
      Carriers: { data, loading },
    },
  } = useContext(GlobalContext);

  // GET request function to your Mock API
  const loadData=()=>{

    if (data.length === 0) {
      setUser(JSON.parse(localStorage.getItem("user")));
   
      listCarriers()(carrierDispatch)((res) => {
        // setData(res.data);
      })((err) => {
        enqueueSnackbar(err, { variant: "error" });
      });
    }

  }
  // Calling the function on component mount
  useEffect(() => {
    let controller = new AbortController();
    loadData();
    return () => controller?.abort();

    //  fetchData();
  }, []);
  // console.log(`data`, JSON.parse(localStorage.getItem("user")));
  return (
    <>
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header alert alert-info">
            <h4>View List of carriers</h4>
            <hr />
            <ul>
              <li>Edit and delete Vehicle</li>
              <li>Assign Drivers to Vehicle</li>
            </ul>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
              {/* <DataTableExtensions {...tableData}> */}

              {loading ? (
                <LoadingBox />
              ) : (
                <DataTableExtensions
                  exportHeaders
                  columns={columns(user)}
                  data={
                    companyId
                      ? data.data?.filter(
                          (item) => item?.CompanyId === parseInt(companyId)
                        )
                      : data?.data
                  }
                >
                  <DataTable
                    columns={columns(user)}
                    data={
                      companyId
                        ? data.data?.filter(
                            (item) => item?.CompanyId === parseInt(companyId)
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCarrier;
