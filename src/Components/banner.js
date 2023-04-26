import React from "react";
import Button from "react-bootstrap/Button";
import "./banner.css";
import Banner from "../images/Component 1.png";

function banner() {
  return (
    <>
      {/* <div className="category">
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <img src={Banner} alt="Banner" className="banner-image" />
          <div className="text-overlay">
            <h5 className="text-large">
              Let's help you get to your destination<br></br>with ease
            </h5>
            <div className="btn-discover">
              <Button type="button" class="btn btn-primary">
                Discover more
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="our services">
        <h1>Our Services</h1>
      </div> */}
      <div className="banner px4 py-5 my-0 text-center">
        <h6 className="display-5 fw-bold ">
          Let's help you get to your destination<br></br>with ease
        </h6>
        <div className="btn-discover">
          <Button type="button" class="btn btn-primary">
            Discover more
          </Button>{" "}
        </div>
      </div>
      <div>
        <h1>Our Services</h1>
      </div>
    </>
  );
}

export default banner;
