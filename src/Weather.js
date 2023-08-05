import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import image from "./img/anya.jpg";


export default function Weather(props) {
const [weatherData, setWeatherData]=useState({ready:false});
const [city, setCity] = useState(props.defaultCity);

    function handleSubmit(response){
      console.log(response);
       setWeatherData({
         ready: true,
         date: new Date(response.data.dt*1000),
         description: response.data.weather[0].description,
         icon: response.data.weather[0].icon,
         tempmax: response.data.main.temp_max,
         temperature: response.data.main.temp,
         wind: response.data.wind.speed,
         humidity: response.data.main.humidity,
         city: response.data.name
       });
    }


function handleSearch(event){
    event.preventDefault();
    search();
}

function updateCity(event) {
  setCity(event.target.value);
}


function search() {
  const apiKey = "0a521eaf234a3a56f45252fac3c737ad";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleSubmit);
}


if (weatherData.ready){
  return (
    <div
      className="Weather container"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="background">
        <form className="search-form mb-1" onSubmit={handleSearch}>
          <div className="row">
            <div className="col-9 w-75">
              <input
                type="search"
                placeholder="Enter a city..."
                className="search-input"
                autoFocus="on"
                onChange={updateCity}
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
        <WeatherInfo info={weatherData} />
        </div>
        </div>
  );
}else{
search();
return("Loading...")
}
}

