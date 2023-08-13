import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <h1 className="city mt-3">{props.info.city}</h1>
          </div>
          <div className="col-sm-6">
            <ul className="date mt-4">
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
          <div className="col-sm-6 current-icon-temperature">
            <div className="row">
              <div className="col-3 icon">
                <WeatherIcon
                  iconCode={props.info.icon}
                  alt={props.info.desription}
                  size={50}
                />
                </div>
                <div className="col-3"> 
              <WeatherTemperature celsius={props.info.temperature} />
                </div>
                </div>
          </div>
          <div className="col-sm-6 weather-data">
            <ul>
              <li>Wind: {Math.round(props.info.wind)} km/h</li>
              <li>Humidity: {Math.round(props.info.humidity)}%</li>
            </ul>
          </div>
        </div>
      </div>
    );

}