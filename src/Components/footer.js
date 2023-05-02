import React from "react";
import { faCoffee, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/fontawesome-free/css/all.css"; // import the styles

function Footer() {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
}

export default Footer;
