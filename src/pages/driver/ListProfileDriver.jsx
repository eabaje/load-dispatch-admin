import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from 'react-grid';
import { useSnackbar } from "notistack";
import { API_URL } from '../../constants';
import { fetchDataAll } from "../../helpers/query";
function ListProfileDriver() {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
 
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  
  // Calling the function on component mount
  useEffect(() => {
    fetchDataAll(
      "driver/findAllAssignedDrivers"
    
    )((driver) => {

      setData(driver.data);
     

    })((err) => {
      enqueueSnackbar(err.message, { variant: "error" });
    });
    
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
   <>
     <Container fluid className="grid">
        <Row>
          {data.map((f, index) => (
            <Col className="col-lg-4 ml-5">
              <driverCard
                data={f[index]}
               
              />
            </Col>
          ))}
        </Row>
      </Container>
  
   
   
   </>
  )
}

export default ListProfileDriver