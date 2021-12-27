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
import { fetchDataAll } from "../../helpers/query";

function UserList({ history, match }) {
    const { userId } = match.params;
    const isSingleMode = !userId;
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  // GET request function to your Mock API
  
 

// enqueueSnackbar(getError(err), { variant: "error" });
  // Calling the function on component mount 
  
  useEffect(() => {
  
    setUser(JSON.parse(localStorage.getItem("user")));

   

    if (!isSingleMode) {
    
        fetchDataAll('user/findOne/'+userId)
        }
        else
        {
            fetchDataAll('user/findAllUser');
            
        }

   
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
            <h3>List of User Subscription</h3>
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
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Region</th>
                    <th>Country</th>
                    <th>Company Name</th>
                    <th>IsActivated?</th>
                    <th></th>
                    <th>Accepted Terms</th>
                    <th>Payment Method</th>
                   
              
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.UserSubscriptionId}>
                     
                      <td>{item.SubscriptionName}</td>
                      <td>{item.FullName}</td>
                      <td>{item.Email}</td>
                      <td>{item.Phone}</td>
                      <td>{item.Phone}</td>
                      <td>{item.Address}</td>
                      <td>{item.City}</td>
                      <td>{item.Region}</td>
                      <td>{item.Country}</td>
                      <td>{item.CompanyName}</td>
                      <td>{item.IsActivated}</td>
                      <td>{item.UserPicUrl}</td>
                      <td>{item.AcceptTerms}</td>
                      <td>{item.PaymentMethod}</td>

                      <td>
                        <ul class="table-controls">
                          <li>
                            <Link
                              to={"/edit-user-subscription/" + item.UserSubscriptionId}
                              className="btn btn-sm"
                              title="Edit User Subscription"
                            >
                              {" "}
                              <Edit size={12}/>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/list-user-subscription/" + item.SubscribeId}
                              className="btn btn-sm"
                              title="Get User Subscription"
                            >
                              {" "}
                             
                              <Users size={12}/>
                            </Link>
                          </li>

                          <li>
                            <Link
                              to={"/delete-data/" + item.SubscribeId}
                              className="btn btn-sm"
                              title="Delete User Subscription"
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

export default UserList

