import React from "react";
import "../Components/Nav.css";

function Navbar() {
  return (
    // <header>
    //   <nav class="navbar navbar-expand-lg bg-body-tertiary">
    //     <div class="Navbar">
    //       <a class="navbar-brand" href="#">
    //         Easyride
    //       </a>
    //       <div className="Menulist collapse navbar-collapse" id="navbarNav">
    //         <a href="/Home">Home</a>
    //         <a href="/Bookings">Bookings</a>
    //         <a href="/Traffic Feature">Traffic Feature</a>
    //         <a href="/Wallet">Wallet</a>
    //         <a href="/About Us">About Us</a>
    //         <a href="/Contact">Contact</a>
    //       </div>
    //       <div className="button">
    //         <a href="#" class="btn btn-success">
    //           Login
    //         </a>
    //         <a href="#" class="btn btn-success">
    //           Sign up
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Easyride
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bookings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Traffic Feature
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Wallet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="Nav-button">
            <button type="button" class="btn">
              Login
            </button>
            <button type="button" class="btn">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
