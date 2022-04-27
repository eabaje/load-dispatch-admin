import React from "react";
import { Link } from "react-router-dom";

function SideLinkMenu({menuData }) {
  return (
    <>
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
             {menuData.map((menu, index) => (
          <li key={index}  style={{
            "display": "flex",
            "align-items": "center",
          }}>
            <Link to={menu.path} title={menu.title}>
             
              <span> {menu.title}</span>
            </Link>{" "}
          </li>
        ))}
          
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideLinkMenu;
