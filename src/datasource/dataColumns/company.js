import { Form } from "react-bootstrap";
import { Edit } from "react-feather";
import { Link } from "react-router-dom";
import { ROLES } from "../../constants/enum";
import { Country, State } from "country-state-city";
export const columns = [
  {
    id: 5,
    name: "Role Type",
    selector: (row) =>
      ROLES.find((item) => item.value === row.CompanyType).text,
    sortable: true,
    reorder: true,
  },

  {
    id: 1,
    name: "Company",
    selector: (row) => row.CompanyName,
    sortable: true,
    reorder: true,
  },
  {
    id: 2,
    name: "Contact Email",
    selector: (row) => row.ContactEmail,
    sortable: true,
    reorder: true,
  },
  {
    id: 3,
    name: "Contact Phone",
    selector: (row) => row.ContactPhone,
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
    id: 10,
    name: "Country",
    selector: (row) =>
      row.Country ? Country.getCountryByCode(row.Country).name : row.Country,
    sortable: true,
    reorder: true,
  },
  {
    id: 11,
    name: "Region",
    selector: (row) =>
      row.Region
        ? State.getStateByCodeAndCountry(row.Region, row.Country).name
        : row.Region,
    sortable: true,
    reorder: true,
  },
  {
    id: 5,
    name: "Company Type",
    selector: (row) => row.CompanyType,
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
          to={"/edit-company-info/" + row.CompanyId}
          className="btn btn-sm"
          title="Edit  Company"
        >
          <i className="first fas fa-pen"></i>
        </Link>
      </>,

      // <Link
      //   to={"/add-vehicle-to-carrier/" + row.CarrierId}
      //   className="btn btn-sm"
      //   title="Assign Driver to Vehicle"
      // >
      //   <i className="first fas fa-user"></i>
      // </Link>,

      <Link
        to={"/delete-data/Companys/" + row.CompanyId}
        className="btn btn-sm"
        title="Delete/Archive Redundant/Incorrect data"
      >
        <i className="fas fa-trash-alt"></i>
      </Link>,
    ],
  },
];