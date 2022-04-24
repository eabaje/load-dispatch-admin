import React, {useState, useEffect,useContext } from "react";

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
import { menuItemsDriver } from "./vertical/sidebarData";

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
        (user.roles === "admin" && <NavBarAdmin />) || <NavBarPublic />}
    </>
  );
};

export default NavBar;


import Menu from "./vertical/navbar-vertical-menu";
import { menuItemsDriver } from "./vertical/sidebarData";
import user from "../../context/reducers/user.reducer";
const Navbar1 = () => {


  return (
    <>
    <nav class="pcoded-navbar menu-light ">
		<div class="navbar-wrapper  ">
			<div class="navbar-content scroll-div " >
				
				<div class="">
					<div class="main-menu-header">
						<img class="img-radius" src="assets/images/user/avatar-2.jpg" alt="User-Profile-Image"/>
						<div class="user-details">
							<div id="more-details">UX Designer <i class="fa fa-caret-down"></i></div>
						</div>
					</div>
					<div class="collapse" id="nav-user-link">
						<ul class="list-unstyled">
							<li class="list-group-item"><a href="user-profile.html"><i class="feather icon-user m-r-5"></i>View Profile</a></li>
							<li class="list-group-item"><a href="#!"><i class="feather icon-settings m-r-5"></i>Settings</a></li>
							<li class="list-group-item"><a href="auth-normal-sign-in.html"><i class="feather icon-log-out m-r-5"></i>Logout</a></li>
						</ul>
					</div>
				</div>
				
				<ul class="nav pcoded-inner-navbar ">

        { user.roles === "carrier" &&
         menuItemsDriver(user).map((menu, index) => {
        
          return <Menu items={menu} user={user} />;
        })}
        
        
        
        
        
        

      {(() => {
        switch (user.roles) {
          case 'carrier':
            return   
              menuItemsDriver(user).map((menu, index) => {
              
               <Menu items={menu} user={user} />;
             });
          case 'shipper':
            return <Warning text={text} />;
          case 'broker':
            return <Error text={text} />;
          
          case 'broker':
              return <Error text={text} />;
          default:
            return null;
        }
      })()}

				</ul>
				
			
				
				</div>
		</div>
	</nav>


     




    
    </>
  );
};

;
