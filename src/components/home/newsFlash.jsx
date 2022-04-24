import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  listShipments,
  listShipmentsInterest,
} from "../../context/actions/shipment/shipment.action";
import { GlobalContext } from "../../context/Provider";

function NewsFlash() {
  // const [dataShipment, setDataShipment] = useState([]);
  // const [dataInterest, setDataInterest] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [dataLengthInterest, setDataLengthInterest] = useState(0);
  const [user, setUser] = useState({});
  const {
    shipmentDispatch,
    shipmentState: {
      Shipments: { data: dataShipment },
      Interests: { data: dataInterest }, //loading
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (dataShipment.length === 0) {
      listShipments()(shipmentDispatch)((res) => {
        //  setDataShipment(res);
      })((err) => {
          enqueueSnackbar(err, { variant: "error" });
      });

      listShipmentsInterest()(shipmentDispatch)((res) => {
        // setDataInterest(res.data);
      })((err) => {
          enqueueSnackbar(err, { variant: "error" });
      });
    }
    // setDataLength(dataShipment.data?.length);
    // setDataLengthInterest(dataInterest.data?.length);
   
  }, []);
  //console.log(`data`, dataLengthInterest);
  return (
    <>
      <div class="grey-bg container-fluid">
        <section id="stats-subtitle">
          <div class="row">
            <div class="col-12 mt-3 mb-1">
              <h4 class="text-uppercase">DASHBOARD SUMMARY</h4>
              <hr />
              {/* <p>Statistics on minimal cards with Title &amp; Sub Title.</p> */}
            </div>
          </div>

          <div class="row">
            <div class="col-xl-6 col-md-12">
              <div class="card overflow-hidden">
                <div class="card-content">
                  <div class="card-body cleartfix">
                    <div class="media align-items-stretch">
                      <div class="align-self-center">
                        <i class="icon-bag primary font-large-2 mr-2"></i>
                      </div>
                      <div class="media-body">
                        <h6>Total Shipment Post</h6>
                        <Link to={"/list-all-shipments"}>
                          <span>click for more details</span>
                        </Link>
                      </div>
                      <div class="align-self-center">
                        <h6>{dataShipment.data?.length}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-6 col-md-12">
              <div class="card">
                <div class="card-content">
                  <div class="card-body cleartfix">
                    <div class="media align-items-stretch">
                      <div class="align-self-center">
                        <i class="icon-like warning font-large-2 mr-2"></i>
                      </div>
                      <div class="media-body">
                        <h6>Total Shipment Interest</h6>
                        <Link to={"/list-all-shipments-interest"}>
                          <span>click for more details</span>
                        </Link>
                      </div>
                      <div class="align-self-center">
                        <h6>{dataInterest.data?.length}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-6 col-md-12">
              <div class="card overflow-hidden">
                <div class="card-content">
                  <div class="card-body cleartfix">
                    <div class="media align-items-stretch">
                      <div class="align-self-center">
                        <i class="icon-drawer primary font-large-2 mr-2"></i>
                      </div>
                      <div class="media-body">
                        <h6>Total Shipment Assigned</h6>
                        <Link to={"/list-all-shipments-assigned"}>
                          <span>click for more details</span>
                        </Link>
                      </div>
                      <div class="align-self-center">
                        <h6>
                          {
                            dataShipment.data?.filter(
                              (item) => item.AssignedShipment === true
                            ).length
                          }
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-6 col-md-12">
              <div class="card">
                <div class="card-content">
                  <div class="card-body cleartfix">
                    <div class="media align-items-stretch">
                      <div class="align-self-center">
                        <i class="icon-plane warning font-large-2 mr-2"></i>
                      </div>
                      <div class="media-body">
                        <h6>Total Shipment Delivered </h6>
                        <Link to={"/list-all-shipments-sent"}>
                          <span>click for more details</span>
                        </Link>
                      </div>
                      <div class="align-self-center">
                        <h6>
                          {
                            dataShipment.data?.filter(
                              (item) => item.ShipmentStatus === "Delivered"
                            ).length
                          }
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default NewsFlash;
