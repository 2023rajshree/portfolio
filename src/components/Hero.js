import React from "react";
import illustrate from "../assets/illustrate.jpeg"; // Import your image

export default function Hero() {
  return (
    <section>
      <div className="container bg-linear">
        <div className="row d-flex justify-content-center align-items-center">
          {/* Left Column - Profile Info */}
          <div className="col text-center">
            <img
              src={illustrate}
              className="circle-image"
              alt="Rajshree Tungare"
            />
            <h1>Rajshree Tungare</h1>
            <h2>Web Developer</h2>
            <div>
              <button className="btn">Get in touch</button>
              <button className="btn">Download Resume</button>
            </div>
          </div>

          <div className="col">
            <div className="border p-1">
              <div className="border-bottom button-container">
                <span className="button-red"></span>
                <span className="button-yellow"></span>
                <span className="button-green"></span>
              </div>
              <div className="row container">ju</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
