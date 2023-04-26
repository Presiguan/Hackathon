import React from "react";
import Card1 from "../images/image 4.png";
import Card2 from "../images/image 5.png";
import Card3 from "../images/image 6.png";
import "../Components/card.css";

function Card() {
  return (
    <div className="bangs">
      <div className="image-1">
        <img src={Card1} alt="img" />
        <h3>Last Mile</h3>
        <p>
          Book a seat at the comfort <br></br>of your home
        </p>
      </div>
      <div>
        <img src={Card2} alt="img" />
        <h3>Lagride</h3>
        <p>
          Book a seat at the comfort <br></br>of your home
        </p>
      </div>
      <div>
        <img src={Card3} alt="img" />
        <h3>BRT</h3>
        <p>
          Book a seat at the comfort <br></br>of your home
        </p>
      </div>
    </div>
  );
}

export default Card;
