import React, { useEffect } from "react";
import { useContext, useState } from "react";
//import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import "./pcoded";
import { GlobalContext } from "../../context/Provider";

const NavBarShipper = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const {
    authDispatch,
    authState: { error, user, isLoggedIn },
  } = useContext(GlobalContext);

  const location = useLocation();

  //destructuring pathname from location
  // const { pathname } = location;

  // //Javascript split method to get the name of the path in array
  // const splitLocation = pathname.split("/");

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
                  <i class="feather icon-home"></i>
                </span>
                <span class="pcoded-mtext">Dashboard</span>
              </a>
            </li>

            <li className="nav-item pcoded-hasmenu">
              <a href="#!" className="nav-link ">
                <span className="pcoded-micon">
                  <i className="feather icon-box"></i>
                </span>
                <span className="pcoded-mtext">Ship Vehicles</span>
              </a>
              <ul className="pcoded-submenu">
                <li>
                  <a href="/add-shipment">Post a Vehicle</a>
                </li>
                <li>
                  <a href={`/my-shipments/?userId=${user.UserId}`}>
                    My Vehicles
                  </a>
                </li>
                <li>
                  <a href="/list-carriers">Connect with carriers </a>
                </li>
              </ul>
            </li>

            <li className="nav-item pcoded-hasmenu">
              <a href="#!" className="nav-link ">
                <span className="pcoded-micon">
                  <i className="feather icon-truck"></i>
                </span>
                <span className="pcoded-mtext">Carrier</span>
              </a>
              <ul className="pcoded-submenu">
                <li>
                  <a href="/list-carriers" label="Resources">
                    List carrier Info
                  </a>
                </li>

                <li>
                  <a href="/list-vehicles" label="Resources">
                    Vehicle List
                  </a>
                </li>
                <li>
                  <a href="/view-vehicle-request" label="Resources">
                    View Requests
                  </a>
                </li>
                <li>
                  <a href="/list-vehicle" label="Resources">
                    Connect to Shippers
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item pcoded-hasmenu">
              <a href="#!" className="nav-link ">
                <span className="pcoded-micon">
                  <i className="feather icon-aperture"></i>
                </span>
                <span className="pcoded-mtext">Connect with Drivers</span>
              </a>
              <ul className="pcoded-submenu">
                <li>
                  <a href="/list-drivers-summary" label="Resources">
                    List Drivers
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

export default NavBarShipper;
