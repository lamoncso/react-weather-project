import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import image from "./img/anya.jpg";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
const [weatherData, setWeatherData]=useState({ready:false});
const [city, setCity] = useState(props.defaultCity);

    function handleSubmit(response){
        console.log(response);
       setWeatherData({
         ready: true,
         date: new Date(response.data.dt*1000),
         description: response.data.weather[0].description,
         iconUrl:
           "https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0",
         tempmax: response.data.main.temp_max,
         temperature: response.data.main.temp,
         wind: response.data.wind.speed,
         humidity: response.data.main.humidity,
         city: response.data.name
       });
    }

function search(){
const apiKey = "0a521eaf234a3a56f45252fac3c737ad";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleSubmit);
}

function updateCity(event){
setCity(event.target.value);
}


function handleSearch(event){
    event.preventDefault();
    search();
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

