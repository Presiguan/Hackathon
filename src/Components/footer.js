import React from "react";
import twitter from "../images/social icons/twitter.png";
import linkedin from "../images/social icons/linkedin.png";
import facebook from "../images/social icons/facebook.png";
import github from "../images/social icons/gitHub.png";
import angelist from "../images/social icons/angelist.png";
import dribble from "../images/social icons/dribble.png";
function Footer() {
  return (
    <div
      className="footer"
      style={{
        position: "inherit",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#F9FAFB",
        padding: "20px 0px 0px 20px",
      }}
    >
      <p style={{ color: "#E0E0E0" }}>
        © 2023 Untitled UI. All rights reserved.
      </p>
      <div
        className="footer"
        style={{
          display: "flex",
          listStyleType: "none",
          position: "inherit",
          margin: "0px",
          padding: "0px 100px 0px 0px",
          opacity: "0.5",
          width: "30%",
        }}
      >
        <li style={{ marginRight: "20px" }}>
          <img src={twitter} alt="image"></img>
        </li>
        <li style={{ marginRight: "20px" }}>
          <img src={linkedin} alt="image"></img>
        </li>
        <li style={{ marginRight: "20px" }}>
          <img src={facebook} alt="image"></img>
        </li>
        <li style={{ marginRight: "20px" }}>
          <img src={github} alt="image"></img>
        </li>
        <li style={{ marginRight: "20px" }}>
          <img src={angelist} alt="image"></img>
        </li>
        <li style={{ marginRight: "20px" }}>
          <img src={dribble} alt="image"></img>
        </li>
      </div>
    </div>
  );
}

export default Footer;
