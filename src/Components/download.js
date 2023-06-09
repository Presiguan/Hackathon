import React from "react";
import Rectangle from "../images/Rectangle 42.png";
import Map from "../images/Frame 176.png";
import "../Components/download.css";

function Download() {
  return (
    <>
      <div
        className="download"
        style={{
          position: "inherit",
          margin: "70px",
          padding: "60px",
          backgroundColor: "#037B9F",
          borderRadius: "10px",
          width: "1116px",
          height: "351px",
          backgroundImage: `url(${Rectangle})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2
          style={{
            padding: "0px 80px 0px 0px",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "left",
            color: "white",
          }}
        >
          Download our App
        </h2>
        <p
          style={{
            color: "white",
            padding: "10px 100px 0px 40px",
            fontSize: "25px",
            position: "absolute",
            textAlign: "center",
          }}
        >
          Enjoy our services from <br />
          the comfort of your <br />
          phone
        </p>
        {/* <h5
        
        // style={{
        //   position: "absolute",
        //   padding: "160px 0px 0px 200px",
        //   left: "40px",
        //   // color: "white",
        //   // textDecoration: "none",
        // }}
        >
          {/* <button className="btn border-0">Download now</button> */}
        {/* <a href="https://www.example.com" className="text-white">
            Download now
          </a>
        </h5> */}

        <div
          style={{
            position: "absolute",
            width: "133px",
            top: "50",
            right: "90",
            transform: "translate(-50%, -75%)",
            padding: "590px 400px 0px 1600px",
          }}
        >
          <img src={Map} alt="Map"></img>
        </div>
        <div className="text">
          <a href="download page" className="text2">
            Download now
          </a>
        </div>
      </div>
    </>
  );
}

export default Download;
