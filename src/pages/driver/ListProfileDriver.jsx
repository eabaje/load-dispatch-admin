import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-grid";
import { useSnackbar } from "notistack";
import { API_URL } from "../../constants";
import { fetchDataAll } from "../../helpers/query";
import DriverCard from "../../components/grid/driverCard";
function ListProfileDriver() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  // Calling the function on component mount
  const loadData=()=>{

    fetchDataAll("driver/findAllAssignedDrivers")((driver) => {
      setData(driver);
    })((err) => {
      enqueueSnackbar(err.message, { variant: "error" });
    });

    setUser(JSON.parse(localStorage.getItem("user")));


  }
  useEffect(() => {
   

    let controller = new AbortController();
    loadData();
    return () => controller?.abort();
   
  }, []);

  return (
    <>
      {data.length < 1 ? (
        <h4 class="alert alert-info">No driver record found</h4>
      ) : (
        
        <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-12">
       <Container fluid className="grid">
         <Row>
        
           {data
           .filter((item) => item?.Vehicles[0]['AssignDrivers'].Assigned===true)
           .map((item) => (
             
             <Col className="col-lg-6 ">
               <DriverCard key={item.DriverId} driver={item} />
             </Col>
           ))}
         </Row>
       </Container>
       </div>
    </div>
</div>
      )}
    </>
  );
}

export default ListProfileDriver;
