import React from "react";

function Track() {
  return (
    <>
      <article class="card">
        <header class="card-header"> My Orders / Tracking </header>
        <div class="card-body">
          <h6>Order ID: OD45345345435</h6>
          <article class="card">
            <div class="card-body row">
              <div class="col">
                {" "}
                <strong>Estimated Delivery time:</strong> <br />
                29 nov 2019{" "}
              </div>
              <div class="col">
                {" "}
                <strong>Shipping BY:</strong> <br /> BLUEDART, |{" "}
                <i class="fa fa-phone"></i> +1598675986{" "}
              </div>
              <div class="col">
                {" "}
                <strong>Status:</strong> <br /> Picked by the courier{" "}
              </div>
              <div class="col">
                {" "}
                <strong>Tracking #:</strong> <br /> BD045903594059{" "}
              </div>
            </div>
          </article>
          <div class="track">
            <div class="step active">
              {" "}
              <span class="icon">
                {" "}
                <i class="fa fa-check"></i>{" "}
              </span>{" "}
              <span class="text">Order confirmed</span>{" "}
            </div>
            <div class="step active">
              {" "}
              <span class="icon">
                {" "}
                <i class="fa fa-user"></i>{" "}
              </span>{" "}
              <span class="text"> Picked by courier</span>{" "}
            </div>
            <div class="step">
              {" "}
              <span class="icon">
                {" "}
                <i class="fa fa-truck"></i>{" "}
              </span>{" "}
              <span class="text"> On the way </span>{" "}
            </div>
            <div class="step">
              {" "}
              <span class="icon">
                {" "}
                <i class="fa fa-box"></i>{" "}
              </span>{" "}
              <span class="text">Ready for pickup</span>{" "}
            </div>
          </div>
          <hr />
          <ul class="row">
            <li class="col-md-4">
              <figure class="itemside mb-3">
                <div class="aside">
                  <img
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1571751108/Ecommerce/laptop-dell-xps-15-computer-monitors-laptops.jpg"
                    class="img-sm border"
                  />
                </div>
                <figcaption class="info align-self-center">
                  <p class="title">
                    Dell Laptop with 500GB HDD <br /> 8GB RAM
                  </p>{" "}
                  <span class="text-muted">$950 </span>
                </figcaption>
              </figure>
            </li>
            <li class="col-md-4">
              <figure class="itemside mb-3">
                <div class="aside">
                  <img
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750967/Ecommerce/ef192a21ec96.jpg"
                    class="img-sm border"
                  />
                </div>
                <figcaption class="info align-self-center">
                  <p class="title">
                    HP Laptop with 500GB HDD <br /> 8GB RAM
                  </p>{" "}
                  <span class="text-muted">$850 </span>
                </figcaption>
              </figure>
            </li>
            <li class="col-md-4">
              <figure class="itemside mb-3">
                <div class="aside">
                  <img
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg"
                    class="img-sm border"
                  />
                </div>
                <figcaption class="info align-self-center">
                  <p class="title">
                    ACER Laptop with 500GB HDD <br /> 8GB RAM
                  </p>{" "}
                  <span class="text-muted">$650 </span>
                </figcaption>
              </figure>
            </li>
          </ul>
          <hr />
          <a href="#" class="btn btn-warning" data-abc="true">
            {" "}
            <i class="fa fa-chevron-left"></i> Back to orders
          </a>
        </div>
      </article>
    </>
  );
}

export default Track;
