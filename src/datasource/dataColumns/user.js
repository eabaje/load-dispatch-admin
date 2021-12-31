import { Form } from "react-bootstrap";
import { Edit } from "react-feather";
import { Link } from "react-router-dom";
export const columns = [
  {
    id: 5,
    name: "FullName",
    selector: (row) => row.FullName,
    sortable: true,
    reorder: true,
  },

  {
    id: 1,
    name: "Company",
    selector: (row) => row.Company.CompanyName,
    sortable: true,
    reorder: true,
  },
  {
    id: 2,
    name: "Contact Email",
    selector: (row) => row.Email,
    sortable: true,
    reorder: true,
  },
  {
    id: 3,
    name: "Contact Phone",
    selector: (row) => row.Phone,
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
    name: "IsActivated?",
    selector: (row) => (
      <Form.Check
        type="checkbox"
        id="custom-switch"
        checked={row.IsActivated}
        disabled
      />
    ),
    sortable: true,
    right: true,
    reorder: true,
  },
  {
    id: 5,
    name: "AcceptTerms?",
    selector: (row) => (
      <Form.Check
        type="checkbox"
        id="custom-switch"
        checked={row.AcceptTerms}
        disabled
      />
    ),
    sortable: true,
    right: true,
    reorder: true,
  },

  {
    id: 10,
    name: "Country",
    selector: (row) => row.Country,
    sortable: true,
    reorder: true,
  },
  {
    id: 11,
    name: "Region",
    selector: (row) => row.Region,
    sortable: true,
    reorder: true,
  },
  {
    id: 5,
    name: "Payment Method",
    selector: (row) => row.PaymentMethod,
    sortable: true,
    reorder: true,
  },

  {
    id: 12,
    name: "Role",
    selector: (row) => row.Company.CompanyType,
    sortable: true,
    right: true,
    reorder: true,
  },

  {
    id: 14,
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
          to={"/edit-user-info/" + row.UserId}
          className="btn btn-sm"
          title="Edit  User Info"
        >
          <Edit size={12} />
        </Link>
      </>,

      <Link
        to={"/list-company-info/" + row.UserId}
        className="btn btn-sm"
        title="List Company Info"
      >
        <i className="first fas fa-cog"></i>
      </Link>,

      <Link
        to={"/delete-data/" + row.CarrierId}
        className="btn btn-sm"
        title="Delete/Archive Redundant/Incorrect data"
      >
        <i className="fas fa-trash-alt"></i>
      </Link>,
    ],
  },
];
