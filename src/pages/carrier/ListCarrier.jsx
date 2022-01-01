import React, { useEffect } from "react";
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

function ListCarrier() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  // GET request function to your Mock API
  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}carrier/findAll`);
      if (res) {
        console.log(`data`, res.data);
        setData(res.data.data);
      }
    } catch (err) {
      enqueueSnackbar(err.response.data.message, { variant: "error" });
    }
  };

  // Calling the function on component mount
  useEffect(() => {
    fetchData();
    //console.log(`data`, data);
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const tableData = {
    columns,
    data,
  };
  return (
    <>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header alert alert-info">
              <h4>View List of carriers</h4>
              <ul>
                <li>Edit and delete Vehicle</li>
                <li>Assign Drivers to Vehicle</li>
              </ul>
            </div>
            <div class="card-body table-border-style">
              <div class="table-responsive">
                {/* <DataTableExtensions {...tableData}> */}
                <DataTableExtensions
                  exportHeaders
                  columns={columns}
                  data={data}
                >
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
    </>
  );
}

export default ListCarrier;
