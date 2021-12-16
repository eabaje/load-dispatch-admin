import React from "react";
import Header from "../components/header/header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div class="pcoded-main-container">
        <div class="pcoded-wrapper container">
          <div class="pcoded-content">
            <div class="pcoded-inner-content">
              <div class="main-body">
                <div class="page-wrapper">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
