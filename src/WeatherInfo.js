import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
                <WeatherIcon
                  iconCode={props.info.icon}
                  alt={props.info.desription}
                />
                </div>
                <div className="col-3"> 
              <WeatherTemperature celsius={props.info.temperature} />
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