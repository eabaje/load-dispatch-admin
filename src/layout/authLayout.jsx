import React from "react";

const AuthLayout = ({ children }) => (
  <div>
    <div class="auth-wrapper">
      <div class="auth-content">
        <div class="card">
          <div class="row align-items-center text-center">
            <div class="col-md-12">
              <div class="card-body">
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
