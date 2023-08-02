import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData]=useState({ready:false});

    function handleSubmit(response){
        console.log(response);
       setWeatherData({
         ready: true,
         date: "Di, 13:00",
         description: response.data.weather[0].description,
         iconUrl:
           "https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0",
         tempmax: response.data.main.temp_max,
         temperature: response.data.main.temp,
         wind: response.data.wind.speed,
         humidity: response.data.main.humidity,
       });
    }

if (weatherData.ready){
  return (
    <div className="Weather container">
      <form className="search-form mb-1">
        <div className="row">
          <div className="col-9 w-75">
            <input
              type="search"
              placeholder=" Enter a city..."
              className="search-input"
              autoFocus="on"
            />
          </div>
          <div className="col-3 w-25">
            {" "}
            <input
              type="submit"
              value="Search"
              className="search-submit btn btn-primary"
            />
          </div>
        </div>
      </form>
      <div className="date">
        <ul>
          <li className="description text-capitalize">{weatherData.description}</li>
          <li className="today">{weatherData.date}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <img
                src={weatherData.iconUrl}
                className="img-fluid"
                alt={weatherData.description}
              />
            </div>
            <div className="col-3 temperature">
              {Math.round(weatherData.temperature)}
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
            <li>Max temperature: {Math.round(weatherData.tempmax)}°C</li>
            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            <li>Humidity: {Math.round(weatherData.humidity)}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}else{

const apiKey = "0a521eaf234a3a56f45252fac3c737ad";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleSubmit);

return("Loading...")
}
}

