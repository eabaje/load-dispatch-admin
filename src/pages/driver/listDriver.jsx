import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";

function ListDriver() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);

  // GET request function to your Mock API
  const fetchShipment = async () => {
    // fetch(`${INVENTORY_API_URL}`)
    //   .then((res) => res.json())
    //   .then((json) => setData(json));
    try {
      const res = await axios.get(`${API_URL}shipment/findAll`);
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
  }, []);
  return (
    <>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h4>View List of Drivers</h4>
              <ul>
                <li>Edit and delete Drivers</li>
                <li>Assign Drivers to Vehicle</li>
                <li>Request for Proposal</li>

                <li>Assign Jobs to Personnel</li>
              </ul>
            </div>
            <div class="card-body table-border-style">
              <div class="table-responsive">
                <table class="table table-striped ">
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>DriverName</th>
                      <th>DriverLicense</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>Region</th>
                      <th>PostalCode</th>
                      <th>Country</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>PicUrl</th>
                      <th>Licensed</th>
                      <th>LicenseUrl</th>
                      <th>Rating</th>
                      <th>DriverDocs</th>
                      <th>CreatedBy</th>
                      <th>CreatedOn</th>
                      <th>ModifiedBy</th>
                      <th>ModifiedOn</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.DriverId}>
                        <td>{item.Company.CompanyId}</td>
                        <td>{item.DriverName}</td>
                        <td>{item.DriverLicense}</td>
                        <td>{item.Address}</td>
                        <td>{item.City}</td>
                        <td>{item.Region}</td>
                        <td>{item.PostalCode}</td>
                        <td>{item.Country}</td>
                        <td>{item.Phone}</td>
                        <td>{item.Email}</td>
                        <td>{item.PicUrl}</td>
                        <td>{item.Licensed}</td>
                        <td>{item.LicenseUrl}</td>
                        <td>{item.Rating}</td>
                        <td>{item.DriverDocs}</td>

                        <td>{item.CreatedBy}</td>
                        <td>{item.CreatedOn}</td>
                        <td>{item.ModifiedBy}</td>
                        <td>{item.ModifiedOn}</td>
                        <td>
                          <a href="./EditDriver/{item.DriverId}">
                            Edit Driver Details
                          </a>{" "}
                          |
                          <a href="./Details/{item.DriverId}">
                            Assign Vehicle to Driver Details
                          </a>{" "}
                          |
                          <a href="./DeleteDriver/{item.DriverId}">
                            Delete Record
                          </a>
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
    </>
  );
}

export default ListDriver;
