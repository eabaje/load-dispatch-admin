import React from "react";
import Header from "../components/header/header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <div class="pcoded-main-container"> */}
      <div className="pcoded-wrapper container">
        <div className="pcoded-content">
          <div className="pcoded-inner-content">
            <div className="main-body">
              {/* <div class="page-wrapper">
                  <div class="page-header">
                    <div class="page-block">
                      <div class="row align-items-center"> </div>
                    </div>
                  </div>
                </div> */}
              {children}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default MainLayout;
