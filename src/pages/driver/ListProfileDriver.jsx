import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-grid";
import { useSnackbar } from "notistack";
import { API_URL } from "../../constants";
import { fetchDataAll } from "../../helpers/query";
function ListProfileDriver() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  // Calling the function on component mount
  useEffect(() => {
    fetchDataAll("driver/findAllAssignedDrivers")((driver) => {
      setData(driver);
    })((err) => {
      enqueueSnackbar(err.message, { variant: "error" });
    });

    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  console.log("data", data);
  return (
    <>
      {data.length > 0 ? (
        <Container fluid className="grid">
          <Row>
            {data.map((f, index) => (
              <Col className="col-lg-4 ml-5">
                <driverCard d={f[index]} />
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <h4 class="alert alert-info">No driver record found</h4>
      )}
    </>
  );
}

export default ListProfileDriver;
