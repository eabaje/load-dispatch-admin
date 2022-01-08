import React, { useContext, useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";
import { ChevronsDown, Edit, Trash, User } from "react-feather";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Form from "react-bootstrap/Form";
import "react-data-table-component-extensions/dist/index.css";
import {
  listVehicles,
  listVehiclesByCarrier,
} from "../../context/actions/vehicle/vehicle.action";
import { GlobalContext } from "../../context/Provider";
import { columns } from "../../datasource/dataColumns/vehicle";

function ListVehicle({ history, match }) {
  const { vehicleId } = match.params;
  const { carrierId } = match.params;
  const { carrierType } = match.params;
  const isAddMode = !vehicleId;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data2, setData] = useState([]);
  const [user, setUser] = useState({});

  const {
    vehicleDispatch,
    vehicleState: {
      Vehicles: { data, error, loading },
    },
  } = useContext(GlobalContext);

  // Calling the function on component mount
  useEffect(() => {
    if (carrierType) {
      if (data.length === 0) {
        listVehiclesByCarrier(carrierId, carrierType)(vehicleDispatch);
        // listVehicles()(vehicleDispatch);
      }
    } else {
      if (data.length === 0) {
        listVehicles()(vehicleDispatch);
      }
    }

    // ((result) => {
    //   setData(result.data);
    // })((err) => {
    //   enqueueSnackbar(err, { variant: "error" });
    // });

    // setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  console.log(`loading`, loading);
  // const tableData = {
  //   columns,
  //   data,
  // };
  return (
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header alert alert-info">
            <h3>List of Vehicles</h3>
            <ul>
              <li>Edit and delete Vehicles</li>
              <li>Assign Vehicle to Drivers</li>
              <li>Add vehicles to Carrier </li>
            </ul>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
              {/* <DataTableExtensions {...tableData}> */}
              <DataTableExtensions
                exportHeaders
                columns={columns}
                data={data.data}
              >
                <DataTable
                  columns={columns}
                  data={data.data}
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
    </div>
  );
}

export default ListVehicle;
