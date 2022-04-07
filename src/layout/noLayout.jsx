import React from "react";
const imgMyimageexample = require("../assets/slider_2.jpg");
const divStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: "cover",
};
const NoLayout = ({ children }) => (
  <div>
    <div class="auth-wrapper" style={divStyle}>
      <div class="auth-content">
        <div class="card">
          <div class="row align-items-center text-center">
            <div class="col-md-12">
              <div class=" card-body">
               

                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NoLayout;
