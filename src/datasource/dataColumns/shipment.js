import { Form } from "react-bootstrap";
import { Edit } from "react-feather";
import { Link } from "react-router-dom";
export const columns = [
  {
    id: 1,
    name: "User Name",
    selector: (row) => row.User.FullName,
    sortable: true,
    reorder: true,
  },
  {
    id: 2,
    name: "Company",
    selector: (row) => row.Company.CompanyName,
    sortable: true,
    reorder: true,
  },
  {
    id: 3,
    name: "Load Category",
    selector: (row) => row.LoadCategory,
    sortable: true,
    reorder: true,
  },
  {
    id: 4,
    name: "Load Weight",
    selector: (row) => row.LoadWeight,
    sortable: true,
    reorder: true,
  },

  {
    id: 5,
    name: "Load Type",
    selector: (row) => row.LoadType,
    sortable: true,
    reorder: true,
  },

  {
    id: 6,
    name: "Load Unit",
    selector: (row) => row.LoadUnit,
    sortable: true,
    reorder: true,
  },

  {
    id: 7,
    name: "Qty",
    selector: (row) => row.Qty,
    sortable: true,
    reorder: true,
  },

  {
    id: 8,
    name: "Pick Up Region",
    selector: (row) => row.PickUpRegion,
    sortable: true,
    reorder: true,
  },
  {
    id: 9,
    name: "AssignedShipment?",
    selector: (row) => (
      <Form.Check
        type="checkbox"
        id="custom-switch"
        checked={row.AssignedShipment}
        disabled
      />
    ),
    sortable: true,
    right: true,
    reorder: true,
  },

  {
    id: 10,
    name: "Pick Up Location",
    selector: (row) => row.PickUpLocation,
    sortable: true,
    reorder: true,
  },
  {
    id: 11,
    name: "Pick Up Country",
    selector: (row) => row.PickUpCountry,
    sortable: true,
    reorder: true,
  },
  {
    id: 12,
    name: "Delivery Region",
    selector: (row) => row.DeliveryRegion,
    sortable: true,
    reorder: true,
  },
  {
    id: 13,
    name: "Delivery Country",
    selector: (row) => row.DeliveryCountry,
    sortable: true,
    reorder: true,
  },
  {
    id: 14,
    name: "Delivery Location",
    selector: (row) => row.DeliveryLocation,
    sortable: true,
    reorder: true,
  },
  {
    id: 15,
    name: "Expected PickUpDate",
    selector: (row) => row.ExpectedPickUpDate,
    sortable: true,
    reorder: true,
  },
  {
    id: 16,
    name: "Expected Delivery Date",
    selector: (row) => row.ExpectedDeliveryDate,
    sortable: true,
    reorder: true,
  },

  {
    id: 17,
    name: "Request For Shipment",
    selector: (row) => row.RequestForShipment,
    sortable: true,
    reorder: true,
  },
  {
    id: 18,
    name: "Shipment Request Price",
    selector: (row) => row.ShipmentRequestPrice,
    sortable: true,
    reorder: true,
  },
  {
    id: 19,
    name: "Delivery Contact Name",
    selector: (row) => row.DeliveryContactName,
    sortable: true,
    reorder: true,
  },
  {
    id: 20,
    name: "Delivery Contact Phone",
    selector: (row) => row.DeliveryContactPhone,
    sortable: true,
    reorder: true,
  },
  {
    id: 21,
    name: "Delivery Email",
    selector: (row) => row.DeliveryEmail,
    sortable: true,
    reorder: true,
  },
  {
    id: 22,
    name: "Shipment Date",
    selector: (row) => row.ShipmentDate,
    sortable: true,
    reorder: true,
  },
  {
    id: 23,
    name: "Shipment Docs",
    selector: (row) => row.ShipmentDocs,
    sortable: true,
    reorder: true,
  },
  {
    id: 24,
    name: "Shipment Status",
    selector: (row) => row.ShipmentStatus,
    sortable: true,
    reorder: true,
  },
  {
    id: 25,
    name: "Created Date",
    selector: (row) => row.createdAt,
    sortable: true,
    right: true,
    reorder: true,
  },

  {
    id: 26,
    name: "Updated Date",
    selector: (row) => row.updatedAt,
    sortable: true,
    right: true,
    reorder: true,
  },

  {
    name: "Action",
    sortable: false,
    selector: "null",
    cell: (row) => [
      <>
        {" "}
        <Link
          to={"/edit-vehicle-info/" + row.VehicleId}
          className="btn btn-sm"
          title="Edit  Subscription"
        >
          <Edit size={12} />
        </Link>
      </>,

      <Link
        to={"/assign-driver-to-vehicle/" + row.VehicleId}
        className="btn btn-sm"
        title="Assign Driver to Vehicle"
      >
        <i className="first fas fa-user"></i>
      </Link>,

      <Link
        to={"/delete-data/" + row.VehicleId}
        className="btn btn-sm"
        title="Delete/Archive Redundant/Incorrect data"
      >
        <i className="fas fa-trash-alt"></i>
      </Link>,
    ],
  },
];
