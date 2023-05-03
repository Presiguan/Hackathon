import React from "react";
import Card from "../images/brt.jpg";
import Card2 from "../images/small bus.jpg";
import "../Components/heroCard2.css";

function HeroCard2() {
  return (
    <>
      <div className="hero2">
        <div className="row gap-5">
          <div className="col-12 col-md-5 col-4">
            <div className="card" style={{ width: "24rem", height: "24rem" }}>
              <img
                src={Card}
                className="card-img-top"
                alt="images"
                style={{ marginBottom: "5px" }}
              />
              <div className="card-body">
                <p className="card-text">
                  BRT fare revert 100 <br></br>percent to former <br></br>rate
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm- col-md-4">
            <div className="card" style={{ width: "24rem", height: "15rem" }}>
              <img
                src={Card2}
                className="card-img-top"
                alt="images"
                style={{ marginBottom: "5px" }}
              />
              <div className="card-body">
                <p className="card-text">
                  Lagos launches 500 <br></br>First and Last Mile buses{" "}
                  <br></br>as alternative to Okada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroCard2;
