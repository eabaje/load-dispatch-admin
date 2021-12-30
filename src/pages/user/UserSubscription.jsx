import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../constants";
import { getError } from "../../utils/error";
import $ from "jquery";
import { ChevronsDown, Edit, Trash, Users } from "react-feather";
import { fetchDataAll } from "../../helpers/query";
import { listUserSubscriptions } from "../../context/actions/user/user.action";
import { GlobalContext } from "../../context/Provider";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Form from "react-bootstrap/Form";
import "react-data-table-component-extensions/dist/index.css";
// import SortIcon from "@mui/icons-material/ArrowDownward";

function UserSubscription({ history, match }) {
  const { userSubscriptionId } = match.params;
  const isSingleMode = !userSubscriptionId;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [res, setData] = useState([]);
  const [user, setUser] = useState({});
  console.log(`userSubscriptionId`, userSubscriptionId);
  console.log(`isSingleMode`, isSingleMode);
  // GET request function to your Mock API

  // enqueueSnackbar(getError(err), { variant: "error" });
  // Calling the function on component mount
  const {
    userDispatch
   
  } = useContext(GlobalContext);

  const fetchData = async () => {
    // fetch(`${INVENTORY_API_URL}`)
    //   .then((res) => res.json())
    //   .then((json) => setData(json));
    try {
      const res = await axios.get(`${API_URL}user/findAllUserSubscriptions/${userSubscriptionId}`);
      if (res) {
       
        setData(res.data.data);
      }
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };

  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));

    if (isSingleMode) {
      fetchDataAll("user/findAllUserSubscriptions");
    } else {
      // setData(
      //   fetchDataAll("user/findAllUserSubscriptions/" + userSubscriptionId)

       
      // ); 
      fetchData();
      // listUserSubscriptions(userSubscriptionId)(userDispatch)(result=>{
      
      //   setData(result)


      // })
      
      
    }
  }, []);
  console.log(`pageData`, res);
  useEffect(() => {
    setTimeout(() => {
      $(".dataTable").DataTable({
        // dom: "rBftlip",

        pageLength: 10,
      });
    }, 1000);
  }, []);
  const handleClick = (title) => {
    console.log(`You clicked me! ${title}`);
  };
  const columns = [
    {
      id: 1,
      name: "Subscription Name",
      selector: (row) => row.SubscriptionName,
      sortable: true,
      reorder: true
    },
    {
      id: 2,
      name: "User",
       selector: (row) => row.User.FullName,
      sortable: true,
      reorder: true
    },
    {
      id: 3,
      name: "Active",
      selector:  (row) => (
        <Form.Check
          type="checkbox"
          id="custom-switch"
          checked={row.Active}
          disabled
        />
      ),
      sortable: true,
      right: true,
      reorder: true
    },
    {
      id: 4,
      name: "Start Date",
      selector: (row) => row.StartDate,
      sortable: true,
      right: true,
      reorder: true
    },

    {
      id: 4,
      name: "End Date",
      selector: (row) => row.EndDate,
      sortable: true,
      right: true,
      reorder: true
    },

    {
      name: "Action",
      sortable: false,
      selector: "null",
      cell: (row) => [
       <> <Link to= {"/edit-user-subscription/" + row.UserSubscriptionId+"/"+row.UserId}
        className="btn btn-sm" title="Edit User Subscription"
        ><Edit size={12} /></Link></>,

        <Link to= {"/list-user-subscription/" + row.UserSubscriptionId }
        className="btn btn-sm" title="Edit User Subscription"
        ><i
        
        className="first fas fa-pen"
      ></i></Link>,

      <Link to= {"/delete-data/" + row.UserSubscriptionId}
      className="btn btn-sm" title="Edit User Subscription"
      ><i
      
      className="fas fa-trash-alt"
    ></i></Link>
        
      ]
    }

  ];

  const tableData = {
    columns,
    res
  };
  return (
    <div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header alert alert-info">
            <h3>List of User Subscription</h3>
            <ul class="">
              <li>Edit and delete Subscription</li>
              <li>Get an overview of all Subscription</li>
            </ul>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
            {/* <DataTableExtensions {...tableData}> */}
            <DataTableExtensions exportHeaders columns={columns} data={res}>
                  <DataTable
                    columns={columns}
                    data={res}
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
    </div>
  );
}

export default UserSubscription;
