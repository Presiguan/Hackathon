import React from "react";
import Card from "../images/image 4.png";
import Card2 from "../images/image 5.png";
import Card3 from "../images/image 6.png";
import "../Components/heroCard.css";

function HeroCard() {
  return (
    <>
      <div className="hero">
        <div className="row g-5">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={Card}
                className="card-img-top"
                alt="images"
                style={{ marginBottom: "10px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Last Mile</h5>
                <p className="card-text">
                  Book a seat at the comfort of your home
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={Card2}
                className="card-img-top"
                alt="images"
                style={{ marginBottom: "10px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Lagride</h5>
                <p className="card-text">
                  Book a seat at the comfort of your home
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-sm-6 col-md-6"> */}
          <div className="col-12 col-sm-3 col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={Card3}
                className="card-img-top"
                alt="images"
                style={{ marginBottom: "10px" }}
              />
              <div className="card-body">
                <h5 className="card-title">BRT</h5>
                <p className="card-text">
                  Book a seat at the comfort of your home
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="display-5 fw-bold m-5">News and Updates</h2>
      </div>
    </>
  );
}

export default HeroCard;
