import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";
import $ from "jquery";
import { Edit, Trash, Users } from "react-feather";
function ListSubscription() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  // GET request function to your Mock API
  const fetchData = async () => {
    // fetch(`${INVENTORY_API_URL}`)
    //   .then((res) => res.json())
    //   .then((json) => setData(json));
    try {
      const res = await axios.get(`${API_URL}subscription/findAll`);
      if (res) {
        console.log("state:", res.data);
        setData(res.data.data);
      }
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };

  // Calling the function on component mount
  useEffect(() => {
    fetchData();
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      $(".dataTable").DataTable({
        // dom: "rBftlip",

        pageLength: 10,
      });
    }, 1000);
  }, []);
  return (
    <div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header ">
            <h3>List of Subscription</h3>
            <ul class="alert alert-info">
              <li>Edit and delete Subscription</li>
              <li>Get an overview of all Subscription</li>
            </ul>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
              <table class="table table-striped table-bordered table-hover table-checkable dataTable">
                <thead>
                  <tr>
                    <th>SubscriptionName</th>
                    <th>SubscriptionType</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Active</th>
                    <th>CreatedAt</th>
                    <th>UpdatedAt</th>

                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.SubscribeId}>
                      <td>{item.SubscriptionType}</td>
                      <td>{item.SubscriptionName}</td>
                      <td>{item.Amount}</td>
                      <td>{item.Description}</td>
                      <td>{item.Duration}</td>
                      <td>{item.Active}</td>
                      <td>{item.createdAt}</td>
                      <td>{item.updatedAt}</td>

                      <td>
                        <ul class="table-controls">
                          <li>
                            <Link
                              to={"/edit-subscription/" + item.SubscribeId}
                              className="btn btn-sm"
                              title="Edit User Subscription"
                            >
                              {" "}
                              <Edit size={12} />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/list-user-subscription/" + item.SubscribeId}
                              className="btn btn-sm"
                              title="Get User Subscription"
                            >
                              {" "}
                              <Users size={12} />
                            </Link>
                          </li>

                          <li>
                            <Link
                              to={"/delete-data/" + item.SubscribeId}
                              className="btn btn-sm"
                              title="Delete User Subscription"
                            >
                              {" "}
                              <Trash size={12} />
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

export default ListSubscription;
