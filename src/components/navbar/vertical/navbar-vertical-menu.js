import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Submenu from "./navbar-vertical-submenu";

const Menu = ({ items, user }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    // const handler = (event) => {
    //   if (dropdown && ref.current && !ref.current.contains(event.target)) {
    //     setDropdown(false);
    //   }
    // };
    // document.addEventListener("mousedown", handler);
    // document.addEventListener("touchstart", handler);
    // return () => {
    //   // Cleanup the event listener
    //   document.removeEventListener("mousedown", handler);
    //   document.removeEventListener("touchstart", handler);
    //   // onMouseEnter={onMouseEnter}
    //  // onMouseLeave={onMouseLeave}
    //};
  }, []);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      id={items.key}
      className={items.submenu ? "nav-item pcoded-hasmenu" : "nav-item"}
      ref={ref}
    >
      {items.submenu ? (
        <>
          <a href="#!" className="nav-link ">
            <span className="pcoded-micon">
              <i className={items.icon}></i>
            </span>
            <span className="pcoded-mtext">{items.title}</span>
          </a>

          <Submenu submenus={items.submenu} user={user} />
        </>
      ) : (
        <>
          <Link to={items.path} title={items.title} className="nav-link ">
            <span class="pcoded-micon">
              <i class={items.icon}></i>
            </span>
            <span class="pcoded-mtext">{items.title}</span>
          </Link>{" "}
        </>
      )}
    </li>
  );
};

export default Menu;
