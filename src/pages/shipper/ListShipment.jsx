import React, { useEffect } from "react";
import {Camera,Trash,Truck,List,Edit} from 'react-feather'
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Link, useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";
import $ from "jquery";
import { fetchDataAll } from "../../helpers/query";
import shipmentState from "../../context/initialStates/shipment.state";
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
                      <td>{item.ShipmentDate ?? null}</td>
                      <td>{item.ShipmentDocs}</td>
                      <td>{item.ShipmentStatus}</td>
                      <td>
                        <ul class="table-controls">
                          <li>
                            <Link
                              to={"/edit-shipment/" + item.ShipmentId}
                              className="btn btn-sm"
                              title="Edit Shipment"
                            >
                              {" "}
                              <Edit size={12}/>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={
                                "/list-interest-for-shipment/" + item.ShipmentId
                              }
                              className="btn btn-sm"
                              title="List of all interested carriers"
                            >
                              {" "}
                              <List size={12}/> 
                            </Link>
                           
                           
                          </li>

                          <li>
                          <Link
                              to={
                                "/delete-data/" + item.ShipmentId
                              }
                              className="btn btn-sm"
                              title="Delete Data"
                            >
                              {" "}
                              <Trash size={12}/> 
                            </Link>
                           
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
