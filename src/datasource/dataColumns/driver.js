import { Form } from "react-bootstrap";
import { Edit } from "react-feather";
import { Link } from "react-router-dom";

export const columns = (params) => [
  {
    id: 1,
    name: "Company",
    selector: (row) => row.Company.CompanyName,
    sortable: true,
    reorder: true,
  },
  {
    id: 2,
    name: "Driver Name",
    selector: (row) => row.DriverName,
    sortable: true,
    reorder: true,
  },
  {
    id: 3,
    name: "Vehicle Number",
    selector: (row) => row.VehicleNumber,
    sortable: true,
    reorder: true,
  },
  {
    id: 4,
    name: "Address",
    selector: (row) => row.Address,
    sortable: true,
    reorder: true,
  },

  {
    id: 5,
    name: "City",
    selector: (row) => row.City,
    sortable: true,
    reorder: true,
  },

  {
    id: 6,
    name: "Country",
    selector: (row) => row.Country,
    sortable: true,
    reorder: true,
  },

  {
    id: 7,
    name: "Phone",
    selector: (row) => row.Phone,
    sortable: true,
    reorder: true,
  },

  {
    id: 8,
    name: "Email",
    selector: (row) => row.Email,
    sortable: true,
    reorder: true,
  },
  {
    id: 9,
    name: "Licensed?",
    selector: (row) => (
      <Form.Check
        type="checkbox"
        id="custom-switch"
        checked={row.Licensed}
        disabled
      />
    ),
    sortable: true,
    right: true,
    reorder: true,
  },

  {
    id: 10,
    name: "PicUrl",
    selector: (row) => row.PicUrl,
    sortable: true,
    reorder: true,
  },
  {
    id: 10,
    name: "License Url",
    selector: (row) => row.LicenseUrl,
    sortable: true,
    reorder: true,
  },
  {
    id: 10,
    name: "Rating",
    selector: (row) => row.Rating,
    sortable: true,
    reorder: true,
  },

  {
    id: 11,
    name: "Driver Docs",
    selector: (row) => row.DriverDocs,
    sortable: true,
    reorder: true,
  },

  {
    id: 12,
    name: "Created Date",
    selector: (row) => row.createdAt,
    sortable: true,
    right: true,
    reorder: true,
  },

  {
    id: 13,
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
          to={"/edit-driver-info/" + row.DriverId}
          className="btn btn-sm"
          title="Edit  Driver Info"
        >
          <Edit size={12} />
        </Link>
      </>,

      <Link
        to={"/assign-driver-to-vehicle/" + row.DriverId}
        className="btn btn-sm"
        title="Assign driver to vehicle"
      >
        <i className="first fas fa-car"></i>
      </Link>,

      <Link
        to={"/delete-data/" + row.DriverId}
        className="btn btn-sm"
        title="Delete/Archive Redundant/Incorrect data"
      >
        <i className="fas fa-trash-alt"></i>
      </Link>,
    ],
  },
];
