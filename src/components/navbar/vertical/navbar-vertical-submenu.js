import MenuItems from "./MenuItems";
const Submenu = ({ submenus,user }) => {
 // depthLevel = depthLevel + 1;depthLevel > 0 ?: ""
  const dropdownClass =  "pcoded-submenu" ;
  return (
      <>
    
        <ul className={`${dropdownClass}`}>
        {submenus.map((submenu, index) => (
        <li><a href={submenu.path} target="_blank">{submenu.title}</a></li>
      
        ))}
        </ul>
 </>
  );
};

export default Submenu;