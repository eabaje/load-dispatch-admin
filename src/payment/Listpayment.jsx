import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";
import { Edit, Trash, User } from "react-feather";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Form from "react-bootstrap/Form";
import "react-data-table-component-extensions/dist/index.css";
import { fetchData, fetchDataAll } from "../helpers/query";

function ListPayment() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  // GET request function to your Mock API
 

  // Calling the function on component mount
  useEffect(() => {
    fetchDataAll('/payment/findAll')((res)=>{
      setData(res)
    })((err)=>{


    });
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header alert alert-info">
            <h3>List of payment</h3>
            <ul>
              <li>Keep a track of all Succesfull Payment transaction</li>
              <li>Keep a track of all Status Payment transaction </li>
              
            </ul>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
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
              <table class="table table-striped ">
                <thead>
                  <tr>
                    <th>CarrierId</th>
                    <th>VehicleType</th>
                    <th>VehicleNumber</th>
                    <th>SerialNumber</th>
                    <th>VehicleMake</th>
                    <th>VehicleColor</th>
                    <th>VehicleModel</th>
                    <th>LicensePlate</th>
                    <th>VehicleModelYear</th>
                    <th>PurchaseYear</th>
                    <th>Insured</th>
                    <th>PicUrl</th>
                    <th>VehicleDocs</th>
                    <th>CreatedBy</th>
                    <th>CreatedOn</th>
                    <th>ModifiedBy</th>
                    <th>ModifiedOn</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.CarrierId}>
                      <td>{item.CarrierId}</td>
                      <td>{item.VehicleType}</td>
                      <td>{item.VehicleNumber}</td>
                      <td>{item.SerialNumber}</td>
                      <td>{item.VehicleMake}</td>
                      <td>{item.VehicleColor}</td>
                      <td>{item.VehicleModel}</td>
                      <td>{item.LicensePlate}</td>
                      <td>{item.VehicleModelYear}</td>
                      <td>{item.PurchaseYear}</td>
                      <td>{item.Insured}</td>
                      <td>{item.PicUrl}</td>
                      <td>{item.VehicleDocs}</td>
                      <td>{item.CreatedBy}</td>
                      <td>{item.CreatedOn}</td>
                      <td>{item.ModifiedBy}</td>
                      <td>{item.ModifiedOn}</td>
                      <td>
                        <ul class="table-controls">
                          <li>
                            <a
                              href={`/edit-vehicle-info/${item.VehicleId}`}
                              class="btn btn-sm"
                              title="Edit Carrier Entry"
                            >
                              <Edit size={12}/>
                            </a>
                          </li>
                          <li>
                            <a
                              href={`/assign-driver-to-vehicle/${item.VehicleId}`}
                              class="btn btn-sm"
                              title="Add Vehicle Info"
                            >
                               <User size={12}/>
                            </a>
                          </li>

                          <li>
                            <a
                              href={`/delete-data/${item.VehicleId}`}
                              class="btn btn-sm"
                              title="Delete"
                            >
                              <Trash size={12}/>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPayment;
