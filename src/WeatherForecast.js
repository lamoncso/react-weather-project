import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);
   
    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    
    if (loaded){
         return (
           <div className="row WeatherForecast">
            {forecast.map(function (dailyForecast,index){
              if(index<5){
              return(
            <div className="col" key={index}>
              <WeatherForecastDay data={dailyForecast} />
             </div>
              );}
            })}
             
           </div>
         );

    } else {

        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiKey = "6f578b96aa9505bcce148ac22cb85794";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    
    return null;
    }
}