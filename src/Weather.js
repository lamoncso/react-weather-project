import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather container">
      <div className="row">
        <form className="Search-form">
          <input type="search" placeholder="Enter city..." className="col-5 me-1" />
            <input type="submit" value="Search" className="col-3" /> 
        </form>
      </div>
      <h1 className="city text-start">New York</h1>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="description weather"
              />
            </div>
            <div className="col-3 temperature">25</div>
            <div className="col-3">
              <div className="row">
                <div className="col-8">°C</div>
                <div className="col-4">27°</div>
              </div>
              <div className="row">
                <div className="col-8">F</div>
                <div className="col-4">16°</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Niederschlag: 0%</li>
            <li>Wind: 12 km/h</li>
            <li>Luftfeuchtigkeit: 34%</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-2">description</div>
        <div className="col-2">Di, 13:00</div>
      </div>
    </div>
  );
}
