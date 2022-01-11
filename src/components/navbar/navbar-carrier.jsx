import React, { useEffect } from "react";
import { useContext, useState } from "react";
//import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import "./pcoded";
//import "./ripple";
// import "./horizontal-menu";
//import { AuthContext } from "../context/authContext/AuthContext";
//import { logout } from "../context/authContext/AuthActions";

const NavBarCarrier = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState({});

  //assigning location variable
  const location = useLocation();

  const handleMenu = () => {
    $(document).ready(function () {
      $("#pcoded").pcodedmenu({
        themelayout: "horizontal",
        MenuTrigger: "hover",
        SubMenuTrigger: "hover",
      });
    });
  };
  useEffect(() => {
    handleMenu();
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <nav class="pcoded-navbar theme-horizontal menu-light brand-blue">
      <div className="navbar-wrapper container">
        <div className="navbar-content sidenav-horizontal" id="layout-sidenav">
          <ul className="nav pcoded-inner-navbar sidenav-inner">
            <li className="nav-item pcoded-menu-caption">
              <label>Navigation</label>
            </li>
            <li className="nav-item">
              <a href="/dashboard" class="nav-link ">
                <span class="pcoded-micon">
                <i className="first fas fa-home"></i>
                </span>
                <span class="pcoded-mtext">Dashboard</span>
              </a>
            </li>

            <li className="nav-item pcoded-hasmenu">
              <a href="#!" className="nav-link ">
                <span className="pcoded-micon">
                <i className="first fas fa-car"></i>
                </span>
                <span className="pcoded-mtext">Ship Vehicles</span>
              </a>
              <ul className="pcoded-submenu">
                <li>
                  <a href="/add-shipment">Post a Vehicle</a>
                </li>
                <li>
                  <a href="/list-all-shipments">Find all Vehicles</a>
                </li>
                <li>
                  <a href={`/my-shipments-info/${user.UserId}`}>My Vehicles</a>
                </li>
                <li>
                  <a href="/truck-listing">Search Truck Space</a>
                </li>
              </ul>
            </li>

            <li className="nav-item pcoded-hasmenu">
              <a href="#!" className="nav-link ">
                <span className="pcoded-micon">
                <i className="first fas fa-truck"></i>
                </span>
                <span className="pcoded-mtext">Carrier</span>
              </a>
              <ul className="pcoded-submenu">
                <li>
                  <a href="/add-carrier" label="Resources">
                    Create carrier Info
                  </a>
                </li>
                <li>
                  <a href={`/list-carriers-info/${user.CompanyId}`} label="Resources">
                    List carrier Info
                  </a>
                </li>
              
               
              </ul>
            </li>

            <li className="nav-item pcoded-hasmenu">
              <a href="#!" className="nav-link ">
                <span className="pcoded-micon">
                <i className="first fas fa-users"></i>
                </span>
                <span className="pcoded-mtext">Driver Management</span>
              </a>
              <ul className="pcoded-submenu">
                <li>
                  <a href="/list-drivers-info" label="Resources">
                    List Drivers
                  </a>
                </li>
                <li>
                  <a href="/add-driver-info" label="Resources">
                    Create Driver Profile
                  </a>
                </li>
                <li>
                  <a href="/assign-vehicle-driver" label="Resources">
                    Assign Vehicle To Driver
                  </a>
                </li>
                <li>
                  <a href="/delete-driver" label="Resources">
                    Delete Driver
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item pcoded-hasmenu">
              <a href="#!" className="nav-link ">
                <span className="pcoded-micon">
                <i className="first fas fa-road"></i>
                </span>
                <span className="pcoded-mtext">Trip Management</span>
              </a>
              <ul className="pcoded-submenu">
              <li>
                  <a href="/list-trip-info/" label="Resources">
                    List All Trips
                  </a>
                </li>
                <li>
                  <a href="/add-trip" label="Resources">
                    Create Trip Record
                  </a>
                </li>
               
               
              </ul>
            </li>

          


          

           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarCarrier;
