import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Form from "react-bootstrap/Form";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "../../datasource/dataColumns/driver";
import { ChevronsDown } from "react-feather";

function ListDriver({ history, match }) {
  const { companyId } = match.params;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  // GET request function to your Mock API
  const fetchData = async () => {
   
    try {
     
      const lnk= companyId ? `${API_URL}driver/findAllDriversByCompany/${companyId}`: `${API_URL}driver/findAll`;
      
      const res =  await axios.get(lnk);

     
      if (res) {
        setData(res.data.data);
      }
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };

  // Calling the function on component mount
  useEffect(() => {
    fetchData();
  //  console.log(`data`, data);
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const tableData = {
    columns,
    data,
  };
  return (
    <>
     
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header alert alert-info">
              <h4>View List of Drivers</h4>
              <hr />
              <ul>
                <li>Edit and delete Drivers</li>
                <li>Assign Drivers to Vehicle</li>
                <li>Request for Proposal</li>

                <li>Assign Jobs to Personnel</li>
              </ul>
            </div>
            <div class="card-body table-border-style">
              <div class="table-responsive">
                {/* <DataTableExtensions {...tableData}> */}
                <DataTableExtensions
                  exportHeaders
                  columns={columns(user)}
                  data={data}
                >
                  <DataTable
                    columns={columns(user)}
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
     
    </>
  );
}

export default ListDriver;
