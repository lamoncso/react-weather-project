import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather container">
      <form className="search-form mb-1">
        <div className="row">
          <div className="col-9 w-75">
            <input
              type="search"
              placeholder="Enter a city..."
              className="search-input"
              autoFocus="on"
            />
          </div>
          <div className="col-3 w-25">
            {" "}
            <input type="submit" value="Search" className="search-submit btn btn-primary" />
          </div>
        </div>
      </form>
    <div className="date">
      <ul>
        <li className="description">Cloudy,rainy,shitty</li>
        <li className="today">Di, 13:00</li>
      </ul>
    </div>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                className="img-fluid"
                alt="description weather"
              />
            </div>
            <div className="col-3 temperature">25</div>
            <div className="col-1">
              <div className="row unit">
                <div className="col celsius">°C</div>
                <span className="split"></span>
                <div className="col fahrenheit">°F</div>
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
    </div>
  );
}
