import React from "react";
import Header from "../components/header/header";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/Provider";
import { signout } from "../context/actions/auth/auth.action";
const MainLayout = ({ children }) => {

  const {
    authDispatch,
    authState: { user,isLoggedIn },
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false);
 // const [user, setUser] = useState({});

  const getUser = async () => {
    try {
     // setUser(JSON.parse(localStorage.getItem("user")));
      if (user) {
        setAuthLoaded(true);

        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);

        setIsAuthenticated(false);

        window.location = "/signin";
      }
    } catch (error) {}
  };
  const a = 1;
  React.useEffect(() => {
    let controller = new AbortController();
      getUser();
    return () => controller?.abort();

  
  }, [a]);
  // console.log(`User`, user);

 

  return (
    <>
      <Header />
      <div className="pcoded-main-container">
        {/* <div className="pcoded-wrapper container"> */}
        <div className="pcoded-content">
          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="page-header-title">
                    {/* <h5 className="m-b-10">Alert</h5> */}
                  </div>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/dashboard">
                        <i className="feather icon-home"></i>
                      </a>
                    </li>
                    {/* <li className="breadcrumb-item">
                      <a href="#!">Basic Components</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#!">Alert</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="pcoded-inner-content">
              <div className="main-body"> 
                <div className="page-wrapper">*/}
          <div className="row">{children}</div>

          {/* </div>
              </div>
            </div> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default MainLayout;
