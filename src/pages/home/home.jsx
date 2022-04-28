import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../context/Provider";
import { useSnackbar } from "notistack";
import { Link, useHistory } from "react-router-dom";

import NewsFlash from "../../components/home/newsFlash";
//import TickerFeed from "../../components/home/tickerFeed";
import SideLink from "../../components/home/sideLink";
import isAuthenticated from "../../utils/isAuthenticated";

function Home() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const history = useHistory();
  const {
    authState: { error, user, isLoggedIn },
  } = useContext(GlobalContext);
  // React.useEffect(() => {
  //   if (!isAuthenticated()) {
  //     history.push("/signin");
  //   }
  // }, []);
  return (
    <>
    
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="alert alert-info " role="alert">
                <NewsFlash />
              </div>

              {/* <h3 className="text-uppercase">Latest News</h3>
              <p>
                <strong>Getting Started</strong>
                <br />

                
              </p> */}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <SideLink />
        </div>
    

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h5>Recent Request for Load Boarding</h5>
            </div>
            <div className="card-body">
              {/* <TickerFeed /> */}
              <div className="alert alert-info mb-0" role="alert">
                <p className="mb-0">
                  It is best suited for those applications where you required
                  your navigation is set to be a Horizontal way with fixed width
                  container.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
