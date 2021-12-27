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

function UserSubscription({ history, match }) {
    const { userSubscriptionId } = match.params;
    const isSingleMode = !userSubscriptionId;
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
console.log(`userSubscriptionId`, userSubscriptionId)
console.log(`isSingleMode`, isSingleMode)
  // GET request function to your Mock API
  
 

// enqueueSnackbar(getError(err), { variant: "error" });
  // Calling the function on component mount 
  
  useEffect(() => {
  
    setUser(JSON.parse(localStorage.getItem("user")));

   

    if (isSingleMode) {
    
      fetchDataAll('user/findAllUserSubscriptions');
       
        }
        else
        {
          fetchDataAll('user/findAllUserSubscriptions/'+userSubscriptionId);
         
         
            
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
                    <th>SubscriptionType</th>
                    <th>User</th>
                    
                    <th>Active</th>
                    <th>StartDate</th>
                    <th>EndDate</th>

                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.UserSubscriptionId}>
                     
                      <td>{item.SubscriptionName}</td>
                      <td>{item.FullName}</td>
                      <td>{item.Description}</td>
                      <td>{item.Duration}</td>
                      <td>{item.Active}</td>
                      <td>{item.StartDate}</td>
                      <td>{item.EndDate}</td>

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

export default UserSubscription

