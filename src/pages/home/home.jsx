import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../context/Provider";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";

function Home() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const history = useHistory();
  const {
    authState: { error, user, isLoggedIn },
  } = useContext(GlobalContext);
  React.useEffect(() => {
    if (isLoggedIn === false) {
      history.push("/signin");
    }
    if (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  }, []);
  return (
    <div>
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <h3 class="text-uppercase">System Alerts</h3>
            </div>
            <div class="card-body">
              <div class="alert alert-danger alert-dismissible" role="alert">
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <strong>Important Update About New Search</strong>
                <br />
                <p>
                  Thanks for your feedback. We have decided that we are going to
                  give you more time to continue to get accustomed to New Search
                  before doing away with Legacy Search. Feel free to reference
                  these resources to help you learn{" "}
                  <a href="https://vimeo.com/506165456">New Search</a>
                  .&nbsp;Thank you for your business. Your feedback helps us
                  serve you better!
                </p>
              </div>

              <h3 class="text-uppercase">Latest News</h3>
              <p>
                <strong>Getting Started</strong>
                <br />

                <div class="videoOuterContainer">
                  <div class="videoInnerContainer">
                    <script
                      type="text/javascript"
                      id="vidyard_embed_code_EmahqARW3DrFMAT46AGyfQ"
                      src="//play.vidyard.com/EmahqARW3DrFMAT46AGyfQ.js?v=3.1.1&type=inline"
                    ></script>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5>Quick Links</h5>
            </div>
            <div class="card-body">
              <ul
                id="learningCenterVideos"
                style={{
                  "margin-bottom": "15px",
                  "margin-left": "-20px",
                  "list-style": "none",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=50', 'dispatchvid', 'height=500,width=889,resizable=no,toolbar=no,location=no');"
                    title="4 Minute Video"
                  >
                    <span>Quick Start Guide - Shippers</span>
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=19', 'dispatchvid', 'height=496,width=640,resizable=no,toolbar=no,location=no');"
                    title="1 Minute Video"
                  >
                    <span>Changing Your Password</span>
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=48', 'dispatchvid', 'height=500,width=889,resizable=no,toolbar=no,location=no');"
                    title="2 Minute Video"
                  >
                    <span>Shipping Your First Vehicle</span>
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=51', 'dispatchvid', 'height=500,width=889,resizable=no,toolbar=no,location=no');"
                    title="4 Minute Video"
                  >
                    <span>Posting a Vehicle</span>
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=2', 'dispatchvid', 'height=500,width=889,resizable=no,toolbar=no,location=no');"
                    title="2 Minute Video"
                  >
                    <span>Choosing a Carrier</span>
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=3', 'dispatchvid', 'height=500,width=889,resizable=no,toolbar=no,location=no');"
                    title="2 Minute Video"
                  >
                    <span>Dispatching a Vehicle</span>
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=42', 'dispatchvid', 'height=500,width=889,resizable=no,toolbar=no,location=no');"
                    title="2 Minute Video"
                  >
                    <span>Search Truck Space</span>
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=17', 'dispatchvid', 'height=496,width=640,resizable=no,toolbar=no,location=no');"
                    title="1 Minute Video"
                  >
                    <span>Marking a Vehicle as Picked Up or Delivered</span>
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=5', 'dispatchvid', 'height=496,width=640,resizable=no,toolbar=no,location=no');"
                    title="2 Minute Video"
                  >
                    <span>Rating a Carrier</span>
                  </a>
                </li>
                <li
                  class="hidden"
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=45', 'dispatchvid', 'height=496,width=640,resizable=no,toolbar=no,location=no');"
                    title="2 Minute Video"
                  >
                    <span>Receiving a Rating</span>
                  </a>
                </li>
                <li
                  class="hidden"
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=46', 'dispatchvid', 'height=496,width=640,resizable=no,toolbar=no,location=no');"
                    title="3 Minute Video"
                  >
                    <span>Notifications - Getting Started</span>
                  </a>
                </li>
                <li
                  class="hidden"
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=47', 'dispatchvid', 'height=496,width=640,resizable=no,toolbar=no,location=no');"
                    title="2 Minute Video"
                  >
                    <span>Managing Notifications</span>
                  </a>
                </li>
                <li
                  class="hidden"
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=23', 'dispatchvid', 'height=496,width=640,resizable=no,toolbar=no,location=no');"
                    title="2 Minute Video"
                  >
                    <span>How to Post a Document Packet</span>
                  </a>
                </li>
                <li
                  class="hidden"
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=1', 'dispatchvid', 'height=496,width=640,resizable=no,toolbar=no,location=no');"
                    title="4 Minute Video"
                  >
                    <span>Posting a Vehicle</span>
                  </a>
                </li>
                <li
                  class="hidden"
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=44', 'dispatchvid', 'height=496,width=640,resizable=no,toolbar=no,location=no');"
                    title="4 Minute Video"
                  >
                    <span>My Billing</span>
                  </a>
                </li>
                <li
                  class="hidden"
                  style={{
                    display: "flex",
                    "align-items": "center",
                  }}
                >
                  <a
                    href={{ javascript: "void(0)" }}
                    onclick="window.open('/video/learning-center?id=20', 'dispatchvid', 'height=496,width=640,resizable=no,toolbar=no,location=no');"
                    title="1 Minute Video"
                  >
                    <span>Changing Your Company Email Address</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>Recent Request for Load Boarding</h5>
            </div>
            <div class="card-body">
              <p>
                In Horizontal Layout V2 - Navigation bar is set in a Horizontal
                way with fixed width container. It also showing/hidden while
                scrolling up/down.
              </p>
              <div class="alert alert-info mb-0" role="alert">
                <p class="mb-0">
                  It is best suited for those applications where you required
                  your navigation is set to be a Horizontal way with fixed width
                  container.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
