import React from 'react';




export const menuItemsDriver =(user)=> [
    {
      title: "Dashboard",
      path: '/dashboard',
      icon:"first fas fa-home"
    },
    {
        title: "Find all Vehicles",
        path: '/list-all-shipments',
        icon:"first fas fa-car"
      },
   
    {
      title: "Driver Management",
      icon:"first fas fa-users",
      submenu: [
        {
          title: "Update Driver Profile",
          path: `/edit-driver-info/${user.UserId}`,
        },
        {
            title: " View Assigned Vehicle To Driver",
            path: `/list-assign-vehicle-driver/${user.UserId}`,
        },
        
      ],
    },
    {
        title: "List All Trips",
        path: `/list-trip-info/${user.UserId}`,
        icon:"first fas fa-road"
    },
    
  ];


  export const menuItemsCarrier =(user)=> [
    {
      title: "Dashboard",
      path: '/dashboard',
      icon:"first fas fa-home"
    },
    {
        title: "Ship Vehicles",
        icon:"first fas fa-car",
        submenu: [
            {
              title: "Post a Vehicle",
              path: `/add-shipment`,
            },
            {
                title: "List carrier Info",
                path: `/list-carriers-info/${user.CompanyId}`,
              },
            {
                title: "Vehicle List",
                path: `/list-vehicles-info/${user.CompanyId}`,
            },
            
          ],

      },
      {
        title: "Carrier",
        icon:"first fas fa-truck",
        submenu: [
            {
              title: "Create carrier Info",
              path: `/add-carrier`,
            },
            {
                title: " Find all Vehicles",
                path: `/list-all-shipments`,
              },
            {
                title: "Vehicle List",
                path: `/list-vehicles-info/${user.CompanyId}`,
            },
            
          ],

      },
   
    {
      title: "Driver Management",
      icon:"first fas fa-users",
      submenu: [
        {
          title: "List Drivers",
          path: `/list-carrier-drivers-info/${user.CompanyId}`,
        },
        {
            title: "Create Driver Profile",
            path: `/add-driver-info`,
        },
        
      ],
    },
    {
        title: "Check Trips Made",
        path: `/list-trip/${user.CompanyId}`,
        icon:"first fas fa-road"
    },
    
  ];


  export {
    menuItemsDriver,
    menuItemsCarrier,
  }