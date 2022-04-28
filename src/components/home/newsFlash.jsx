import React, { useContext, useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import {
  listShipments,
  listShipmentsInterest,
} from "../../context/actions/shipment/shipment.action";
import { GlobalContext } from "../../context/Provider";

function NewsFlash() {
  // const [dataShipment, setDataShipment] = useState([]);
  // const [dataInterest, setDataInterest] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
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

  const loadData=()=>{

   
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


  }

  useEffect(() => {
    let controller = new AbortController();
    loadData();
    return () => controller?.abort();
    // setDataLength(dataShipment.data?.length);
    // setDataLengthInterest(dataInterest.data?.length);
  }, []);


 
  //console.log(`data`, dataLengthInterest);
  return (
    <>
      <div className="grey-bg container-fluid">
        <section id="stats-subtitle">
          <div className="row">
            <div className="col-12 mt-3 mb-1">
              <h4 className="text-uppercase">DASHBOARD SUMMARY</h4>
              <hr />
              {/* <p>Statistics on minimal cards with Title &amp; Sub Title.</p> */}
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="card overflow-hidden">
                <div className="card-content">
                  <div className="card-body cleartfix">
                    <div className="media align-items-stretch">
                      <div className="align-self-center">
                        <i className="icon-bag primary font-large-2 mr-2"></i>
                      </div>
                      <div className="media-body">
                        <h6>Total Shipment Post</h6>
                        <Link to={"/list-all-shipments"}>
                          <span>click for more details</span>
                        </Link>
                      </div>
                      <div className="align-self-center">
                        <h6>{dataShipment.data?.length}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-12">
              <div className="card">
                <div className="card-content">
                  <div className="card-body cleartfix">
                    <div className="media align-items-stretch">
                      <div className="align-self-center">
                        <i className="icon-like warning font-large-2 mr-2"></i>
                      </div>
                      <div className="media-body">
                        <h6>Total Shipment Interest</h6>
                        <Link to={"/list-all-shipments-interest"}>
                          <span>click for more details</span>
                        </Link>
                      </div>
                      <div className="align-self-center">
                        <h6>{dataInterest.data?.length}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="card overflow-hidden">
                <div className="card-content">
                  <div className="card-body cleartfix">
                    <div className="media align-items-stretch">
                      <div className="align-self-center">
                        <i className="icon-drawer primary font-large-2 mr-2"></i>
                      </div>
                      <div className="media-body">
                        <h6>Total Shipment Assigned</h6>
                        <Link to={"/list-all-shipments-assigned"}>
                          <span>click for more details</span>
                        </Link>
                      </div>
                      <div className="align-self-center">
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

            <div className="col-xl-6 col-md-12">
              <div className="card">
                <div className="card-content">
                  <div className="card-body cleartfix">
                    <div className="media align-items-stretch">
                      <div className="align-self-center">
                        <i className="icon-plane warning font-large-2 mr-2"></i>
                      </div>
                      <div className="media-body">
                        <h6>Total Shipment Delivered </h6>
                        <Link to={"/list-all-shipments-sent"}>
                          <span>click for more details</span>
                        </Link>
                      </div>
                      <div className="align-self-center">
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
