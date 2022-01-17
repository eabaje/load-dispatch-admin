import React, { useEffect } from "react";
import { useContext, useState } from "react";
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

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
    <>
      {(user.roles === "carrier" && <NavBarCarrier />) ||
        (user.roles === "shipper" && <NavBarShipper />) ||
        (user.roles === "broker" && <NavBarShipper />) ||
        (user.roles === "driver" && <NavBarDriver />) ||
        (user.roles === "audit" && <NavBarAdmin />) ||
        (user.roles === "admin" && <NavBarAdmin />) || <NavBarAdmin />}
    </>
  );
};

export default NavBar;
