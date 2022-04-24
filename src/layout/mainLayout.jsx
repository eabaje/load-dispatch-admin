import React from "react";
import Header from "../components/header/header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div class="pcoded-main-container">
        {/* <div class="pcoded-wrapper container"> */}
        <div class="pcoded-content">
          <div class="page-header">
            <div class="page-block">
              <div class="row align-items-center">
                <div class="col-md-12">
                  <div class="page-header-title">
                    <h5 class="m-b-10">Alert</h5>
                  </div>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">
                        <i class="feather icon-home"></i>
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="#!">Basic Components</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="#!">Alert</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="pcoded-inner-content">
              <div class="main-body"> 
                <div class="page-wrapper">*/}
          <div class="row">{children}</div>

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
