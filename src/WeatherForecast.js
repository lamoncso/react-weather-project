import React from "react";
import WeatherIcon from "./WeatherIcon"
import Axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
   
    function handleResponse(response){
        console.log(response);
    }

    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "64469ac67e6dc941feb5b50915a18dc7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    Axios.get(apiUrl).then(handleResponse);
    

    https: return (
      <div className="row WeatherForecast">
        <div className="col">
          <div className="forecast-day">Mon</div>
          <div className="forecast-icon">
            <WeatherIcon iconCode="01d" size={38} />
          </div>
          <div className="Forecast-temperatures">
            <span className="forecast-temperature-min">19°</span>
            {""} <span className="forecast-temperature-max">25°</span>
          </div>
        </div>
      </div>
    );
}