import { useState, useEffect, useRef } from "react";


import Submenu from "./navbar-vertical-submenu";

const Menu = ({ items,user }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
      // onMouseEnter={onMouseEnter}
     // onMouseLeave={onMouseLeave}
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (


    
    <li
      className={ items.submenu ? "nav-item pcoded-hasmenu": "nav-item" } 
      ref={ref}
     
    >
      {items.submenu ? (
        <>
          <a href="#!" class="nav-link "><span class="pcoded-micon"><i class="feather icon-layout"></i></span><span class="pcoded-mtext">{items.title}</span></a>
          <Submenu
            submenus={items.submenu}
            user={user}
           
          />
        </>
      ) : (<>
       
        <a href={items.path} class="nav-link "><span class="pcoded-micon"><i class={items.icon}></i></span><span class="pcoded-mtext">{items.title}</span></a>
    </>  )}
    </li>
  );
};

export default Menu;