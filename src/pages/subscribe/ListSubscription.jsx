import React, { useEffect } from "react";
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
function ListSubscription() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  

  // Calling the function on component mount
  useEffect(() => {
  
    fetchDataAll("subscription/findAll")((result)=>{

      setData(result);

    })((err)=>{

      enqueueSnackbar(err.message, { variant: "error" });


    });
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  

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
      name: "Subscription Type",
       selector: (row) => row.SubscriptionType,
      sortable: true,
      reorder: true
    },
    {
      id: 3,
      name: "Amount",
       selector: (row) => row.Amount,
      sortable: true,
      reorder: true
    },
    {
      id: 4,
      name: "Description",
       selector: (row) => row.Description,
      sortable: true,
      reorder: true
    },
    {
      id: 5,
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
      id: 6,
      name: "Duration",
       selector: (row) => row.Duration,
      sortable: true,
      reorder: true
    },
    {
      id: 7,
      name: "Created Date",
      selector: (row) => (row.createdAt),
      sortable: true,
      right: true,
      reorder: true
    },

    {
      id: 8,
      name: "Updated Date",
      selector: (row) => (row.updatedAt),
      sortable: true,
      right: true,
      reorder: true
    },

    {
      name: "Action",
      sortable: false,
      selector: "null",
      cell: (row) => [
       <> <Link to= {"/edit-subscription/" + row.SubscribeId}
        className="btn btn-sm" title="Edit  Subscription"
        ><Edit size={12} /></Link></>,

        <Link to= {"/list-user-subscription/" + row.SubscribeId }
        className="btn btn-sm" title="List All Users Subscribed"
        ><i
        
        className="first fas fa-user"
      ></i></Link>,

      <Link to= {"/delete-data/" + row.SubscribeId}
      className="btn btn-sm" title="Delete/Archive Redundant/Incorrect data"
      ><i
      
      className="fas fa-trash-alt"
    ></i></Link>
        
      ]
    }

  ];

  const tableData = {
    columns,
    data
  };

  return (
    <div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header alert alert-info">
            <h3>List of Subscription</h3>
            <ul class="">
              <li>Edit and delete Subscription</li>
              <li>Get an overview of all Subscription</li>
            </ul>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">

               {/* <DataTableExtensions {...tableData}> */}
            <DataTableExtensions exportHeaders columns={columns} data={data}>
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

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListSubscription;
