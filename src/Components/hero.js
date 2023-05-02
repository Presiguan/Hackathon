import React from "react";
import "../Components/hero.css";

function Hero() {
  return (
    <div className="container-fluid">
      <div>
        <a className="Easyride-footer" href="#">
          Easyride
        </a>
        <p className="Text">
          Let's help you to get to your destination<br></br>with ease
        </p>
      </div>
      <div className="List-container">
        <ul className="List">
          <li>
            <p className="label">Product</p>
          </li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Solutions</a>
            <button
              type="button"
              className="btn btn-light"
              style={{
                backgroundColor: "black",
                "--bs-btn-padding-y": ".15rem",
                "--bs-btn-padding-x": ".2rem",
                "--bs-btn-font-size": ".30rem",
                "--bs-btn-color": "white",
                "--bs-btn-border-radius": ".7rem",
              }}
            >
              New
            </button>
          </li>
          <li>
            <a href="#">Tutorials</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Releases</a>
          </li>
        </ul>

        <ul className="List">
          <li>
            <p className="label">Company</p>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Media kit</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul className="List">
          <li>
            <p className="label">Resources</p>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Newsletter</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Help centre</a>
          </li>
          <li>
            <a href="#">Tutorials</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>

        <ul className="List">
          <li>
            <p className="label">Social</p>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">AngelList</a>
          </li>
          <li>
            <a href="#">Dribble</a>
          </li>
        </ul>

        <ul className="List">
          <li>
            <p className="label">Legal</p>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Cookies</a>
          </li>
          <li>
            <a href="#">Licenses</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
