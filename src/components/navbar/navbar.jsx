import React, { useState, useEffect, useContext } from "react";

//import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import "./pcoded";
import { GlobalContext } from "../../context/Provider";
import NavBarAdmin from "./navbar-admin";
import NavBarCarrier from "./navbar-carrier";
import NavBarShipper from "./navbar-shipper";
import NavBarAudit from "./navbar-audit";
import NavBarDriver from "./navabar-driver";
import NavBarPublic from "./navbar-public";

import Menu from "./vertical/navbar-vertical-menu";
import {
  menuItemsAdmin,
  menuItemsCarrier,
  menuItemsDriver,
  menuItemsShipper,
} from "./vertical/sidebarData";
import { IMG_URL } from "../../constants";
import { ROLES } from "../../constants/enum";

const NavBar = () => {
  const [user, setUser] = useState({});

  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);
  //  const { dispatch } = useContext(AuthContext);

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  // const { pathname } = location;

  // //Javascript split method to get the name of the path in array
  // const splitLocation = pathname.split("/");

  const handleMenu = () => {
    var vw = $(window)[0].innerWidth;
    $(document).ready(function () {

    
      $("#pcoded").pcodedmenu({
        // themelayout: "vertical",
        MenuTrigger: "click",
        SubMenuTrigger: "click",
      });
   

    $("#mobile-collapse,#mobile-collapse1").click(function (e) {
      var vw = $(window)[0].innerWidth;
      if (vw < 992) {
        $(".pcoded-navbar").toggleClass("mob-open");
        e.stopPropagation();
      }
    });

    $(".mobile-menu").on('click', function() {
      var $this = $(this);
      $this.toggleClass('on');
  });
  $("#mobile-collapse").on('click', function() {
      if (vw > 991) {
          $(".pcoded-navbar:not(.theme-horizontal)").toggleClass("navbar-collapsed");
      }
  });




});

  };
  useEffect(() => {
    let controller = new AbortController();

    handleMenu();
    setUser(JSON.parse(localStorage.getItem("user")));
    return () => controller?.abort();
  }, []);

  return (
    <>
      {/* {(user.roles === "carrier" && <NavBarCarrier />) ||
        (user.roles === "shipper" && <NavBarShipper />) ||
        (user.roles === "broker" && <NavBarShipper />) ||
        (user.roles === "driver" && <NavBarDriver />) ||
        (user.roles === "audit" && <NavBarAdmin />) ||
        (user.roles === "admin" && <NavBarAdmin />) || <NavBarPublic />} */}

      <nav class="pcoded-navbar menu-light ">
        <div class="navbar-wrapper  ">
          <div class="navbar-content scroll-div ">
            <div class="">
              <div class="main-menu-header">
                <img
                  class="img-radius"
                  src={
                    user.UserPicUrl
                      ? IMG_URL + user?.UserPicUrl
                      : "https://bootdey.com/img/Content/avatar/avatar7.png"
                  }
                  alt="User-Profile-Image"
                />
                <div class="user-details">
                  <div id="more-details">
                    {ROLES.find((item) => item.value === user?.roles)?.text}{" "}
                    <i class="fa fa-caret-down"></i>
                  </div>
                </div>
              </div>
              <div class="collapse" id="nav-user-link">
                <ul class="list-unstyled">
                  <li class="list-group-item">
                    <a href="user-profile.html">
                      <i class="feather icon-user m-r-5"></i>View Profile
                    </a>
                  </li>
                  <li class="list-group-item">
                    <a href="#!">
                      <i class="feather icon-settings m-r-5"></i>Settings
                    </a>
                  </li>
                  <li class="list-group-item">
                    <a href="auth-normal-sign-in.html">
                      <i class="feather icon-log-out m-r-5"></i>Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <ul class="nav pcoded-inner-navbar ">
              {user.roles === "carrier" &&
                menuItemsCarrier(user).map((menu, index) => {
                  return <Menu id={index} items={menu} user={user} />;
                })}

              {user.roles === "driver" &&
                menuItemsDriver(user).map((menu, index) => {
                  return <Menu id={index} items={menu} user={user} />;
                })}

              {user.roles === "shipper" &&
                menuItemsShipper(user).map((menu, index) => {
                  return <Menu id={index} items={menu} user={user} />;
                })}

              {user.roles === "admin" &&
                menuItemsAdmin(user).map((menu, index) => {
                  return <Menu id={index} items={menu} user={user} />;
                })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
