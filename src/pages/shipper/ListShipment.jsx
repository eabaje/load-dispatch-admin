import React, { useEffect } from "react";
import { Camera, Trash, Truck, List, Edit, ChevronsDown } from "react-feather";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Link, useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";
import $ from "jquery";
import { fetchDataAll } from "../../helpers/query";
import shipmentState from "../../context/initialStates/shipment.state";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Form from "react-bootstrap/Form";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "../../datasource/dataColumns/shipment";
function ListShipment() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  // Calling the function on component mount
  useEffect(() => {
    fetchDataAll("shipment/findAll").then((shipment) => {
      setData(shipment);
    });
    console.log(`data`, data);
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const tableData = {
    columns,
    data,
  };

  return (
    <div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header alert alert-info">
            <h3>List of Shipments</h3>
            <hr />
            <ul>
              <li>Edit and delete Shipments</li>
              <li>Make Request for onboarding services</li>
              <li>View interest for your shipment</li>
            </ul>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
              {/* <DataTableExtensions {...tableData}> */}
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
              </DataTableExtensions>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListShipment;
