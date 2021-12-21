import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";

function ListVehicle() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  // GET request function to your Mock API
  const fetchShipment = async () => {
    // fetch(`${INVENTORY_API_URL}`)
    //   .then((res) => res.json())
    //   .then((json) => setData(json));
    try {
      const res = await axios.get(`${API_URL}vehicle/findAll`);
      if (res) {
        setData(res);
      }
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };

  // Calling the function on component mount
  useEffect(() => {
    fetchShipment();
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3>List of Vehicles</h3>
            <ul>
              <li>Edit and delete Vehicles</li>
              <li>Assign Vehicle to Drivers</li>
              <li>Add vehicles to Carrier </li>
            </ul>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
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
                        <a href="./Edit/{item.CarrierId}">
                          Edit Vehicle Details
                        </a>
                        |
                        <a href="./Details/{item.CarrierId}">
                          Assign Vehicle to Driver Details
                        </a>{" "}
                        |<a href="./Delete/{item.CarrierId}">Delete Record</a>
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

export default ListVehicle;
