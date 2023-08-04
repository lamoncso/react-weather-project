import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
        <div>
            <div className="row">
            <div className="col-6">
            <h1 className="city">{props.info.city}</h1>
            </div>
            <div className="col-6 date">
          <ul>
            <li className="description text-capitalize">
              {props.info.description}
            </li>
            <li className="today">
              <FormattedDate date={props.info.date} />
            </li>
          </ul>
        </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <img
                  src={props.info.iconUrl}
                  className="img-fluid"
                  alt={props.info.description}
                />
              </div>
              <div className="col-3 temperature">
                {Math.round(props.info.temperature)}
              </div>
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
              <li>Max temperature: {Math.round(props.info.tempmax)}°C</li>
              <li>Wind: {Math.round(props.info.wind)} km/h</li>
              <li>Humidity: {Math.round(props.info.humidity)}%</li>
            </ul>
          </div>
        </div>
      </div>
    );

}