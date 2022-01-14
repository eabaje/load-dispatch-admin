import React, { useEffect } from "react";
import { useContext, useState } from "react";
import SideLinkAdmin from "./sideLinkAdmin";
import SideLinkCarrier from "./sideLinkCarrier";
import SideLinkShipper from "./sideLinkShipper";

function SideLink() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <>
      {(user.roles === "carrier" && <SideLinkCarrier />) ||
        (user.roles === "shipper" && <SideLinkShipper />) ||
        (user.roles === "broker" && <SideLinkShipper />) ||
        (user.roles === "audit" && <SideLinkAdmin />) ||
        (user.roles === "admin" && <SideLinkAdmin />) || <SideLinkAdmin />}
    </>
  );
}

export default SideLink;
