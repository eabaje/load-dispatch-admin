import React from "react";
import Header from "../components/header/header";

const MainLayout = ({ children }) => {
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
