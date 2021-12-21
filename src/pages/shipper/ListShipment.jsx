import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";
import $ from "jquery";
function ListShipment() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  // GET request function to your Mock API
  const fetchShipment = async () => {
    // fetch(`${INVENTORY_API_URL}`)
    //   .then((res) => res.json())
    //   .then((json) => setData(json));
    try {
      const res = await axios.get(`${API_URL}shipment/findAll`);
      if (res) {
        setData(res.data);
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
  useEffect(() => {
    setTimeout(() => {
      $(".dataTable").DataTable({
        dom: "rBftlip",

        pageLength: 10,
      });
    }, 1000);
  }, []);
  return (
    <div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header alert alert-tertiary">
            <h3 style={{ color: "#fff" }}>List of Shipments</h3>
            <hr style={{ "border-color": "#fff", "align-items": "right" }} />
            <ul>
              <li>Edit and delete Shipments</li>
              <li>Assign Drivers to Vehicle</li>
              <li>Request for Proposal</li>

              <li>Assign Jobs to Personnel</li>
            </ul>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
              <table class="table table-striped table-bordered table-hover table-checkable dataTable">
                <thead>
                  <tr>
                    <th>UserId</th>
                    <th>CompanyId</th>
                    <th>LoadCategory</th>
                    <th>LoadType</th>
                    <th>LoadWeight</th>
                    <th>LoadUnit</th>
                    <th>Qty</th>
                    <th>Description</th>
                    <th>PickUpRegion</th>
                    <th>PickUpLocation</th>
                    <th>DeliveryCountry</th>
                    <th>DeliveryRegion</th>
                    <th>DeliveryLocation</th>
                    <th>ExpectedPickUpDate</th>
                    <th>ExpectedDeliveryDate</th>
                    <th>RequestForShipment</th>
                    <th>ShipmentRequestPrice</th>
                    <th>DeliveryContactName)</th>
                    <th>DeliveryContactPhone</th>
                    <th>DeliveryEmail</th>
                    <th>AssignedShipment</th>
                    <th>ShipmentDate</th>
                    <th>ShipmentDocs</th>
                    <th>ShipmentStatus</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.ShipmentId}>
                      <td>{item.UserId}</td>
                      <td>{item.CompanyId}</td>
                      <td>{item.LoadCategory}</td>
                      <td>{item.LoadType}</td>
                      <td>{item.LoadWeight}</td>
                      <td>{item.LoadUnit}</td>
                      <td>{item.Qty}</td>
                      <td>{item.Description}</td>
                      <td>{item.PickUpRegion}</td>
                      <td>{item.PickUpLocation}</td>
                      <td>{item.DeliveryCountry}</td>
                      <td>{item.DeliveryRegion}</td>
                      <td>{item.DeliveryLocation}</td>
                      <td>{item.ExpectedPickUpDate}</td>
                      <td>{item.ExpectedDeliveryDate}</td>
                      <td>{item.RequestForShipment}</td>
                      <td>{item.ShipmentRequestPrice}</td>
                      <td>{item.DeliveryContactName}</td>
                      <td>{item.DeliveryContactPhone}</td>
                      <td>{item.DeliveryEmail}</td>
                      <td>{item.AssignedShipment}</td>
                      <td>{item.ShipmentDate}</td>
                      <td>{item.ShipmentDocs}</td>
                      <td>{item.ShipmentStatus}</td>
                      <td>
                        <ul class="table-controls">
                          <li>
                            <a
                              href={`/edit-shipment/${item.ShipmentId}`}
                              class="btn btn-sm"
                              title="Edit Shipment Entry"
                            >
                              <i class="icon-pencil"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={`/list-interest-for-shipment/${item.ShipmentId}`}
                              class="btn btn-sm"
                              title="List Interest for shipment"
                            >
                              <i class="icon-check-sign"></i>
                            </a>
                          </li>

                          <li>
                            <a
                              href={`/delete-data/${item.ShipmentId}`}
                              class="btn btn-sm"
                              title="Add Job Result"
                            >
                              <i class="icon-trash"></i>
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

export default ListShipment;
