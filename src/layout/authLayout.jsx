import React from "react";
const imgMyimageexample = require("../assets/slider_2.jpg");
const divStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: "cover",
};
const AuthLayout = ({ children }) => (
  <div>
    <div class="auth-wrapper" style={divStyle}>
      <div class="auth-content">
        <div class="card">
          <div class="row align-items-center text-center">
            <div class="col-md-12">
              <div class=" card-body">
                <img
                  src="assets/images/logo-small-prod.png"
                  alt=""
                  class="logo-main"
                />
                <h4 class="mb-3 f-w-700">Global Load Dispatch</h4>

                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AuthLayout;
