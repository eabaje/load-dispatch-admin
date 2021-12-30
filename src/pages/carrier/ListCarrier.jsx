import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";
import { Edit, Trash, Truck } from "react-feather";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Form from "react-bootstrap/Form";
import "react-data-table-component-extensions/dist/index.css";

function ListCarrier() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  // GET request function to your Mock API
  const fetchData = async () => {
    // fetch(`${INVENTORY_API_URL}`)
    //   .then((res) => res.json())
    //   .then((json) => setData(json));
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
                <table class="table table-striped ">
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>Carrier Type</th>
                      <th>Fleet Type</th>
                      <th>Fleet Number</th>
                      <th>Licensed</th>
                      <th>AboutUs</th>
                      <th>Service Description</th>
                      <th>Rating</th>

                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, i) => (
                      <tr key={i}>
                        <td>{item.CompanyId}</td>
                        <td>{item.CarrierType}</td>
                        <td>{item.FleetType}</td>
                        <td>{item.FleetNumber}</td>
                        <td>{item.Licensed}</td>
                        <td>{item.AboutUs}</td>
                        <td>{item.ServiceDescription}</td>
                        <td>{item.Rating}</td>

                        <td>
                          <ul class="table-controls">
                            <li>
                              <Link
                                to={"/edit-carrier/" + item.CarrierId}
                                className="btn btn-sm"
                                title="Edit Carrier Entry"
                              >
                                {" "}
                               <Edit size={15}/>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/add-vehicle-to-carrier/" + item.CarrierId+"/"+item.CarrierType}
                                className="btn btn-sm"
                                title="Add Vehicle Info"
                              >
                                {" "}
                                <Truck size={15}/>
                              </Link>
                            </li>

                            <li>
                              <Link
                                to={"/delete-data/" + item.CarrierId}
                                className="btn btn-sm"
                                title="Delete Vehicle Info"
                              >
                                {" "}
                                <Trash size={15}/>
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
    </>
  );
}

export default ListCarrier;
